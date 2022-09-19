"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[9671],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},s="\ud83d\udc4b Welcome",u={unversionedId:"intro",id:"intro",title:"\ud83d\udc4b Welcome",description:"Goal",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Course Introduction",permalink:"/docs/solidity-101/course-introduction/introduction-course"}},c={},p=[{value:"Goal",id:"goal",level:2},{value:"Community",id:"community",level:2},{value:"Side Quest: Math",id:"side-quest-math",level:2},{value:"Contact",id:"contact",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-welcome"},"\ud83d\udc4b Welcome"),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Our primary focus will be on creating practical content for Web3 developers.")),(0,i.kt)("p",null,"We will start with Solidity and:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"give an in-depth look into the Solidity primitives."),(0,i.kt)("li",{parentName:"ul"},"progress to show patterns often used in the web3 industry."),(0,i.kt)("li",{parentName:"ul"},"jump into deep dives around Solidity-based applications."),(0,i.kt)("li",{parentName:"ul"},"give the reader the proper context on when and where to use certain tools for smart contract development."),(0,i.kt)("li",{parentName:"ul"},"Finally, relate to real-world projects which use these tools.")),(0,i.kt)("p",null,"As time progresses, we will increase the scope of our studies to other tools in web3"),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Learning a new skill set is fun, but requires constant practice and engagement. Learning with others in a community can turbocharge your progress."),(0,i.kt)("p",null,"To find a community:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"join our ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/PqVhBKxSKb"},"Discord")),(0,i.kt)("li",{parentName:"ul"},"join a meetup to meet others like ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/ethbuilders/"},"EthBuilders"),"."),(0,i.kt)("li",{parentName:"ul"},"or find a meetup in your region via the ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/buidl/"},"BUIDL Network"),".")),(0,i.kt)("h2",{id:"side-quest-math"},"Side Quest: Math"),(0,i.kt)("p",null,"Occasionally there will be some entries in the math section around Set Theory. The aim will be to build up the necessary knowledge to engage with Game Theory and later Mechanism Design. The goal is for these two tracks to converge, having robust proofs that can be ported over to Solidity code."),(0,i.kt)("p",null,"When this happens is not known. But there are no royal roads to math. We will just have to take it a day at a time."),(0,i.kt)("h2",{id:"contact"},"Contact"),(0,i.kt)("p",null,"Have any suggestions, questions, comments, or requests for content?",(0,i.kt)("br",{parentName:"p"}),"\n","Feel free to open a Github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tesla809/BuildersETH/issues"},"issue"),"."),(0,i.kt)("p",null,"Want to submit to the blog, lesson, lesson fix, or image/logo?",(0,i.kt)("br",{parentName:"p"}),"\n","Submit a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tesla809/BuildersETH/pulls"},"github pull request"),"."),(0,i.kt)("p",null,"Want to contact the website admin directly?",(0,i.kt)("br",{parentName:"p"}),"\n","Message: ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@web3cryptodev.com"},"contact@web3cryptodev.com")),(0,i.kt)("p",null,"Any and all feedback is appreciated <3!"),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"Assume this code is not production-grade and will fail. The author is not responsible for any fallout from the code posted here. This site and its content are merely for educational purposes only."),(0,i.kt)("p",null,"If you enjoy this site:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"please bookmark"),(0,i.kt)("li",{parentName:"ul"},"share it with a friend"),(0,i.kt)("li",{parentName:"ul"},"post about it on Twitter or ",(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/ethdev"},"reddit.com/r/ethdev"))))}m.isMDXComponent=!0}}]);