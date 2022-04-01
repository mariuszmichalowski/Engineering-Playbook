"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5406],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8462:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="[InfraSec](/docs/infrasec/) / AWS",c={unversionedId:"infrasec/aws/README",id:"infrasec/aws/README",title:"[InfraSec](../README.md) / AWS",description:"AWS is the most popular cloud provider, accounting for about \u2153 of all cloud spend. Almost all our infrastructure client discoveries find they are already using or want to use AWS.",source:"@site/docs/infrasec/aws/README.md",sourceDirName:"infrasec/aws",slug:"/infrasec/aws/",permalink:"/docs/infrasec/aws/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Ansible](README.md) / Molecule Primer",permalink:"/docs/infrasec/ansible/molecule-primer"},next:{title:"[AWS](README.md) / AWS Organizations",permalink:"/docs/infrasec/aws/aws-organizations"}},u={},p=[{value:"Organizations &amp; accounts",id:"organizations--accounts",level:2},{value:"Other topics",id:"other-topics",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"infrasec--aws"},(0,o.kt)("a",{parentName:"h1",href:"/docs/infrasec/"},"InfraSec")," / AWS"),(0,o.kt)("p",null,"AWS is the most popular cloud provider, accounting for about \u2153 of all cloud spend. Almost all our infrastructure client discoveries find they are already using or want to use AWS."),(0,o.kt)("p",null,"There is a dizzying array of services AWS provides. Many with unhelpful or even misleading names. Here's a short list of essential services we use when deploying container backed web services (a common pattern):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IAM"),(0,o.kt)("li",{parentName:"ul"},"S3"),(0,o.kt)("li",{parentName:"ul"},"ALB"),(0,o.kt)("li",{parentName:"ul"},"ECS"),(0,o.kt)("li",{parentName:"ul"},"Route53"),(0,o.kt)("li",{parentName:"ul"},"ACM"),(0,o.kt)("li",{parentName:"ul"},"Lambda"),(0,o.kt)("li",{parentName:"ul"},"Parameter Store")),(0,o.kt)("p",null,"We encapsulate a lot of the complexity of configuring services (with good defaults) via our Terraform modules."),(0,o.kt)("p",null,"There's also ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/forrestbrazeal/status/1301182968766107656"},"this 2 minute video which sings through the names of 168 services"),". Watch at your own peril. \ud83d\ude31"),(0,o.kt)("h2",{id:"organizations--accounts"},"Organizations & accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/infrasec/aws/aws-organizations"},"AWS Organizations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/infrasec/aws/org-bootstrap"},"Bootstrapping an AWS Organization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/infrasec/aws/guardduty"},"GuardDuty in Organizations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/infrasec/aws/govcloud/"},"Working in GovCloud"))),(0,o.kt)("h2",{id:"other-topics"},"Other topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/infrasec/aws/naming"},"Resource Naming"))))}m.isMDXComponent=!0}}]);