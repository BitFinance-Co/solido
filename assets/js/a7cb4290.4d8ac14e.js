(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9679],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=o,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},695:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=a(2122),o=a(9756),i=(a(7294),a(3905)),r={title:"Solflare",description:"Overview of user staking in LIDO for Solana with Solflare",keywords:["staking","end-user","lido","solana","solflare"],sidebar_label:"Solflare",sidebar_position:4},s={unversionedId:"Guides/Staking/Wallets/Solflare",id:"Guides/Staking/Wallets/Solflare",isDocsHomePage:!1,title:"How to Stake Solana on Lido",description:"Overview of user staking in LIDO for Solana with Solflare",source:"@site/docs/Guides/Staking/Wallets/Solflare.md",sourceDirName:"Guides/Staking/Wallets",slug:"/Guides/Staking/Wallets/Solflare",permalink:"/solido/docs/Guides/Staking/Wallets/Solflare",version:"current",sidebar_label:"Solflare",sidebarPosition:4,frontMatter:{title:"Solflare",description:"Overview of user staking in LIDO for Solana with Solflare",keywords:["staking","end-user","lido","solana","solflare"],sidebar_label:"Solflare",sidebar_position:4},sidebar:"solidoSidebar",previous:{title:"How to Stake Solana on Lido",permalink:"/solido/docs/Guides/Staking/Wallets/Phantom"},next:{title:"How to Stake Solana on Lido",permalink:"/solido/docs/Guides/Staking/Wallets/Solong"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",children:[]},{value:"Step 1: Create or Restore Solflare Wallet",id:"step-1-create-or-restore-solflare-wallet",children:[{value:"Creating the wallet",id:"creating-the-wallet",children:[]},{value:"Restoring the wallet",id:"restoring-the-wallet",children:[]},{value:"Logged In",id:"logged-in",children:[]}]},{value:"Step 2: Connect Lido to Solflare",id:"step-2-connect-lido-to-solflare",children:[]},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",children:[{value:"Account info",id:"account-info",children:[]},{value:"Transaction Parameters",id:"transaction-parameters",children:[]},{value:"Lido Statistics",id:"lido-statistics",children:[]},{value:"FAQs",id:"faqs",children:[]}]},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",children:[]},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",children:[]},{value:"Withdrawing Solana",id:"withdrawing-solana",children:[]},{value:"Resources",id:"resources",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget",src:a(923).Z})),(0,i.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,i.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sollet"),(0,i.kt)("li",{parentName:"ol"},"Phantom"),(0,i.kt)("li",{parentName:"ol"},"Solflare"),(0,i.kt)("li",{parentName:"ol"},"Solong"),(0,i.kt)("li",{parentName:"ol"},"Ledger")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-1-create-or-restore-solflare-wallet"},"Step 1: Create or Restore Solflare Wallet"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://solflare.com/"},"https://solflare.com/")," to create/restore your solana wallet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Solflare",src:a(4525).Z})),(0,i.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,i.kt)("p",null,"If you do not have a wallet you yet, you should"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new wallet,"),(0,i.kt)("li",{parentName:"ol"},"Note down your password, and"),(0,i.kt)("li",{parentName:"ol"},"Download the kyestore file, and\nstore these in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create 1",src:a(3645).Z}),"\n",(0,i.kt)("img",{alt:"Create 2",src:a(227).Z}),"\n",(0,i.kt)("img",{alt:"Create 3",src:a(4795).Z}),"\n",(0,i.kt)("img",{alt:"Create 4",src:a(9164).Z}),"\n",(0,i.kt)("img",{alt:"Create 5",src:a(6337).Z})),(0,i.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,i.kt)("p",null,"If you already have a wallet, you can restore it on solflare using the associated password and keystore file. Follow the online instructions to restore your SOL account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Restore 1",src:a(9940).Z}),"\n",(0,i.kt)("img",{alt:"Restore 2",src:a(9818).Z})),(0,i.kt)("h3",{id:"logged-in"},"Logged In"),(0,i.kt)("p",null,"Once you have funded your Solflare wallet with Solana, you can log in to solflare webapp to see your account details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Logged In",src:a(8061).Z})),(0,i.kt)("h2",{id:"step-2-connect-lido-to-solflare"},"Step 2: Connect Lido to Solflare"),(0,i.kt)("p",null,"Once your wallet is setup visit ",(0,i.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Solflare account to the Lido interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect",src:a(2427).Z})),(0,i.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wallet List",src:a(8658).Z})),(0,i.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,i.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Solflare."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve Connection",src:a(188).Z})),(0,i.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connected Widget",src:a(7779).Z})),(0,i.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,i.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,i.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interface",src:a(8440).Z})),(0,i.kt)("h3",{id:"account-info"},"Account info"),(0,i.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"GMXFs1SpNhwVW7m9sHTZks5oEEtAVqmySX2zkJ5ffUT"))),(0,i.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,i.kt)("a",{parentName:"p",href:".https://explorer.solana.com/address/GMXFs1SpNhwVW7m9sHTZks5oEEtAVqmySX2zkJ5ffUT?cluster=testnet"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction Parameters",src:a(4701).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect Dialog",src:a(2640).Z})),(0,i.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,i.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,i.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,i.kt)("li",{parentName:"ul"},"Transaction cost"),(0,i.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction Parameters",src:a(5123).Z})),(0,i.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,i.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lido Parameters",src:a(7324).Z})),(0,i.kt)("h3",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Faqs",src:a(6489).Z})),(0,i.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stake",src:a(2963).Z})),(0,i.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note ",(0,i.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking",src:a(3085).Z})),(0,i.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve 1",src:a(3285).Z})),(0,i.kt)("p",null,"After verifying the information you can approve now."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve 2",src:a(8573).Z})),(0,i.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,i.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,i.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View Transaction",src:a(1552).Z})),(0,i.kt)("p",null,"This is useful as it tells you the ",(0,i.kt)("a",{parentName:"p",href:".https://explorer.solana.com/tx/3sLpWNJrhY7nUWKuLJx6nTGjxaJNUGTYVsFT8Uh9UNa5nQ2rRMZZcnb66ELEMSME5cmUycP4V4CUoBSvhAjLiwdw?cluster=testnet"},"current status")," of your transaction."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3sLpWNJrhY7nUWKuLJx6nTGjxaJNUGTYVsFT8Uh9UNa5nQ2rRMZZcnb66ELEMSME5cmUycP4V4CUoBSvhAjLiwdw?cluster=testnet"},"https://explorer.solana.com/tx/3sLpWNJrhY7nUWKuLJx6nTGjxaJNUGTYVsFT8Uh9UNa5nQ2rRMZZcnb66ELEMSME5cmUycP4V4CUoBSvhAjLiwdw?cluster=testnet"))),(0,i.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirmation 1",src:a(7202).Z}),"\n",(0,i.kt)("img",{alt:"Confirmation 2",src:a(3326).Z}),"\n",(0,i.kt)("img",{alt:"Confirmation 3",src:a(91).Z})),(0,i.kt)("p",null,"Finally, after 32 confirmations the transaction gets confirmed. The lido widget will reflect the new balance"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirmation 4",src:a(5796).Z})),(0,i.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update",src:a(1703).Z}),"\n",(0,i.kt)("img",{alt:"Updated",src:a(9042).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,i.kt)("h2",{id:"withdrawing-solana"},"Withdrawing Solana"),(0,i.kt)("p",null,"Withdrawals are not enabled yet. They will be live within the coming months. If you click on the ",(0,i.kt)("strong",{parentName:"p"},"Unstake")," tab you will see an error message pop up."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unstake",src:a(6692).Z})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:".https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}u.isMDXComponent=!0},2427:function(e,t,a){"use strict";t.Z=a.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},6489:function(e,t,a){"use strict";t.Z=a.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},8440:function(e,t,a){"use strict";t.Z=a.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},7324:function(e,t,a){"use strict";t.Z=a.p+"assets/images/lido_params-537175b3683c562d73893a34ab7a7614.png"},2963:function(e,t,a){"use strict";t.Z=a.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},6692:function(e,t,a){"use strict";t.Z=a.p+"assets/images/unstake-ff2783514f68340f6894e6afdca39954.png"},1552:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},923:function(e,t,a){"use strict";t.Z=a.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},4701:function(e,t,a){"use strict";t.Z=a.p+"assets/images/account_info-6560940154697e5e541522ecfd09c7e9.png"},3285:function(e,t,a){"use strict";t.Z=a.p+"assets/images/approve1-103f8101cca410234f7a1be79c90ec5a.png"},8573:function(e,t,a){"use strict";t.Z=a.p+"assets/images/approve2-f24b22f37d0ddc67ba904f4e696bd98f.png"},188:function(e,t,a){"use strict";t.Z=a.p+"assets/images/approve_connection-ba0bf7d1c7357ff76990bad3f83c0427.png"},7202:function(e,t,a){"use strict";t.Z=a.p+"assets/images/confirmations1-da0b647168b33c77c0eb800cbcb187ad.png"},3326:function(e,t,a){"use strict";t.Z=a.p+"assets/images/confirmations2-aaa332bafb825d35a4792df9835609de.png"},91:function(e,t,a){"use strict";t.Z=a.p+"assets/images/confirmations3-dc4d65f450893cf5e1500db518903b63.png"},5796:function(e,t,a){"use strict";t.Z=a.p+"assets/images/confirmations4-d091d2fe48f993ea41fb1eb3203dc8f1.png"},2640:function(e,t,a){"use strict";t.Z=a.p+"assets/images/connect_dialog_2-c30ccf8135fa1f76b273b6953610ab75.png"},7779:function(e,t,a){"use strict";t.Z=a.p+"assets/images/connected_widget-e7370bf4b11d943c0b9d146d1bebc1a7.png"},3645:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create1-561d49882782263c730af2557570db48.png"},227:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create2-85e20162ea6efdc5eebf840119513263.png"},4795:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create3-2bbfa6790277c7aed47c4c5f025868dc.png"},9164:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create4-bad783196c0abbafa700bfe05d30dad9.png"},6337:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create5_alt-e6decb61608f2584be80fa2e0f23b867.png"},8061:function(e,t,a){"use strict";t.Z=a.p+"assets/images/logged_in-d71d66615ec28ff1aba0b5d422bd3470.png"},9940:function(e,t,a){"use strict";t.Z=a.p+"assets/images/restore1-4c8c8532f7b45298a5fd9f93f056d4ac.png"},9818:function(e,t,a){"use strict";t.Z=a.p+"assets/images/restore2-61929f1e4495cdf37922677767a4574d.png"},4525:function(e,t,a){"use strict";t.Z=a.p+"assets/images/solflaredotcom-22b31576f57d589c5a53ed4bf9545e86.png"},3085:function(e,t,a){"use strict";t.Z=a.p+"assets/images/staking-53acea6c2bf57e92dc53e0a4bfbf74ac.png"},5123:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tx_params-9613ae72e5860b9d4ac94570d20f9eaa.png"},1703:function(e,t,a){"use strict";t.Z=a.p+"assets/images/update-e463f745c9555950cd1d49f15ed0fad6.png"},9042:function(e,t,a){"use strict";t.Z=a.p+"assets/images/updated-2c5becf2d6d680d23ee21d8515c8c8e2.png"},8658:function(e,t,a){"use strict";t.Z=a.p+"assets/images/wallet_list-7f20f73e26c3ff9d9677656dda406c54.png"}}]);