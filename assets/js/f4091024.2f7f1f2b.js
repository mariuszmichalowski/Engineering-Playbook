"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6656],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(h,s(s({ref:t},m),{},{components:n})):o.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],a={},l="Steps of the ATO Process",c={unversionedId:"compliance/atos/steps",id:"compliance/atos/steps",title:"Steps of the ATO Process",description:"\"The ATO process\", as it's commonly called, is formally defined in the National Institute of Standards & Technology (NIST)'s Risk Management Framework (RMF):",source:"@site/docs/compliance/atos/steps.md",sourceDirName:"compliance/atos",slug:"/compliance/atos/steps",permalink:"/docs/compliance/atos/steps",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/compliance/atos/steps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[ATOs](README.md) / Overview",permalink:"/docs/compliance/atos/overview"},next:{title:"ATO Document Templates",permalink:"/docs/compliance/atos/templates"}},m={},p=[{value:"Step 1: Categorize Information System",id:"step-1-categorize-information-system",level:2},{value:"Step 2: Select Security Controls",id:"step-2-select-security-controls",level:2},{value:"Step 3: Implement Security Controls",id:"step-3-implement-security-controls",level:2},{value:"Step 4: Assess Security Controls",id:"step-4-assess-security-controls",level:2},{value:"Step 5: Authorize Information System",id:"step-5-authorize-information-system",level:2},{value:"Step 6: Monitor Security Controls",id:"step-6-monitor-security-controls",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"steps-of-the-ato-process"},"Steps of the ATO Process"),(0,i.kt)("p",null,"\"The ATO process\", as it's commonly called, is formally defined in the National Institute of Standards & Technology (NIST)'s ",(0,i.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/projects/risk-management/risk-management-framework-(RMF)-Overview"},"Risk Management Framework (RMF)"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://csrc.nist.gov/CSRC/media/Projects/Risk-Management/images-media/OrgRMF_v3.png",alt:"NIST Risk Management Framework diagram"})),(0,i.kt)("p",null,"The steps in the process are as follows:"),(0,i.kt)("h2",{id:"step-1-categorize-information-system"},"Step 1: Categorize Information System"),(0,i.kt)("p",null,"The information systems' owner, working with the AO, categorizes the system based on the potential impact on the organization if the information system, or the information within it, is jeopardized. The system will end up with a category of ",(0,i.kt)("em",{parentName:"p"},"low"),", ",(0,i.kt)("em",{parentName:"p"},"moderate")," or ",(0,i.kt)("em",{parentName:"p"},"high"),", based on criteria described ",(0,i.kt)("a",{parentName:"p",href:"categorization/"},"here"),"."),(0,i.kt)("p",null,"If your system will be providing novel or risky functions, or handling extremely sensitive data, do this as early as possible."),(0,i.kt)("h2",{id:"step-2-select-security-controls"},"Step 2: Select Security Controls"),(0,i.kt)("p",null,'"Controls" are individual security requirements laid out by the National Institute of Standards and Technology (NIST). NIST\'s encyclopedic ',(0,i.kt)("a",{parentName:"p",href:"http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf"},"Special Publication 800-53")," (currently on revision 4) is the definitive guide to security and privacy controls for federal information systems."),(0,i.kt)("p",null,"Your AO determines which controls need to be implemented. This is generally based on the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The impact level of the system"),' (low, moderate or high). SP 800-53 provides a "baseline" set of controls for each level. The higher the level, the more controls or control enhancements are in scope. For systems running on cloud infrastructure, you should consult ',(0,i.kt)("a",{parentName:"li",href:"https://www.fedramp.gov/resources/documents-2016/"},"FedRAMP's security control documentation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Which controls are already taken care of by your infrastructure"),". If you're running in the cloud, many controls are taken care of at the infrastructure or platform layer. If your provider has received a FedRAMP P-ATO, it will provide a document called a ",(0,i.kt)("em",{parentName:"li"},"customer responsibility matrix")," (CRM) or ",(0,i.kt)("em",{parentName:"li"},"control implementation summary")," (CIS) listing the residual or hybrid controls that are the responsibility (or partial responsibility) of the applications running on the infrastructure or platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"What type of ATO you want to receive"),". The options will be specific to the organization doing the authorizing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Tailoring"),". The information system owner, working with the AO and the agency's information security team, can then add, remove or modify controls to achieve cost-effective, risk-based security, based on the agency's mission or business need.")),(0,i.kt)("p",null,"This step should happen as an integral part of any system design activities. The team should also develop a monitoring strategy to ensure that security controls continue to be effective once the system receives its authority to operate."),(0,i.kt)("h2",{id:"step-3-implement-security-controls"},"Step 3: Implement Security Controls"),(0,i.kt)("p",null,"As part of system development work, controls are implemented. The implementation is documented in the SSP."),(0,i.kt)("p",null,'This step is essentially "state how your system meets each of the regulations". Using established web frameworks (Rails, Django, etc.) and hosting in a platform takes care of a lot of the lower-level controls and security best practices for you, so you only need to be concerned with your application\'s custom code and configuration. This custom code and configuration is known as the "attack surface". The final version of this document is called the System Security Plan.'),(0,i.kt)("p",null,'Fill out the documentation. The full list of data and functions in and of the system (in government parlance "mission based information types" and "delivery mechanisms") must be itemized in structured data. While the data types are obviously arbitrary and custom to each system we produce, the government has a formalized data set of mission functions that should be mapped to the system via ',(0,i.kt)("a",{parentName:"p",href:"https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-60v1r1.pdf"},"NIST 800-60"),". For a Rails app, for example, this can simply be a link to the ",(0,i.kt)("inlineCode",{parentName:"p"},"db/schema.rb")," file on GitHub."),(0,i.kt)("h2",{id:"step-4-assess-security-controls"},"Step 4: Assess Security Controls"),(0,i.kt)("p",null,'In other words, "verify that your system is secure".'),(0,i.kt)("p",null,"Before your system can go live with government information, your contol implementation must be tested. Testing is often performed by the development team and infrastructure team working together with the agency's information security team, based on a security assessment plan. The security assessment plan will depend upon the type of ATO. FedRAMP has a ",(0,i.kt)("a",{parentName:"p",href:"https://www.fedramp.gov/resources/documents-2016/"},"Security Assessment Framework")," for FedRAMP ATOs."),(0,i.kt)("p",null,"There will usually be a penetration test conducted on the system. Any penetration test findings deemed serious enough to prevent an ATO will need to be fixed right away to unblock the ATO process. They will also review the SSP document and test the control narratives. This testing and review process will take 1-2 weeks and should be the top priority for the project team at the time."),(0,i.kt)("p",null,"The results of the assessment are documented in a ",(0,i.kt)("em",{parentName:"p"},"security assessment report")," (SAR). Depending on the findings of the security assessment, remediation work may have to take place before the system receives its ATO. Other problems that are less critical can be remediated at a later date: these are listed in a document called a ",(0,i.kt)("em",{parentName:"p"},"plan of action and milestones")," (POAM or POA&M)."),(0,i.kt)("h2",{id:"step-5-authorize-information-system"},"Step 5: Authorize Information System"),(0,i.kt)("p",null,"The SSP, SAR and POAM together form a ",(0,i.kt)("em",{parentName:"p"},"security authorization package")," (FedRAMP requires a further document: a continuous monitoring strategy). The Authorizing Official will make a risk-based decision whether to grant an ATO based on the information in this package. This decision, made in consultation with other key stakeholders such as the CISO, balances security considerations with the mission and operational needs of the agency."),(0,i.kt)("p",null,'Once all of the materials are prepared and testing is done and the system is considered "ready" by the Authorizing Official, they will sign the ATO memo. If an ATO is granted, an ',(0,i.kt)("em",{parentName:"p"},"authorization decision document")," is issued and signed by the AO which lists the conditions under which the ATO will remain valid, including the ATO's expiry date."),(0,i.kt)("h2",{id:"step-6-monitor-security-controls"},"Step 6: Monitor Security Controls"),(0,i.kt)("p",null,"Once a system receives an ATO, it must be assessed at regular intervals to ensure the effectiveness of the control implementation. Any changes to the system's security boundary or its environment should also be assessed to determine their impact."),(0,i.kt)("p",null,"There are several ways to ensure that your system remains compliant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform regular, automated security scans on your system, and act on the findings in a timely manner."),(0,i.kt)("li",{parentName:"ul"},"Keep your System Security Plan (and any other architecture/security-related documentation) up-to-date.")))}d.isMDXComponent=!0}}]);