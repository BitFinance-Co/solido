"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7107],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6007:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],l={title:"feemanagement",description:"Overview of fee management in LIDO for Solana",keywords:["fee","multi-sig","lido","solana"],sidebar_position:3},c={unversionedId:"governance/fee-management",id:"governance/fee-management",isDocsHomePage:!1,title:"Fee Management",description:"Overview of fee management in LIDO for Solana",source:"@site/docs/governance/fee-management.md",sourceDirName:"governance",slug:"/governance/fee-management",permalink:"/solido/governance/fee-management",version:"current",sidebarPosition:3,frontMatter:{title:"feemanagement",description:"Overview of fee management in LIDO for Solana",keywords:["fee","multi-sig","lido","solana"],sidebar_position:3},sidebar:"solidoSidebar",previous:{title:"Governance Responsibilities",permalink:"/solido/governance/governance-responsibilities"},next:{title:"Using the Lido for Solana CLI for Governance",permalink:"/solido/governance/using-cli-for-multisig"}},u=[{value:"Fee Distribution",id:"fee-distribution",children:[]}],s={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fee-distribution"},"Fee Distribution"),(0,i.kt)("p",null,"10% of the staking fees are taken and distributed across the Lido stakeholders. That 10% is distributed in the following manner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Insurance Fund: a% (of the 10%)"),(0,i.kt)("li",{parentName:"ul"},"Treasury Fund: b%"),(0,i.kt)("li",{parentName:"ul"},"Chorus One Fund: c%"),(0,i.kt)("li",{parentName:"ul"},"Validator Fund: d%")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: For the validator fund, this is distributed equally across the current (for that epoch) list of validators.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"All fees are distributed in the form of stSOL")))}f.isMDXComponent=!0}}]);