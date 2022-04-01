"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6237],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(v,a(a({ref:r},p),{},{components:t})):n.createElement(v,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9558:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={},c="[Tools and Practice](/Engineering-Playbook/docs/developing/) / Code Reviews",l={unversionedId:"developing/code-reviews/README",id:"developing/code-reviews/README",title:"[Tools and Practice](../README.md) / Code Reviews",description:"Overview",source:"@site/docs/developing/code-reviews/README.md",sourceDirName:"developing/code-reviews",slug:"/developing/code-reviews/",permalink:"/Engineering-Playbook/docs/developing/code-reviews/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/code-reviews/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[CI/CD](README.md) / Intro to CI/CD",permalink:"/Engineering-Playbook/docs/developing/cicd/intro"},next:{title:"Great Code Reviews Bring Happiness to my Heart",permalink:"/Engineering-Playbook/docs/developing/code-reviews/great-code-reviews"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"Resources",id:"resources",level:2}],u={toc:d};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tools-and-practice--code-reviews"},(0,i.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/developing/"},"Tools and Practice")," / Code Reviews"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Effective code reviews provide some of the best opportunities for learning,\ngaining valuable feedback from peers, ensuring that quality standards are upheld\nthroughout a project, and defects are caught as early as possible."),(0,i.kt)("p",null,"We recognize code reviews can be a vulnerable exercise and should be approached\nwith care and deliberate intention.  We've collected some of the best practices\nfor projects to systematize the code review process and lay out expectations for\nthe creator of the pull request as well as the role of the reviewer."),(0,i.kt)("p",null,"Also worth reading is the ",(0,i.kt)("a",{parentName:"p",href:"/Engineering-Playbook/docs/developing/pairing/"},"pairing")," section because some\nof the same lessons overlap with code reviews even if it is happening informally\nor at a different stage."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/code-reviews/great-code-reviews"},"Guide to Great Code Reviews")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/code-reviews/pull-request-best-practices"},"Best Practices for Submitting a Pull Request"))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/rational/library/11-proven-practices-for-peer-review/"},"11 Proven Practices for Peer Review | IBM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://smartbear.com/SmartBear/media/pdfs/Best-Kept-Secrets-of-Peer-Code-Review_Redirected.pdf"},"Best Kept Secrets of Code Review | SmartBear")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://truss.works/blog/2018/1/5/of-tracked-changes-and-diffs-moving-from-editorial-to-engineering"},"Of Tracked Changes and Diffs | Truss Blog"))))}f.isMDXComponent=!0}}]);