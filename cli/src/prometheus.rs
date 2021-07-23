// SPDX-FileCopyrightText: 2021 Chorus One AG
// SPDX-License-Identifier: GPL-3.0

//! Utilities for formatting Prometheus metrics.
//!
//! See also <https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format>.

use lido::metrics::{LamportsHistogram, Metrics};
use std::io;
use std::io::Write;
use std::time::SystemTime;

pub struct MetricFamily<'a> {
    /// Name of the metric, e.g. `goats_teleported_total`.
    pub name: &'a str,
    /// HELP line content.
    pub help: &'a str,
    /// TYPE line content. Most common are `counter`, `gauge`, and `histogram`.
    pub type_: &'a str,
    /// Values for this metric, possibly with labels or a suffix.
    pub metrics: Vec<Metric<'a>>,
}

pub struct Metric<'a> {
    /// Suffix to append to the metric name, useful for e.g. the `_bucket` suffix on histograms.
    pub suffix: &'a str,

    /// Name-value label pairs.
    pub labels: Vec<(&'a str, String)>,

    /// Metric value.
    pub value: u64,

    /// When true, divide `value` by 10<sup>9</sup> and render as fixed-point number.
    pub nano: bool,

    /// Time at which this metric was observed, when proxying metrics.
    pub timestamp: Option<SystemTime>,
}

