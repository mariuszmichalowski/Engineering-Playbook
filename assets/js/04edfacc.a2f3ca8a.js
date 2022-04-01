"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1705],{3905:function(e,t,i){i.d(t,{Zo:function(){return m},kt:function(){return d}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(i),d=r,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return i?n.createElement(g,o(o({ref:t},m),{},{components:i})):n.createElement(g,o({ref:t},m))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4203:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return m},toc:function(){return p},default:function(){return d}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),o=["components"],s={},l="Risk Management Framework - Step 1: Categorize",c={unversionedId:"compliance/risk-management/categorize",id:"compliance/risk-management/categorize",title:"Risk Management Framework - Step 1: Categorize",description:"Categorization is based on an impact analysis and is performed to determine the types of information included within the authorization boundary, security requirements for the information type, and potential impact resulting from a security compromise. Agencies are required to categorize their information systems as low-impact, moderate-impact, or high-impact for the security objectives of confidentiality, integrity, and availability and to select appropriate security controls.",source:"@site/docs/compliance/risk-management/categorize.md",sourceDirName:"compliance/risk-management",slug:"/compliance/risk-management/categorize",permalink:"/docs/compliance/risk-management/categorize",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/compliance/risk-management/categorize.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Risk Management Framework - Step 5: Authorize",permalink:"/docs/compliance/risk-management/authorize"},next:{title:"Risk Management Framework",permalink:"/docs/compliance/risk-management/framework"}},m={},p=[{value:"Objectives",id:"objectives",level:2},{value:"Categorizing",id:"categorizing",level:2},{value:"Risks and risk categories",id:"risks-and-risk-categories",level:3},{value:"Expressing the results",id:"expressing-the-results",level:2},{value:"Categorization under continuous monitoring",id:"categorization-under-continuous-monitoring",level:2},{value:"More detailed reading from NIST",id:"more-detailed-reading-from-nist",level:2}],u={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"risk-management-framework---step-1-categorize"},"Risk Management Framework - Step 1: Categorize"),(0,a.kt)("p",null,"Categorization is based on an impact analysis and is performed to determine the types of information included within the authorization boundary, security requirements for the information type, and potential impact resulting from a security compromise. Agencies are required to categorize their information systems as low-impact, moderate-impact, or high-impact for the security objectives of confidentiality, integrity, and availability and to select appropriate security controls."),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("p",null,"Information systems have three security objectives defined by the Federal Information Security Management Act (FISMA)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Confidentiality:")," Prevent unauthorized disclosure of information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Integrity:")," Prevent unauthorized modification or destruction of information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Availability:")," Prevent disruption of access to information or use of the system.")),(0,a.kt)("h2",{id:"categorizing"},"Categorizing"),(0,a.kt)("p",null,"To categorize the information system, you need to establish two things. First, what are the data types in the system? Second, for each of those data types, would the failure of each of the three security objectives pose a low, moderate, or high risk to the agency? Decide how damaging the loss of confidentiality, integrity, or availability would be to both the agency\u2019s ability to work and its money, property, or people."),(0,a.kt)("h3",{id:"risks-and-risk-categories"},"Risks and risk categories"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Area of risk"),(0,a.kt)("th",{parentName:"tr",align:null},"Low risk"),(0,a.kt)("th",{parentName:"tr",align:null},"Moderate risk"),(0,a.kt)("th",{parentName:"tr",align:null},"High risk"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ability to work"),(0,a.kt)("td",{parentName:"tr",align:null},"Minor but noticeable"),(0,a.kt)("td",{parentName:"tr",align:null},"Significant but does not affect agency\u2019s primary functions"),(0,a.kt)("td",{parentName:"tr",align:null},"Harms ability to perform primary functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Money, property, or people"),(0,a.kt)("td",{parentName:"tr",align:null},"Minor"),(0,a.kt)("td",{parentName:"tr",align:null},"Significant"),(0,a.kt)("td",{parentName:"tr",align:null},"Catastrophic")))),(0,a.kt)("h2",{id:"expressing-the-results"},"Expressing the results"),(0,a.kt)("p",null,"For each information type, state the risk for confidentiality, integrity, and availability. Structure it in this way:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SC information type = {(confidentiality, impact), (integrity, impact), (availability, impact)}")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"medium"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"high")," for the impact. Then take the maximum impact category against each objective and use that for the information system as a whole. Structure it the same way:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SC information system = {(confidentiality, impact), (integrity, impact), (availability, impact)}")),(0,a.kt)("p",null,"An individual data type\u2019s impact can be ",(0,a.kt)("em",{parentName:"p"},"n/a")," if there is no risk at all, but for the whole system, the minimum risk level on any objective is Low."),(0,a.kt)("h2",{id:"categorization-under-continuous-monitoring"},"Categorization under continuous monitoring"),(0,a.kt)("p",null,"You should begin categorizing information systems as close to the beginning of the system development life cycle as possible. Each time you identify an information type the system will handle, give it an initial categorization. As you assemble a larger set of them, review the initial categories and update if needed. You might find that relationships among categories raise the risk of one or more of them. You might find that the use of the system is going to change, which could change the risks. The full set of information types will produce system categories that are unsurprising. You are more likely to be prepared to select, implement, assess, and document the correct controls."),(0,a.kt)("p",null,"Building knowledge of risk as you build the system is best done by having the developers participate. As they identify system risks, they can think about good controls rather than reacting after the fact to categorization received from information security. And the flexibility this builds into the development life cycle will make it much easier to react to issues raised by continuous monitoring."),(0,a.kt)("h2",{id:"more-detailed-reading-from-nist"},"More detailed reading from NIST"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf"},"FIPS 199")," describes the objectives, categories, and how to structure your categories."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://csrc.nist.gov/publications/nistpubs/800-60-rev1/SP800-60_Vol1-Rev1.pdf"},"SP 800-60")," recommends an specific approach to categorization.")))}d.isMDXComponent=!0}}]);