"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[2564],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8386:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return h},default:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="[Tools and Practice](/docs/developing/) / Healthchecks",c={unversionedId:"developing/healthcheck/README",id:"developing/healthcheck/README",title:"[Tools and Practice](../README.md) / Healthchecks",description:"Overview",source:"@site/docs/developing/healthcheck/README.md",sourceDirName:"developing/healthcheck",slug:"/developing/healthcheck/",permalink:"/docs/developing/healthcheck/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/healthcheck/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Tools and Practice](../README.md) / Growth",permalink:"/docs/developing/growth/"},next:{title:"[Tools and Practice](../README.md) / Programming Languages",permalink:"/docs/developing/languages/"}},p={},h=[{value:"Overview",id:"overview",level:2},{value:"Security",id:"security",level:2},{value:"Reliability",id:"reliability",level:2},{value:"Healthchecks in Deployment Pipelines",id:"healthchecks-in-deployment-pipelines",level:2},{value:"Contents",id:"contents",level:2}],u={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-and-practice--healthchecks"},(0,o.kt)("a",{parentName:"h1",href:"/docs/developing/"},"Tools and Practice")," / Healthchecks"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In modern API services, it is not uncommon to build and rely upon Healthcheck endpoint(s). These endpoints are generally orthogonal to the operating business logic of the service, and are intended to be consumed by the Operators of the system (e.g. InfraSec practitioners)."),(0,o.kt)("p",null,"There are many ways that Healthcheck endpoints can be used in a system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Readiness - Upon startup, has my app warmed up any internal caches that are needed before it can respond to traffic?"),(0,o.kt)("li",{parentName:"ul"},"Liveness - Is this app accepting and responding to traffic at all?"),(0,o.kt)("li",{parentName:"ul"},"Versioning - Is the verison of code that is deployed what it is expected to be?"),(0,o.kt)("li",{parentName:"ul"},"Reachability - Can a client reach the service over the network?"),(0,o.kt)("li",{parentName:"ul"},"Catalog - What are the external dependencies to which this app connects?"),(0,o.kt)("li",{parentName:"ul"},"Connectivity - Can the app connect to its external dependencies successfully?"),(0,o.kt)("li",{parentName:"ul"},"Quality - Does this endpoint do all its work and respond in a timely manner?")),(0,o.kt)("p",null,"Many apps will try to achieve their subset of the above goals via a single endpoint, but as apps grow in sophistication it is not unheard of to tease those responsibilities out to separate endpoints."),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"Frequently healthcheck endpoints are agnostic about authentication and authorization, meaning anyone that can reach the service via the network can access these endpoints."),(0,o.kt)("p",null,"Having heathcheck endpoints be un-authenticated implies several other considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any information available in the healthcheck should not be confidential, nor should the information be able to be (ab)used to jeopardize the smooth running of the service."),(0,o.kt)("li",{parentName:"ul"},"Unsecured healthchecks could open up the system or its checked dependencies to Denial of Service attacks. This may be mitigated by adding some level of caching in the healthchecks."),(0,o.kt)("li",{parentName:"ul"},"One possible technique for lowering risk is to isolate operational endpoints to a separate port with tighter network ACLs.")),(0,o.kt)("h2",{id:"reliability"},"Reliability"),(0,o.kt)("p",null,"Particular care should be taken when using healthchecks as part of the reliability story of an app."),(0,o.kt)("p",null,'Prof von Neuman is credited with the concept of "synthesis of reliable organisms from unreliable components". He showed that the math works out as such: if my app is serially dependent on 3 other services that are each at 97% reliable, my app can be no more than ~91% (0.97 x 0.97 x 0.97) reliable. This means that if an app\'s healthcheck is setup to fail when any of its dependencies have failed, this has significantly limited the upper bound of the apps reliability.'),(0,o.kt)("p",null,"Sometimes an app's reliability really is limited by a dependency, e.g. a database connection. If every single endpoint and functionality in an app requires interaction with the app's database, then it is reasonable to call your app fully inoperable when the database connection is not functioning."),(0,o.kt)("p",null,"However, if only a subset of the app's functionality is impacted by an unreliabile dependency, it may be better to handle that instability at runtime, rather than declaring the whole app down. Consider the following example: if only one (out of many) of an app's functionalities depend on sending email, the app should maybe not be considered wholly down if the email service is unreachable; it would be better to handle errors from interacting with the email service gracefully, or possibly even using a technique like feature flagging to turn off any attempts to use that functionality until the service is back in service."),(0,o.kt)("h2",{id:"healthchecks-in-deployment-pipelines"},"Healthchecks in Deployment Pipelines"),(0,o.kt)("p",null,"It is not uncommon to see teams utilize an app's healthcheck endpoint on the critical path of a deployment pipeline, however this should be evaluated for unintended consequences."),(0,o.kt)("p",null,"In modern software engineering, automated deployments are a critical feature of a software system, facilitating the ability to safely and incrementally improve the quality of a running app."),(0,o.kt)("p",null,"Again, consider the app example from above that uses an email sending service for one feature: should the external service instability be able to jeopardize the ability to roll out new code? Perhaps the new code for deployment is useful for diagnosing the issue or is intended to temporarily turn off the offending sending of emails: blocking roll out makes remediation of the issue harder rather than safer."),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://web.mit.edu/6.454/www/papers/pierce_1952.pdf"},"von Neuman paper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Reliability_engineering"},"Reliability Engineering"))))}d.isMDXComponent=!0}}]);