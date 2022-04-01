"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3030],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3446:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={},c="[OpenSource](/Engineering-Playbook/docs/developing/open-source/) / Open Source Statement of Intent",l={unversionedId:"developing/open-source/intent",id:"developing/open-source/intent",title:"[OpenSource](./README.md) / Open Source Statement of Intent",description:"At Truss, we prefer to open source our code whenever possible; there are a variety of reasons for this:",source:"@site/docs/developing/open-source/intent.md",sourceDirName:"developing/open-source",slug:"/developing/open-source/intent",permalink:"/Engineering-Playbook/docs/developing/open-source/intent",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/open-source/intent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Developing](../README.md) / Open Source",permalink:"/Engineering-Playbook/docs/developing/open-source/"},next:{title:"[Tools and Practice](../README.md) / Pair Programming",permalink:"/Engineering-Playbook/docs/developing/pairing/"}},p={},u=[],d={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"opensource--open-source-statement-of-intent"},(0,i.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/developing/open-source/"},"OpenSource")," / Open Source Statement of Intent"),(0,i.kt)("p",null,"At Truss, we prefer to open source our code whenever possible; there are a variety of reasons for this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transparency is one of our most important values; by open sourcing our work, we show our clients and potential clients that we are willing to expose our work to scrutiny. This also allows us to get feedback from the larger community around open source, which can make our products better."),(0,i.kt)("li",{parentName:"ul"},"In addition, by open sourcing our projects, we make it easy to share code between clients and with the general public. As we benefit from open source projects for much of our work, contributing back to that pool returns the favor, so to speak. In addition, both we and the clients benefit from us not needing to reinvent the wheel on every project, and also means that clients can rely on maintained code even if we leave the project."),(0,i.kt)("li",{parentName:"ul"},"Not only does it make sharing code between clients and the general public easier, it also eases project onboarding for new Trussels -- the process of getting access to repositories can sometimes take weeks or months, and if the code is open-sourced, a new team member can immediately begin reviewing code and working locally."),(0,i.kt)("li",{parentName:"ul"},"Open sourcing our code is also good for Truss in terms of publicity and recruiting; people who have used our code will be more aware of us and what we do, and have a better idea of the quality of work that we provide. For potential clients, they can see the level of work they will receive, and for potential employees, they can see the type of work they will be doing.")),(0,i.kt)("p",null,"This extends even beyond the code for our software; we make our Engineering Playbook and the Trussels\u2019 Guide public for the same reasons."),(0,i.kt)("p",null,"Truss prefers to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License v2.0")," for software projects, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"GNU Affero GPL")," for bids or tech challenges (but MUST NOT use this for client work), and the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"Creative Commons Attribution 4.0 International License")," for non-software projects. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/12UYIN3XfRPdKQV87_0ILa9-z6eWRBcLqtwP9fCyR6Tg/edit"},"This TDR")," (Truss internal link) discusses how we came to these conclusions and any exceptions."))}f.isMDXComponent=!0}}]);