impl<'a> Metric<'a> {
    /// Construct a basic metric with just a value.
    ///
    /// Can be extended with the builder-style methods below.
    pub fn new(value: u64) -> Metric<'a> {
        Metric {
            labels: Vec::new(),
            suffix: "",
            value,
            nano: false,
            timestamp: None,
        }
    }

    /// Enable the 10<sup>-9</sup> multiplier.
    pub fn nano(mut self) -> Metric<'a> {
        self.nano = true;
        self
    }

    /// Set the timestamp.
    pub fn at(mut self, at: SystemTime) -> Metric<'a> {
        self.timestamp = Some(at);
        self
    }

    /// Set the suffix.
    pub fn with_suffix(mut self, suffix: &'a str) -> Metric<'a> {
        self.suffix = suffix;
        self
    }

    pub fn with_label(mut self, label_key: &'a str, label_value: String) -> Metric<'a> {
        self.labels.push((label_key, label_value));
        self
    }
}

pub fn write_metric<W: Write>(out: &mut W, family: &MetricFamily) -> io::Result<()> {
    writeln!(out, "# HELP {} {}", family.name, family.help)?;
    writeln!(out, "# TYPE {} {}", family.name, family.type_)?;
    for metric in &family.metrics {
        write!(out, "{}{}", family.name, metric.suffix)?;

        // If there are labels, write the key-value pairs between {}.
        // Escaping of the value uses Rust's string syntax, which is
        // not exactly what Prometheus wants, but it is identical for
        // all of the values that we use it with; this is not a general
        // Prometheus formatter, just a quick one for our use.
        if !metric.labels.is_empty() {
            write!(out, "{{")?;
            let mut separator = "";
            for (key, value) in &metric.labels {
                write!(out, "{}{}={:?}", separator, key, value)?;
                separator = ",";
            }
            write!(out, "}}")?;
        }

        if metric.nano {
            write!(
                out,
                " {}.{:0>9}",
                metric.value / 1_000_000_000,
                metric.value % 1_000_000_000
            )?;
        } else {
            write!(out, " {}", metric.value)?;
        }

        if let Some(timestamp) = metric.timestamp {
            let unix_time_ms = match timestamp.duration_since(SystemTime::UNIX_EPOCH) {
                Ok(duration) => duration.as_millis(),
                Err(..) => panic!("Found a metric dated before UNIX_EPOCH."),
            };
            // Timestamps in Prometheus are milliseconds since epoch,
            // excluding leap seconds. (Which is what you get if your system
            // clock tracks UTC.)
            write!(out, " {}", unix_time_ms)?;
        }

        writeln!(out)?;
    }

    // Add a blank line for readability by humans.
    writeln!(out)
}

pub fn solido_histogram_to_metrics(at: SystemTime, histogram: &LamportsHistogram) -> Vec<Metric> {
    let mut metrics = Vec::with_capacity(histogram.counts.len() + 2);

    // Add the histogram buckets, these have an "le" label (less than or equal)
    // to specify the bound, which we measure in SOL.
    for (&count, &upper_bound) in histogram
        .counts
        .iter()
        .zip(LamportsHistogram::BUCKET_UPPER_BOUNDS.iter())
    {
        let le = match upper_bound.0 {
            u64::MAX => "+Inf".to_string(),
            n => format!("{}.{:09}", n / 1_000_000_000, n % 1_000_000_000),
        };
        metrics.push(
            Metric::new(count)
                .with_suffix("_bucket")
                .with_label("le", le)
                .at(at),
        );
    }

    // Aside from the buckets, histograms should have two additional metrics:
    // a _sum, and a _count (which is the same as the +Inf bucket).
    metrics.push(
        Metric::new(histogram.total.0)
            .nano()
            .with_suffix("_sum")
            .at(at),
    );
    metrics.push(
        Metric::new(histogram.num_observations())
            .with_suffix("_count")
            .at(at),
    );

    metrics
}

pub fn write_solido_metrics_as_prometheus<W: io::Write>(
    metrics: &Metrics,
    at: SystemTime,
    out: &mut W,
) -> io::Result<()> {
    write_metric(
        out,
        &MetricFamily {
            name: "solido_fee_treasury_sol_total",
            help: "Total fees paid to the treasury, in SOL value before conversion to stSOL.",
            type_: "counter",
            metrics: vec![Metric::new(metrics.fee_treasury_sol_total.0).nano().at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_fee_treasury_st_sol_total",
            help: "Total fees paid to the treasury.",
            type_: "counter",
            metrics: vec![Metric::new(metrics.fee_treasury_st_sol_total.0)
                .nano()
                .at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_fee_validation_sol_total",
            help: "Total validation fees paid to validators (excluding commission they took), in SOL value before conversion to stSOL.",
            type_: "counter",
            metrics: vec![Metric::new(metrics.fee_validation_sol_total.0).nano().at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_fee_validation_st_sol_total",
            help: "Total validation fees paid to validators as stSOL (excluding commission they took).",
            type_: "counter",
            metrics: vec![Metric::new(metrics.fee_validation_st_sol_total.0).nano().at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_fee_developer_sol_total",
            help: "Total fees paid to the developer, in SOL value before conversion to stSOL.",
            type_: "counter",
            metrics: vec![Metric::new(metrics.fee_developer_sol_total.0).nano().at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_fee_developer_st_sol_total",
            help: "Total fees paid to the developer.",
            type_: "counter",
            metrics: vec![Metric::new(metrics.fee_developer_st_sol_total.0)
                .nano()
                .at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_st_sol_appreciation_sol_total",
            help: "Total SOL that went to benefit stSOL holders, i.e. rewards gained by users.",
            type_: "counter",
            metrics: vec![Metric::new(metrics.st_sol_appreciation_sol_total.0)
                .nano()
                .at(at)],
        },
    )?;
    write_metric(
        out,
        &MetricFamily {
            name: "solido_deposit_amount_sol",
            help: "Total amount of SOL deposited by users.",
            type_: "histogram",
            metrics: solido_histogram_to_metrics(at, &metrics.deposit_amount),
        },
    )?;
    Ok(())
}

#[cfg(test)]
mod test {
    use std::str;

    use super::{write_metric, Metric, MetricFamily};

    #[test]
    fn write_metric_without_labels() {
        let mut out: Vec<u8> = Vec::new();
        write_metric(
            &mut out,
            &MetricFamily {
                name: "goats_teleported_total",
                help: "Number of goats teleported since launch.",
                type_: "counter",
                metrics: vec![Metric::new(144)],
            },
        )
        .unwrap();

        assert_eq!(
            str::from_utf8(&out[..]),
            Ok(
                "# HELP goats_teleported_total Number of goats teleported since launch.\n\
                 # TYPE goats_teleported_total counter\n\
                 goats_teleported_total 144\n\n\
                "
            )
        )
    }

    #[test]
    fn write_metric_histogram() {
        let mut out: Vec<u8> = Vec::new();
        write_metric(
            &mut out,
            &MetricFamily {
                name: "teleported_goat_weight_kg",
                help: "Histogram of the weight of teleported goats.",
                type_: "histogram",
                metrics: vec![
                    Metric::new(44)
                        .with_suffix("_bucket")
                        .with_label("le", "50.0".to_string()),
                    Metric::new(67)
                        .with_suffix("_bucket")
                        .with_label("le", "75.0".to_string()),
                    Metric::new(144)
                        .with_suffix("_bucket")
                        .with_label("le", "+Inf".to_string()),
                    Metric::new(11520).with_suffix("_sum"),
                    Metric::new(144).with_suffix("_count"),
                ],
            },
        )
        .unwrap();

        assert_eq!(
            str::from_utf8(&out[..]),
            Ok(
                "# HELP teleported_goat_weight_kg Histogram of the weight of teleported goats.\n\
                 # TYPE teleported_goat_weight_kg histogram\n\
                 teleported_goat_weight_kg_bucket{le=\"50.0\"} 44\n\
                 teleported_goat_weight_kg_bucket{le=\"75.0\"} 67\n\
                 teleported_goat_weight_kg_bucket{le=\"+Inf\"} 144\n\
                 teleported_goat_weight_kg_sum 11520\n\
                 teleported_goat_weight_kg_count 144\n\n\
                "
            )
        )
    }

    #[test]
    fn write_metric_multiple_labels() {
        let mut out: Vec<u8> = Vec::new();
        write_metric(
            &mut out,
            &MetricFamily {
                name: "goats_teleported_total",
                help: "Number of goats teleported since launch by departure and arrival.",
                type_: "counter",
                metrics: vec![
                    Metric::new(10)
                        .with_label("src", "AMS".to_string())
                        .with_label("dst", "ZRH".to_string()),
                    Metric::new(53)
                        .with_label("src", "ZRH".to_string())
                        .with_label("dst", "DXB".to_string()),
                ],
            },
        )
        .unwrap();

        assert_eq!(
            str::from_utf8(&out[..]),
            Ok(
                "# HELP goats_teleported_total Number of goats teleported since launch by departure and arrival.\n\
                 # TYPE goats_teleported_total counter\n\
                 goats_teleported_total{src=\"AMS\",dst=\"ZRH\"} 10\n\
                 goats_teleported_total{src=\"ZRH\",dst=\"DXB\"} 53\n\n\
                "
            )
        )
    }

    #[test]
    fn write_metric_with_timestamp() {
        use std::time::{Duration, SystemTime};

        let mut out: Vec<u8> = Vec::new();
        let t = SystemTime::UNIX_EPOCH + Duration::from_secs(77);
        write_metric(
            &mut out,
            &MetricFamily {
                name: "goats_teleported_total",
                help: "Number of goats teleported since launch.",
                type_: "counter",
                metrics: vec![Metric::new(10).at(t)],
            },
        )
        .unwrap();

        assert_eq!(
            str::from_utf8(&out[..]),
            Ok(
                "# HELP goats_teleported_total Number of goats teleported since launch.\n\
                 # TYPE goats_teleported_total counter\n\
                 goats_teleported_total 10 77000\n\n\
                "
            )
        )
    }

    #[test]
    fn write_metric_nano() {
        let mut out: Vec<u8> = Vec::new();
        write_metric(
            &mut out,
            &MetricFamily {
                name: "goat_weight_kg",
                help: "Weight of the goat in kilograms.",
                type_: "gauge",
                metrics: vec![
                    // One greater than 1, with no need for zero padding.
                    Metric::new(67_533_128_017).nano(),
                    // One smaller than 1, with the need for zero padding.
                    Metric::new(128_017).nano(),
                ],
            },
        )
        .unwrap();

        assert_eq!(
            str::from_utf8(&out[..]),
            Ok("# HELP goat_weight_kg Weight of the goat in kilograms.\n\
                 # TYPE goat_weight_kg gauge\n\
                 goat_weight_kg 67.533128017\n\
                 goat_weight_kg 0.000128017\n\n\
                ")
        )
    }
}
