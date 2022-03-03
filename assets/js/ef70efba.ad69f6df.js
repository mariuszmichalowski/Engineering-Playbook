"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4843],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(m,a(a({ref:t},h),{},{components:n})):o.createElement(m,a({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return d},default:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={},l="[Incident Response](/engineering-playbook/docs/incident-response/) / Incident Analysis and Retrospectives",c={unversionedId:"incident-response/analysis",id:"incident-response/analysis",title:"[Incident Response](./README.md) / Incident Analysis and Retrospectives",description:"This documentation is not intended to be a complete guide to incident",source:"@site/docs/incident-response/analysis.md",sourceDirName:"incident-response",slug:"/incident-response/analysis",permalink:"/engineering-playbook/docs/incident-response/analysis",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/incident-response/analysis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Engineering Playbook](../README.md) / Incident Response",permalink:"/engineering-playbook/docs/incident-response/"},next:{title:"[Incident Response](./README.md) / External Resources",permalink:"/engineering-playbook/docs/incident-response/external-resources"}},h={},d=[{value:"Overview",id:"overview",level:2},{value:"Preparing for the Retrospective",id:"preparing-for-the-retrospective",level:2},{value:"Timeline",id:"timeline",level:3},{value:"Collect Accounts",id:"collect-accounts",level:3},{value:"Prepare Questions",id:"prepare-questions",level:3},{value:"The Retrospective",id:"the-retrospective",level:2},{value:"The Retrospective Record",id:"the-retrospective-record",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incident-response--incident-analysis-and-retrospectives"},(0,r.kt)("a",{parentName:"h1",href:"/engineering-playbook/docs/incident-response/"},"Incident Response")," / Incident Analysis and Retrospectives"),(0,r.kt)("p",null,"This documentation is not intended to be a complete guide to incident\nanalysis; this is a complicated field and trying to sum this up in a\nrelatively short document is impossible. This is intended to be a surface\nlevel guide to conducting a productive retrospective; for a more thorough\ndiscussion of the topic, we recommend reading the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/etsy/DebriefingFacilitationGuide"},"Etsy Debriefing\nFacilitation Guide"),"\nand Sidney Dekker's ",(0,r.kt)("a",{parentName:"p",href:"https://www.amazon.com/Field-Guide-Understanding-Human-Error-ebook-dp-B00BL0OZ0E/dp/B00BL0OZ0E/"},"Field Guide to Understanding 'Human\nError'"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The purpose of an incident retrospective is to create an opportunity for\n",(0,r.kt)("strong",{parentName:"p"},"learning")," about how the incident occurred. Our goal is for the people\nparticipating in the retrospective (and hopefully the organization as a\nwhole) to gain a better understanding of our systems and how they operate;\nto find out not only what caused the system to break down, but also what\nwas done to diagnose and solve the problem, and share that knowledge."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'The purpose of the retrospective is not to "fix" the system.'),' The fact\nof the matter is that post-incident review processes that focus on\nproducing a list of action items with the intent of preventing an incident\nfrom occurring end up falling short because they rarely address "second\nstories" -- organizational and systemic failures -- in favor of smaller\nscale fixes. What\'s worse, in many cases, these action items are never\ncompleted due to other business priorities -- and the narrowly-focused\nreview does not help anyone learn how to improve the entire system.'),(0,r.kt)("p",null,'We are also not trying to determine the "root cause" of an incident. No\nincident has a single root cause; every single one is a complicated\nintersection of environmental factors, human factors, technical systems,\nand organizational factors. "Cause" is a logical abstraction created by\nhumans; at some point, we draw a line and say "the incident started here."\nIn reality, every event has a web of interactions behind it going back\nto the Big Bang. Finding this line is less interesting than trying to\nunderstand the whole complex chain of events, and how all of the people\ninvolved saw them, in order to better understand how this incident\noccurred, and how we can avoid similar incidents in the future.'),(0,r.kt)("h2",{id:"preparing-for-the-retrospective"},"Preparing for the Retrospective"),(0,r.kt)("p",null,"Before we are ready to conduct an incident retrospective, there are a\nnumber of steps that the facilitator should take in order to make sure\nwe're using the time in the best way possible. All of these should be\ndone as soon as possible after the incident; people will begin to forget\nwhat happened or have their perceptions influenced by outside forces\nalmost as soon as the incident is over, so following through on these\nwithin 48-72 hours is important in order to get good information."),(0,r.kt)("h3",{id:"timeline"},"Timeline"),(0,r.kt)("p",null,"The first thing you should do as the facilitator of a retrospective is\nto prepare a preliminary timeline of the incident. Hopefully, the scribe\nand the other responders during the incident have already put together\na description of events; however, you will still want to review the chat\nlogs for the incident (and possible other records, if necessary) to\ncreate a timeline to use as a guide in the rest of the investigation."),(0,r.kt)("p",null,"When compiling this timeline, keep in mind that at this stage we are not\nlooking to answer why or how something happened -- only ",(0,r.kt)("em",{parentName:"p"},"what")," happened.\nLooking beyond the actual events that transpired makes it much more likely\nthat we will start to introduce our own bias before we've even really\nbegun the investigation."),(0,r.kt)("p",null,"If possible, every event in your timeline should link to some sort of\nprimary source -- a chat record, a system log line, a PagerDuty alert,\nor something else that allows you to easily reference the event later\nduring the retrospective."),(0,r.kt)("h3",{id:"collect-accounts"},"Collect Accounts"),(0,r.kt)("p",null,"If at all possible, you should try to schedule a 30-minute session with\neach member of the incident response team -- especially the incident\ncommander and investigators -- to have them give you their account of\nthe incident, starting with when they first became aware of the incident\nand ending with when they stopped working on it."),(0,r.kt)("p",null,"At this stage, try let them just tell you the story; try to avoid asking\ntoo many questions that are not centered on what they saw, felt, or did,\nand try to avoid comparing their experiences with that of other team\nmembers. At this stage, we want to avoid introducing bias as much as\npossible; we're just trying to get their recollections of the events so\nwe can add that to our record."),(0,r.kt)("h3",{id:"prepare-questions"},"Prepare Questions"),(0,r.kt)("p",null,"Once you have a timeline and the subjective accounts of the participants,\nyou should take some time to come up with some questions to ",(0,r.kt)("em",{parentName:"p"},"start"),"\ndiscussion in the retrospective. It's important to note that during the\nretrospective, things will likely go off in different directions than you\nexpect, so these are not necessarily prescriptive. Your goal is to get\npeople talking about what they experienced to highlight important events\nduring the incident. Here's some guidelines for the types of questions\nyou want to ask:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Do not ask questions that could be answered by a "yes" or a "no". These\nare not going to create discussion.'),(0,r.kt)("li",{parentName:"ul"},'Don\'t ask "why" someone did something. Especially in English, "why" is\nheavily associated with blamefulness. Instead, ask ',(0,r.kt)("em",{parentName:"li"},"how")," they made the\ndecision to take action. This is more likely to get you an interesting\nanswer about how people make decisions and expose hidden factors."),(0,r.kt)("li",{parentName:"ul"},"If two people had different perceptions about the same event, this is\noften a key point to dig in to. What experiences or knowledge did they\nhave to create different views of the incident?")),(0,r.kt)("p",null,"Do not overdo this part; your job is to provoke discussion during the\nretrospective, not necessarily guide it (with some important caveats).\n5-10 questions is probably sufficient."),(0,r.kt)("h2",{id:"the-retrospective"},"The Retrospective"),(0,r.kt)("p",null,"The actual incident retrospective should be a 60-90 minute meeting where\nas many people involved in the incident (and others, if they want to\nobserve) should meet to go over the incident. During the retrospective,\nit may be a good idea to have a deputy with you to take notes and help\nguide the discussion, especially for incidents with large team of\nresponders or a lot of complexity."),(0,r.kt)("p",null,"As the facilitator, you should lead off the discussion by introducing the\ngoals of the retrospective; the Etsy Debriefing Guide suggests this:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The goal for our time together today is to recreate the event, talking through\nwhat happened for each person at each stage in order to create as robust a\nportrait as possible of what happened, and what the circumstances in play were\nat each juncture (when decisions were made, and actions were taken) that made\nit make sense for people to do what they did in the moment. If one of you gains\nan insight into the complexity of another person\u2019s role, this was an hour well\nspent."),(0,r.kt)("p",{parentName:"blockquote"},"Throughout the duration of this debrief, we will all focus on being utterly\nblameless, to ourselves and to others. We will be focusing on the ",(0,r.kt)("strong",{parentName:"p"},"HOW")," of\nwhat happened, not the ",(0,r.kt)("strong",{parentName:"p"},"WHY"),".")),(0,r.kt)("p",null,"As a structure for the retrospective, it's often easiest to start by just\nfollowing the timeline of the incident and asking your starting discussion\nquestions as they come up. The majority of your time (at least 2/3rds)\nshould be spent discussing the timeline and any questions that come up as\na result. ",(0,r.kt)("strong",{parentName:"p"},'Resist the temptation to create "action items" or otherwise try\nto "fix" problems until you have gone through the timeline.')," Doing so can\nlead to \"solutions\" that aren't actually that productive and cuts down the\ntime you have to discuss the actual incident. Suggest to everyone that if\nthey have ideas for fixes, that they write them down so you can discuss\nthem later. If you do your job right, you won't necessarily need to come up\nwith solutions here -- the learning from the retrospective will prompt\npeople to come up with them on their own going forward."),(0,r.kt)("p",null,"Other tips for running this retrospective:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Be wary of any people dominating the conversation, ",(0,r.kt)("em",{parentName:"li"},"especially")," managers\nor other authority figures. This can intimidate people and makes it far\nless likely to get honest assessments of the events of the incident. If\nyou haven't heard from people, try asking them questions directly."),(0,r.kt)("li",{parentName:"ul"},"Steer the conversation away from blame or any notion of 'human error'.\nIt's extremely rare that someone involved in an incident isn't trying\nto do their best -- 'human error' is almost always a symptom of a larger\nsystemic or organizational problem. These tend to be the biggest -- and\nhardest to fix -- problems that contribute to incidents, which makes it\nespecially important to highlight them."),(0,r.kt)("li",{parentName:"ul"},"Be extremely careful about anyone (including you) trying to decide on a\nnarrative for the incident during this meeting. Incidents are not linear\nprogressions of events; they are filled with dead ends, tangents, and\nfeedback loops. Resist the temptation to try and guide the discussion\nunless it's wandering into blameful territory, or being sidetracked by\nconversations unrelated to the incident.")),(0,r.kt)("p",null,"Once you have gotten through the timeline, you can open up more discussion\non what people learned from the incident and possible remediations. It is\nimportant that people understand that there's no pressure to come up with\na load of tickets at this point; ",(0,r.kt)("strong",{parentName:"p"},'you can have a good retrospective with\nno "action items."')," Once the retrospective is over, teams should take the\nlearnings back from the retrospective and turn these into more concrete\nplans of action."),(0,r.kt)("h2",{id:"the-retrospective-record"},"The Retrospective Record"),(0,r.kt)("p",null,"Once the retrospective meeting is over and you have your collected notes,\nthe last step in the incident retrospective is creating a written record\nof the incident and the learnings from the retrospective. The goal of\nthis document is to provide a historical record that people who were not\ninvolved in the incident or retrospective can learn from."),(0,r.kt)("p",null,"We recommend using a collaborative method to write the template (Google\nDocs is the usual case), and then when complete and reviewed, it should\nbe put in the central document archive for the project, wherever that\nmay be. Other ",(0,r.kt)("a",{parentName:"p",href:"/engineering-playbook/docs/documentation/"},"guidance")," with regard to\ndocumentation applies."),(0,r.kt)("p",null,"While we provide a ",(0,r.kt)("a",{parentName:"p",href:"/engineering-playbook/docs/incident-response/retro-template"},"template")," for this document,\nit is meant to be a guide, not a straitjacket. If it is not the best\nformat to present the results of the retrospective, you are encouraged to\nalter it as necessary. For more specific guidance on how to record your\nfindings, see the notes in the template."))}u.isMDXComponent=!0}}]);