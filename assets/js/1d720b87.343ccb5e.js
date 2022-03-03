"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5345],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8939:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},c="[Tools and Practice](/engineering-playbook/docs/developing/) / CI/CD",p={unversionedId:"developing/cicd/README",id:"developing/cicd/README",title:"[Tools and Practice](../README.md) / CI/CD",description:"The release process is one of the most important parts of development",source:"@site/docs/developing/cicd/README.md",sourceDirName:"developing/cicd",slug:"/developing/cicd/",permalink:"/engineering-playbook/docs/developing/cicd/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/cicd/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Tools and Practice](../README.md) / Defects/Bugs",permalink:"/engineering-playbook/docs/developing/bugs/"},next:{title:"[CI/CD](README.md) / CircleCI Orbs",permalink:"/engineering-playbook/docs/developing/cicd/circleci-orbs"}},s={},u=[{value:"Resources",id:"resources",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-and-practice--cicd"},(0,o.kt)("a",{parentName:"h1",href:"/engineering-playbook/docs/developing/"},"Tools and Practice")," / CI/CD"),(0,o.kt)("p",null,"The release process is one of the most important parts of development\nfor obvious reasons: without a release, your code is never going to\nactually be used by anyone. What follows are resources for setting\nup a continuous integration and continuous delivery (CI/CD) pipeline\naccording to Truss best practices to deliver software to customers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/engineering-playbook/docs/developing/cicd/intro"},"Intro to CI/CD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/engineering-playbook/docs/developing/cicd/delivery-pipeline"},"Standard Delivery Pipeline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/engineering-playbook/docs/developing/cicd/circleci-patterns"},"CircleCI Config Patterns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/engineering-playbook/docs/developing/cicd/circleci-orbs"},"CircleCI Orbs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/engineering-playbook/docs/developing/cicd/circleci-utilities"},"CircleCI Utilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/engineering-playbook/docs/developing/cicd/dependabot"},"Dependabot"))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"Wikipedia: Continuous Delivery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"},"Atlassian's Basic Primer on CI/CD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://landing.google.com/sre/sre-book/chapters/release-engineering/"},"Google SRE book: Ch 8 Release Enginering")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://12factor.net/build-release-run"},"12 Factor app: Build/Release/Run")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.singlestoneconsulting.com/blog/7-pipeline-design-patterns-for-continuous-delivery/"},"7 Pipeline Design Patterns for Continuous Delivery from Singlestone"))),(0,o.kt)("p",null,"Some OG references:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/ContinuousDelivery.html"},"Martin Fowler on Continuous Delivery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://timothyfitz.com/2009/02/08/continuous-deployment/"},"Timothy Fitz on Continuous Deployment"))))}m.isMDXComponent=!0}}]);