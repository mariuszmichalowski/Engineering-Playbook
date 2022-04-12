"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4350],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={},l="Source Control",c={unversionedId:"developing/vcs/README",id:"developing/vcs/README",title:"Source Control",description:"Overview",source:"@site/docs/developing/vcs/README.md",sourceDirName:"developing/vcs",slug:"/developing/vcs/",permalink:"/docs/developing/vcs/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/vcs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Title",permalink:"/docs/developing/technical-design/design-document-template"},next:{title:"Git Repos",permalink:"/docs/developing/vcs/git-repos"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"External Resources",id:"external-resources",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"source-control"},"Source Control"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Source control has less to do with the VCS system you use, and more to\ndo with the stages code goes through on the journey from inside a\ndeveloper's head, tested and merged into the main line, deployed to\nproduction, and thence in time to being identified as that accursed\nlegacy system that is causing all the problems."),(0,i.kt)("p",null,"At Truss, most of our projects will use ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," as\ntheir VCS, and usually with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," as the host for\ntheir repositories, but this is not a hard and fast rule (clients will\noften host their own repositories in their own system)."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/vcs/tools"},"Tools")," - A summary of tools we use for source code management"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/vcs/git-repos"},"Git Repos")," - How to set up and maintain your Git repos"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/vcs/git-workflow"},"Git Workflow")," - How best to work with Git as a developer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/vcs/master-to-main"},"Master-to-Main")," - Rename default branch")),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dangitgit.com"},"Dangit, Git!")," - A plain English guide to solving common Git issues")))}m.isMDXComponent=!0}}]);