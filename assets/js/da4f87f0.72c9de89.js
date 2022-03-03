"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[216],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5269:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={},l="[InfraSec](/engineering-playbook/docs/infrasec/) / Good Infrastructure - A Philosophy",u={unversionedId:"infrasec/good-infra",id:"infrasec/good-infra",title:"[InfraSec](README.md) / Good Infrastructure - A Philosophy",description:"While the tools, techniques, and patterns we use to build our solutions are important, they often don't help us design and architect new things. What follows are some opinions about how to think about the work we do at a high level.",source:"@site/docs/infrasec/good-infra.md",sourceDirName:"infrasec",slug:"/infrasec/good-infra",permalink:"/engineering-playbook/docs/infrasec/good-infra",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/good-infra.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](README.md) / InfraSec Practice Charter",permalink:"/engineering-playbook/docs/infrasec/charter"},next:{title:"[InfraSec](README.md) / Professional Development",permalink:"/engineering-playbook/docs/infrasec/pro-dev"}},c={},d=[{value:"Human factors",id:"human-factors",level:2},{value:"Empathy",id:"empathy",level:3},{value:"Operator first",id:"operator-first",level:3},{value:"Minimalism",id:"minimalism",level:2},{value:"Avoid state",id:"avoid-state",level:3},{value:"Embrace immutability",id:"embrace-immutability",level:3},{value:"Use managed services",id:"use-managed-services",level:3},{value:"Codify entire stacks",id:"codify-entire-stacks",level:3},{value:"Delivery",id:"delivery",level:2},{value:"Infrastructure as code",id:"infrastructure-as-code",level:3},{value:"Automation",id:"automation",level:3},{value:"Delivery pipeline",id:"delivery-pipeline",level:3},{value:"Build",id:"build",level:4},{value:"Accept",id:"accept",level:4},{value:"Release",id:"release",level:4},{value:"Immutability",id:"immutability",level:2},{value:"The Twelve-Factor App",id:"the-twelve-factor-app",level:2}],h={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"infrasec--good-infrastructure---a-philosophy"},(0,r.kt)("a",{parentName:"h1",href:"/engineering-playbook/docs/infrasec/"},"InfraSec")," / Good Infrastructure - A Philosophy"),(0,r.kt)("p",null,"While the tools, techniques, and patterns we use to build our solutions are important, they often don't help us design and architect new things. What follows are some opinions about how to think about the work we do at a high level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#human-factors"},"Human factors"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#empathy"},"Empathy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#operator-first"},"Operator first")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minimalism"},"Minimalism"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#avoid-state"},"Avoid state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#embrace-immutability"},"Embrace immutability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-managed-services"},"Use managed services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#codify-entire-stacks"},"Codify entire stacks")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delivery"},"Delivery"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#infrastructure-as-code"},"Infrastructure as code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automation"},"Automation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delivery-pipeline"},"Delivery pipeline"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#build"},"Build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#accept"},"Accept")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#release"},"Release")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#immutability"},"Immutability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#the-twelve-factor-app"},"The Twelve-Factor App"))),(0,r.kt)("h2",{id:"human-factors"},"Human factors"),(0,r.kt)("h3",{id:"empathy"},"Empathy"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Without establishing shared expectations and coherent communication frameworks, your tools will be instruments of chaos."),(0,r.kt)("p",{parentName:"blockquote"},"-- ",(0,r.kt)("a",{parentName:"p",href:"https://guide.truss.works/distributed#tools-last"},"Truss Distributed Playbook: Tools Last"))),(0,r.kt)("p",null,"InfraSec work is first and foremost a human endeavour. Every aspect of what we do is for other people. We build software for other developers. We deliver reliable infrastructure to meet the needs of the users. We automate systems and write documentation to ease the burden on our future selves and those who come after."),(0,r.kt)("p",null,"Empathy drives our research into the tooling we build for others. It helps us make good decisions about the operating controls we create for our software. The better our environments are to work in, the less stress we'll have and the easier it will feel to do our job. It creates trust in the system of people and tooling we are surrounded by."),(0,r.kt)("p",null,"We believe diverse voices result in better solutions. As such, we strive to have diverse voices."),(0,r.kt)("p",null,"We believe folks decisions are driven by the systems they are in. As such, we strive to improve the systems we work within."),(0,r.kt)("h3",{id:"operator-first"},"Operator first"),(0,r.kt)("p",null,"Our industry continues to use the phrase \"ship it\", as if we're sending off a physical disk to a store or customer. This has not been the case for a while now. For the most part, we're building and running services. The people we are shipping the software to are ourselves. There are customer endpoints (e.g., the website, the API), but the customer isn't running those, we are."),(0,r.kt)("p",null,"When building a service, we must avoid thinking exclusively about the happy path customer experience and instead give time and attention to the operating controls and gauges we need to run the service. It's like we're tasked to build a commercial aircraft and our \"user\" stories focus on seating,  entertainment, and snack options. Things our customers will need or like so they can have a good in-flight experience. These are important, but rather moot if the aircraft cannot make it to the destination."),(0,r.kt)("p",null,"Operator first thinking means we consistently consider the experience of the operator of the service as part of the design and architecture. It treats the system operator as a first class user. We should expect user stories about observability, resilience, automation, and tooling. We will build systems which fail less often, less catastrophically, and when they do, are more readily diagnosed and repaired. The outcome is a more humane organization spending less time in high-stress, service degradation scenarios and more time on high-value, creative work."),(0,r.kt)("h2",{id:"minimalism"},"Minimalism"),(0,r.kt)("p",null,"Minimalist infrastructure is the practice of building only what you need with the fewest number of resources. This is a philosophy, not a religion: don't build bad infrastructure to achieve a minimalist design. A minimalist design should lead to good infrastructure by reducing the complexity of the design and the number of resources being managed. A simpler system with less resources has a smaller attack surface and is easier for people to learn and debug."),(0,r.kt)("h3",{id:"avoid-state"},"Avoid state"),(0,r.kt)("p",null,"When designing your system, avoid storing additional state. Often the data you want to store is already available in the system. Using the system as the source of truth can avoid the difficult business of ensuring data consistency."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Practical Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Let's say you want to be able to rollback a Fargate deploy if the new task definition results in a service that won't become healthy. One option would be store the working task definition in something like DynamoDB (or git or any number of bad choices). However, your ECS service already has this information: the previous, healthy service is still running. Instead of managing a DynamoDB resource as well as writing code for maintaining that state record, query the ECS service itself to get what you want. This avoids managing the DynamoDB resource as well as the unfortunate scenario where the data stored is wrong.")))),(0,r.kt)("h3",{id:"embrace-immutability"},"Embrace immutability"),(0,r.kt)("p",null,"Related to avoiding state, making resources immutable reduces the scope of what can change. The less that can change, the easier a system is to understand and debug and the more likely that each instance will behave as expected. Reduce systems and architectures  to testable units."),(0,r.kt)("p",null,"As an illustration, consider the complexity difference between a read-only, distroless, container image with a single application binary and a long-lived VM that's updated with the latest application code and it's dependency tree. How confident are you in each system? How confident are you that prod and dev are similar? What does a delivery pipeline look like for each?"),(0,r.kt)("h3",{id:"use-managed-services"},"Use managed services"),(0,r.kt)("p",null,"Manage only what you must. There are lot of services out there that solve infrastructure problems for us. For example, AWS Fargate makes it so you don't have to manage EC2 instances running your containers. This is good. Make managing infrastructure someone else's problem (you've got plenty). Build and maintain the least amount possible."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parameter Store instead of Hashicorp Vault"),(0,r.kt)("li",{parentName:"ul"},"Fargate instead of EC2"),(0,r.kt)("li",{parentName:"ul"},"SaaS instead of on-premise")),(0,r.kt)("h3",{id:"codify-entire-stacks"},"Codify entire stacks"),(0,r.kt)("p",null,"Codify entire stacks into a single callable unit (calling into other units). Keep the number of parameterizations (inputs) small so the infrastructure doesn't vary wildly and the unit's actions remain clear. This makes it easy to spin up the same infrastructure in multiple environments and reduces the proliferation of code unique to each environment."),(0,r.kt)("p",null,"Care should be given to not hardcode environmental assumptions into this wrapper. Follow the same notions for building a ",(0,r.kt)("a",{parentName:"p",href:"#the-twelve-factor-app"},"Twelve-Factor App"),". The callable stack is our version of a deployable artifact."),(0,r.kt)("h2",{id:"delivery"},"Delivery"),(0,r.kt)("h3",{id:"infrastructure-as-code"},"Infrastructure as code"),(0,r.kt)("p",null,'We strive to codify all our work in a manner that is repeatable, versioned, and tested. To that end, we write as much of our infrastructure as declarative code (e.g., Terraform), automated scripts, and reusable tools. Necessary, ad-hoc steps (e.g., secret generation) are stored in "manual operations" logs.'),(0,r.kt)("p",null,'We prefer declarative frameworks (e.g., Terraform) over imperative ones. While it can be frustrating to work in a system that lacks robust flow control, we believe the complexity costs associated with a "real" programming language outweigh the benefits for adoption: the ability to be "clever" too easily leads to infrastructure code that\'s difficult learn and adapt (i.e., rearchitect) over time.'),(0,r.kt)("p",null,"One of the goals for codifying infrastructure as code is having the ability to spin up new environments quickly. This process should be gated by the time it takes the cloud provider to make the resources available. If manual operations are the bottleneck, we're likely missing code."),(0,r.kt)("h3",{id:"automation"},"Automation"),(0,r.kt)("p",null,"One of the primary goals of creating infrastructure as code is enabling automation. When we automate our infrastructure we are able to repeat our structures in consistent ways. We can create reusable, testable, units of functionality. We can ",(0,r.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/workbook/chapters/eliminating-toil/"},"\u238beliminate toil")," and focus our energies on creative problem solving."),(0,r.kt)("p",null,"Like other mechanisms, the automation must be run regularly to ensure it's functional. This can usually be achieved via CI/CD. For automation that's expensive (in time, in money, etc.) and infrequently used, you could setup an automated, scheduled test, to ensure functionality."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Practical Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"We should be able to spin up additional environments without much fanfare. Since these environments can require resources which take a long time to become available (e.g., an RDS) it may not be feasible to include creating a new environment as part of the CI/CD pipeline. An alternative would be to setup a daily (or weekly) job that spins up a new environment. This attempts to strike the balance between fast (enough) feedback about that process with keeping the pipeline (and getting other feedback) fast.","[","^1","]")))),(0,r.kt)("h3",{id:"delivery-pipeline"},"Delivery pipeline"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/engineering-playbook/docs/developing/cicd/intro"},"\ud83d\udc40 See the Intro to CI/CD")," for a deeper dive into this topic.")),(0,r.kt)("p",null,"An effective delivery pipeline is important for creating a successful \u2014 organization-wide \u2014 delivery culture. This mechanism brings code from development into production, ties together the (technical and non-technical) teams, and enables the company to iterate quickly."),(0,r.kt)("p",null,"To achieve ",(0,r.kt)("em",{parentName:"p"},"continuous delivery")," means you are always comfortable releasing the artifacts that have made it through the pipeline. To achieve ",(0,r.kt)("em",{parentName:"p"},"continuous deployment")," means you have the utmost confidence in your automated processes."),(0,r.kt)("p",null,"At its barest, a delivery pipeline has three stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build"),(0,r.kt)("li",{parentName:"ol"},"Accept"),(0,r.kt)("li",{parentName:"ol"},"Release")),(0,r.kt)("h4",{id:"build"},"Build"),(0,r.kt)("p",null,"A code commit should result in the creation of a deployable artifact whose code has been tested via a suite of (mostly) unit tests. Examples of artifacts: container image, binary, language package (e.g., Python wheel, Ruby gem, Rust crate), tarball, etc."),(0,r.kt)("p",null,"As this is the first stage in the pipeline, the quicker and more comprehensive the build and test processes are, the faster we can iterate. Catching problems here means not losing time to acceptance testing of a broken product and reduces the risk of an issue landing in production."),(0,r.kt)("h4",{id:"accept"},"Accept"),(0,r.kt)("p",null,"The artifact produced by the build stage should be deployed and have acceptance tests run against it. The environment and procedures should be the same as production and the entire process should managed by the CI/CD system."),(0,r.kt)("p",null,"As much as possible, reduce your dependence on manual acceptance testing. Automated tests can be run at anytime. Manual testing introduces a significant delay to your feedback loop, reducing the speed of development:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"More context switching \u2014 While changes wait for validation, folks switch tasks. These switches are expensive as context has to be rebuilt, causing each task to take longer, and impacting team velocity."),(0,r.kt)("li",{parentName:"ul"},"More complex debugging \u2014 Changes are batched until the next manual test session. Instead of being able to pinpoint a bug to a small set of changes, there are now many changes and their interactions to consider. This increases the time it takes to debug a problem and creates an opportunity for incompatible changes to land together.")),(0,r.kt)("h4",{id:"release"},"Release"),(0,r.kt)("p",null,"In this final stage of the delivery pipeline, the fully tested and accepted artifact is released to the world using the same processes validated earlier in the pipeline."),(0,r.kt)("p",null,"Production releases should be a non-event with little ceremony. There is an inverse relationship between the frequency and risk of release. Compare the amount of change being introduced in each release if it's done every hour versus every week."),(0,r.kt)("p",null,"In more sophisticated systems, where possible (e.g., web services), the code deploy and the feature release should be separated via feature flags."),(0,r.kt)("h2",{id:"immutability"},"Immutability"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The entropy of the universe tends to a maximum."),(0,r.kt)("p",{parentName:"blockquote"},"-- Rudolf Clausius, 1865")),(0,r.kt)("p",null,"Our systems tend to disorder over time. Worse, they do this in non-uniform ways. There are various mechanisms for helping long-lived systems stay in their expected states (e.g., orchestration), but it is somewhat of a fools errand since there's always parts you aren't tracking and stateful bits which are necessarily different. Include the will of an adversary to purposely change the system in a non-detectable way and you may begin questioning your career choices (or worse, stop caring)."),(0,r.kt)("p",null,"As these systems drift, random errors occur which are difficult to reproduce. They were the result of complex set of factors which arose over time.","[","^2","]"," More insidious, your environments (prod, ci, dev) will behave different from one another due to having different uptimes, deployment dates, patch schedules, etc. This leads to losing faith in your automated tests, slows down the delivery pipeline, and impacts work velocity."),(0,r.kt)("p",null,"Taking an immutable approach to your infrastructure helps limit the scope of changes that build up."),(0,r.kt)("p",null,"When we say a resource is immutable, we mean instead of updating it in place, we provision an entirely new version. For example, if we need to update the software on the system, instead of pulling new files to the running system we create a new disk image containing the changes we want our system to have and launch new ones."),(0,r.kt)("p",null,"Immutability is not a binary notion. Some amount of state (e.g., memory) must be changing in the system in order for it to run. We strive to find a balance around a usable system and the least amount of state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Practical Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"We consider short-lived containers to be table stakes. These boot from a known state (the container image), run a single process (or few), and are replaced often. A way to increase the immutability would be to use a read-only disk. This removes an entire class of system modification and brings awareness to the kind of data landing on disk.")))),(0,r.kt)("p",null,"An effect of adopting an immutable architecture is being guided toward more minimal systems. Using the example above, since we boot frequently, we want fast boot times. Since we want fast boot times, we want small disk images that can transfer quickly over the network. The way to make the disk smaller is to remove as much as possible and we end up with distroless images which contain almost nothing besides a static binary. The more minimal, the less opportunity for drift."),(0,r.kt)("h2",{id:"the-twelve-factor-app"},"The Twelve-Factor App"),(0,r.kt)("p",null,"Build infrastructure in the spirit of and to support ",(0,r.kt)("a",{parentName:"p",href:"https://12factor.net/"},"\u238bthe Twelve-Factor methodology"),". We should be architecting our delivery and deployment pipelines with this view and pushing back against changes which undermine this methodology."),(0,r.kt)("p",null,"[","^1","]",": There's no single strategy. Managing slow tests is complicated topic. You need to weigh the risks of getting slow feedback for each component to arrive at a place that feels comfortable."),(0,r.kt)("p",null,"[","^2","]",': This hints at the limitations of doing "root cause analysis".'))}p.isMDXComponent=!0}}]);