"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6988],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return d},toc:function(){return h},default:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={},c="[Incident Response](/engineering-playbook/docs/incident-response/) / Overview",l={unversionedId:"incident-response/overview",id:"incident-response/overview",title:"[Incident Response](./README.md) / Overview",description:"Incident response for production systems owes a great deal to the incident",source:"@site/docs/incident-response/overview.md",sourceDirName:"incident-response",slug:"/incident-response/overview",permalink:"/engineering-playbook/docs/incident-response/overview",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/incident-response/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Incident Response](../README.md) / On-Call Best Practices",permalink:"/engineering-playbook/docs/incident-response/on-call"},next:{title:"\\[Short Title of Incident\\]",permalink:"/engineering-playbook/docs/incident-response/retro-template"}},d={},h=[{value:"What Is An Incident",id:"what-is-an-incident",level:2},{value:"Roles",id:"roles",level:2},{value:"Incident Commander",id:"incident-commander",level:3},{value:"Technical Lead/Investigator",id:"technical-leadinvestigator",level:3},{value:"Communicator",id:"communicator",level:3},{value:"Scribe",id:"scribe",level:3},{value:"Severity",id:"severity",level:2},{value:"Process",id:"process",level:2},{value:"Starting the Process",id:"starting-the-process",level:3},{value:"During the Incident",id:"during-the-incident",level:3},{value:"After the Incident",id:"after-the-incident",level:3}],u={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incident-response--overview"},(0,r.kt)("a",{parentName:"h1",href:"/engineering-playbook/docs/incident-response/"},"Incident Response")," / Overview"),(0,r.kt)("p",null,"Incident response for production systems owes a great deal to the incident\nresponse process developed by the National Forest Service and later\nstandardized by DHS for all emergency services, known as the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Incident_Command_System"},"Incident\nCommand System (ICS)"),".\nThis document will describe how we adopt this process to work for our\nprojects."),(0,r.kt)("h2",{id:"what-is-an-incident"},"What Is An Incident"),(0,r.kt)("p",null,"Before we describe incident response, we should define what exactly\nconstitutes an incident. An incident is a service disruption, usually\nwith user impact, that needs to be addressed outside of the normal\nsprint process, and requires an increased degree of coordination and\ncommunication."),(0,r.kt)("p",null,"This definition is intentionally vague because there's no hard and fast\nrule about what qualifies for the incident response process. Basically,\nif the initial responders think this framework will be useful in taking\ncare of the problem, they should invoke the incident response process."),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("h3",{id:"incident-commander"},"Incident Commander"),(0,r.kt)("p",null,"The incident commander runs the incident response. This ",(0,r.kt)("em",{parentName:"p"},"does not")," mean\nthat they are leading the investigation; in fact, they should not be\ninvestigating at all directly. Their responsiblities are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep track of the current state of the incident response; what is the\nimpact to the service and users? What is the state of any mitigations\nor attempted fixes? How are the other members of the incident response\nteam holding up?"),(0,r.kt)("li",{parentName:"ul"},"Make any final decisions about incident response. No one should put in\nplace any mitigations, attempted solutions, or active diagnostic\nmeasures ",(0,r.kt)("em",{parentName:"li"},"without")," running it by the IC first. This is imperative to\nensure no one is working at cross purposes and that the current state\nof the system is understood.")),(0,r.kt)("p",null,"During especially severe incidents, the commander may also have a deputy\nto assist with their tasks."),(0,r.kt)("h3",{id:"technical-leadinvestigator"},"Technical Lead/Investigator"),(0,r.kt)("p",null,"There may be one or more investigators on any one incident. These are the\npeople responsible for actual diagnosis of problems and implementation of\nany mitigations or attempted fixes for the cause of the incident."),(0,r.kt)("p",null,"If there is more than two investigators on the incident, one should be\ndesignated as the technical lead. This will be the person who reports to\nthe incident commander and coordinates the investigation to keep people\nfrom duplicating effort or stepping on each other's toes."),(0,r.kt)("p",null,"Before taking any ",(0,r.kt)("em",{parentName:"p"},"active")," measures to investigate, the investigator(s)\nshould coordinate with the incident commander to make sure they are aware\nand approve of taking the action."),(0,r.kt)("h3",{id:"communicator"},"Communicator"),(0,r.kt)("p",null,"The communicator is responsible for handling external communication during\nthe incident, both by keeping the rest of the engineering team informed\nand notifying stakeholders (such as clients) about the status of the\nincident. Similarly, if non-responders want to ask questions or notify\nthe incident response team of issues, they should use the communicator as\na conduit to the incident commander, not talk to the commander directly."),(0,r.kt)("p",null,"During less severe incidents, the communicator role may be folded into\nthe scribe role."),(0,r.kt)("h3",{id:"scribe"},"Scribe"),(0,r.kt)("p",null,"The scribe is responsible for recording what is going on during the\nincident, both so that the incident response team has something they can\nreference during the incident, and for the use of the person coordinating\nthe retrospective after the incident is over. While most communication\nduring the incident should be taking place somewhere it can be easily\nrecorded (such as Slack), parsing through hundreds or thousands of Slack\nmessages to find the one that is important can be difficult. The scribe\nshould highlight notable events in the incident process, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when the incident is first noticed"),(0,r.kt)("li",{parentName:"ul"},"when the incident response begins and ends"),(0,r.kt)("li",{parentName:"ul"},"when the impact of the incident changes (for the better or worse, or\nnew symptoms appear)"),(0,r.kt)("li",{parentName:"ul"},"when mitigations or attempted fixes are applied"),(0,r.kt)("li",{parentName:"ul"},"any other events that have a significant impact on the progress of the\nincident")),(0,r.kt)("p",null,"These should be recorded somewhere easily available to the rest of the\nteam; a Google Doc is usually the best place, since it can be added to\nor commented on collaboratively."),(0,r.kt)("h2",{id:"severity"},"Severity"),(0,r.kt)("p",null,"Incidents are usually graded on a 3-5 point scale, with SEV1 being the\nmost severe type of incident. This may be decided on a project-by-project\nbasis, since clients may have specific reporting requirements around\ncertain incident severities. In general, the severity index should look\nsomething like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SEV1 - Complete service outage or major security incident. Requires an\nimmediate response at the highest priority.\n",(0,r.kt)("em",{parentName:"li"},"Example: Service containers stuck in a crash loop, PII data known to\nhave leaked.")),(0,r.kt)("li",{parentName:"ul"},"SEV2 - Significant service degradation or severe known security\nvulnerability. Requires an immediate response at high priority.\n",(0,r.kt)("em",{parentName:"li"},"Example: 20% HTTP error rate, library with known remote exploit in\nuse.")),(0,r.kt)("li",{parentName:"ul"},"SEV3 - Service is in a degraded state but is not currently impacting\nusers. If further issues occur, is in danger of reaching SEV1 or SEV2.\nShould be addressed promptly, but not necessarily immediately.\n",(0,r.kt)("em",{parentName:"li"},"Example: One member of a database replica pair is down."))),(0,r.kt)("p",null,"Additional severity levels are left to the project's discretion."),(0,r.kt)("h2",{id:"process"},"Process"),(0,r.kt)("h3",{id:"starting-the-process"},"Starting the Process"),(0,r.kt)("p",null,"An incident begins with someone being notified of an issue, usually by\nmonitoring or a user complaint. The initial responder then notifies the\nrest of the team in an appropriate channel (projects should have their\nown channel designated for incident coordination) and begins the\nincident response."),(0,r.kt)("p",null,"Immediately after declaring the incident, the responder should find an\nincident commander. This could be the initial responder, but they may be\nbetter suited for taking the lead investigator role if they have already\nstarted trying to diagnose the problem. If they are going to be the\nincident commander, they should find someone (such as the secondary\non-call) to take the lead on the investigation."),(0,r.kt)("p",null,"The incident commander should then find a scribe and communicator. For\nsmaller incidents, this could be one person. The initial responder should\ngive the scribe as much context to begin recording the opening stages of\nthe incident, and the scribe should start the incident record and make a\nlink to the document available to responders."),(0,r.kt)("h3",{id:"during-the-incident"},"During the Incident"),(0,r.kt)("p",null,"The incident response team's priorities during the incident should be\nas follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assess the impact of the incident (affecting random 10% of users, the\nus-west-2 region, users whose accounts were created today, etc)"),(0,r.kt)("li",{parentName:"ul"},"Mitigate the impact to the service (failing over to another region,\nplacing the service into read-only mode, rolling back to a previous\nknown good version, etc)"),(0,r.kt)("li",{parentName:"ul"},"Attempt to diagnose the problem via passive measures (reading logs,\nprobing read-only endpoints, examining metrics, etc)"),(0,r.kt)("li",{parentName:"ul"},"Take active measures to diagnose the problem (pushing config or code\nchanges, submitting data to see how the system responds, etc)"),(0,r.kt)("li",{parentName:"ul"},"Take action in an attempt to resolve the problem.")),(0,r.kt)("p",null,"The response process during the incident should basically be a 15-20\nminute loop that looks something like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The technical lead or investigators report to the incident commander\non the current state of the service. Special attention should be paid\nto changes in status (it is getting better or worse, affecting a new\nset of users, spreading to another region, etc)."),(0,r.kt)("li",{parentName:"ul"},"The team reviews the status of any mitigation or solution efforts that\nwere put in place during the previous iteration of the loop."),(0,r.kt)("li",{parentName:"ul"},"If the incident is not yet resolved, the team determines what their\ncourse of action will be for the next 15-20 minutes; any new active\nmeasures need to be approved by incident commander."),(0,r.kt)("li",{parentName:"ul"},"Team members go back and take their appropriate actions, and start\nthe loop over again in 15-20 minutes.")),(0,r.kt)("p",null,"In general, you do not want to repeat this loop in more often than once\nevery 15 minutes, otherwise your team members will be too busy checking\nin to actually do what they need to. Repeating less often means that the\nsituation can change too much between check-ins, which is bad for the\nincident commander's situational awareness."),(0,r.kt)("p",null,"If the incident is resolved, it's usually a good idea to wait an\nadditional 15 minutes before you disband the response team, just to\nmake sure it's ",(0,r.kt)("em",{parentName:"p"},"actually")," resolved, and not just a temporary blip. If\nthings are quiet after that, you can move to the post-incident steps."),(0,r.kt)("h3",{id:"after-the-incident"},"After the Incident"),(0,r.kt)("p",null,"Once the incident is over, the incident commander should wind down the\nincident response and notify the rest of the engineering team and any\nstakeholders that the incident response is ending."),(0,r.kt)("p",null,"Each member of the team should review the incident record and make sure\nthat any of their own notes are in the record. The scribe should reread\nthe log of incident communication and make sure they have highlighted\nthe important events in the record."),(0,r.kt)("p",null,"The incident commander should create a ticket to generate a retrospective\nand add links to the incident record as well as the first Slack message\nthat started the incident so that the facilitator for the retrospective\ncan review it. They should also find someone (if at all possible, someone\nwho was ",(0,r.kt)("em",{parentName:"p"},"not")," involved in the incident directly themselves) to facilitate\nthe retrospective and assign the ticket to them."))}p.isMDXComponent=!0}}]);