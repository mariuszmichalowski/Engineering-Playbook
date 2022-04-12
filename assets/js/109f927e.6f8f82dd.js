"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[9108],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9647:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],a={},s="Title",u={unversionedId:"developing/technical-design/design-document-template",id:"developing/technical-design/design-document-template",title:"Title",description:"- Contributors:",source:"@site/docs/developing/technical-design/design-document-template.md",sourceDirName:"developing/technical-design",slug:"/developing/technical-design/design-document-template",permalink:"/docs/developing/technical-design/design-document-template",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/technical-design/design-document-template.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical Design",permalink:"/docs/developing/technical-design/"},next:{title:"Source Control",permalink:"/docs/developing/vcs/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Background",id:"background",level:2},{value:"Proposed Solution",id:"proposed-solution",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Trade-offs",id:"trade-offs",level:2},{value:"Cross Team Dependencies",id:"cross-team-dependencies",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"title"},"Title"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contributors:"),(0,r.kt)("li",{parentName:"ul"},"Proposal Date:"),(0,r.kt)("li",{parentName:"ul"},"Feedback Accepted Until:")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In one or two sentences,\nsummarize what the problem is and how you intend on solving it.\nIt's helpful to outline the stakeholders here,\nas it informs why this problem merits solving."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"This section is for going into more detail about the problem."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who are the stakeholders and how have they been impacted?"),(0,r.kt)("li",{parentName:"ul"},"Historically, what effect has the problem it had?"),(0,r.kt)("li",{parentName:"ul"},"Is there data to illustrate the impact?"),(0,r.kt)("li",{parentName:"ul"},"Is there an existing solution?\nIf so, why does it need to be improved on?"),(0,r.kt)("li",{parentName:"ul"},"Are there past projects or designs to link for context?")),(0,r.kt)("p",null,"At least one example should be used to help the audience understand the context better."),(0,r.kt)("h2",{id:"proposed-solution"},"Proposed Solution"),(0,r.kt)("p",null,"Detail your solution here.\nStart with a broad overview and then go into detail on each portion of the design."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What changes will the stakeholder/client see?\nThis should clearly illustrate how the stakeholders' needs are being met"),(0,r.kt)("li",{parentName:"ul"},"How exactly does it solve the problem outlined above?\nExplain how this solution applies to the use cases identified."),(0,r.kt)("li",{parentName:"ul"},"Why are you picking this solution?"),(0,r.kt)("li",{parentName:"ul"},"What are the limits of the proposed solution?\nAt what point will the design cease to be a viable solution?"),(0,r.kt)("li",{parentName:"ul"},"How will you measure the success of your solution?"),(0,r.kt)("li",{parentName:"ul"},"If priorities shift or the solution becomes too cumbersome to implement, how will you roll back?")),(0,r.kt)("p",null,"Visual representations of the solution can be helpful here (ex. a diagram for a request lifecycle)."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Without going too much into individual tasks,\nwrite an overview of what this solution's implementation would look like."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can this be broken down into multiple technical efforts?"),(0,r.kt)("li",{parentName:"ul"},"What is the tech stack involved?"),(0,r.kt)("li",{parentName:"ul"},"Will additional infrastructure be needed to achieve this?"),(0,r.kt)("li",{parentName:"ul"},"How will you test this?")),(0,r.kt)("h2",{id:"trade-offs"},"Trade-offs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This section should go over other possible solutions,\nand why you chose yours over them."),(0,r.kt)("li",{parentName:"ul"},"Was there a build vs. buy solution?"),(0,r.kt)("li",{parentName:"ul"},"What industry standards/practices already exist?"),(0,r.kt)("li",{parentName:"ul"},"Why is your solution better?")),(0,r.kt)("h2",{id:"cross-team-dependencies"},"Cross Team Dependencies"),(0,r.kt)("p",null,"If there are multiple teams or clients that are dependencies for implementation to be successful,\nlist them here.\nExamples of this are security or design collaboration/reviews."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,"List any resources you found helpful to make this design."))}h.isMDXComponent=!0}}]);