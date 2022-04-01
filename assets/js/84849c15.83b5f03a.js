"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[61],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4440:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return g},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={},s="[Engineering Playbook](/Engineering-Playbook/docs/) / Tools and Practice",c={unversionedId:"developing/README",id:"developing/README",title:"[Engineering Playbook](../README.md) / Tools and Practice",description:"Overview",source:"@site/docs/developing/README.md",sourceDirName:"developing",slug:"/developing/",permalink:"/Engineering-Playbook/docs/developing/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Risk Management Framework - Step 2: Select",permalink:"/Engineering-Playbook/docs/compliance/risk-management/select"},next:{title:"[Tools and Practice](../README.md) / Defects/Bugs",permalink:"/Engineering-Playbook/docs/developing/bugs/"}},p={},g=[{value:"Overview",id:"overview",level:2},{value:"Note on Default Branches",id:"note-on-default-branches",level:2},{value:"Contents",id:"contents",level:2}],u={toc:g};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"engineering-playbook--tools-and-practice"},(0,a.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/"},"Engineering Playbook")," / Tools and Practice"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section addresses the tools and practices which are part of the everyday habits of being a Software Engineer at Truss. If you'd like to get a sense for how Trussels solve problems, take a look at the \ud83d\udd12",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trussworks/interview-solutions"},"interview solutions repo"),". If you haven't already, post your solution!"),(0,a.kt)("p",null,"Truss aims to find a balance between giving the autonomy and tools to make the best choices in any given situation, but to also avoid revisiting the same questions again and again. The latter is especially true when the question is not material or core to how we do business. In some cases, we have strong opinions about which questions are not valuable as a cause for debate, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://truss.works/blog/2017/11/3/tabs-vs-spaces-a-tale-of-asking-the-wrong-questions"},"Tabs vs Spaces"),"."),(0,a.kt)("p",null,'Generally, our approach should be "if there is a suggestion or answer in these pages, follow it until you have a ',(0,a.kt)("em",{parentName:"p"},"compelling"),' reason not to". Once you have a compelling reason to change the practice document it by adding to or updating these pages.'),(0,a.kt)("h2",{id:"note-on-default-branches"},"Note on Default Branches"),(0,a.kt)("p",null,"Where possible the documents here should refer to the Default Branch instead of using the word ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". Where this\nis not possible try to use the default branch name ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),". In links to repos in github please also attempt to get\nthe reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," and not to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/command-line-tools/"},"Command Line Tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/eid/"},"Editors, IDEs and Debuggers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/docker/"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/direnv/"},"direnv")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/languages/"},"Programming Languages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/cycle/"},"Development Cycle")," aka Sprint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/vcs/"},"Source Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/cicd/"},"CI/CD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/bugs/"},"Defects/Bugs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/technical-design/"},"Technical Design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/code-reviews/"},"Code Reviews")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/slack/"},"Slack Best Practices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/growth/"},"Growth on Client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/learning/"},"Learning Resources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/command-line-tools/HOW2GORELEASER"},"Building and Releasing Go CLI tools with goreleaser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/healthcheck/"},"Healthchecks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/pairing/"},"Pair Programming")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/developing/open-source/"},"Open Source"))))}d.isMDXComponent=!0}}]);