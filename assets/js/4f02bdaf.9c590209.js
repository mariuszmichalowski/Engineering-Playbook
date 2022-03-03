"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5822:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="[InfraSec](/engineering-playbook/docs/infrasec/) / Project Bootstrap Guide",u={unversionedId:"infrasec/bootstrap",id:"infrasec/bootstrap",title:"[InfraSec](README.md) / Project Bootstrap Guide",description:"When we're starting up a new project, often there is a period of time",source:"@site/docs/infrasec/bootstrap.md",sourceDirName:"infrasec",slug:"/infrasec/bootstrap",permalink:"/engineering-playbook/docs/infrasec/bootstrap",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/bootstrap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](README.md) / book-club",permalink:"/engineering-playbook/docs/infrasec/book-club/"},next:{title:"[InfraSec](README.md) / SSL Certificates",permalink:"/engineering-playbook/docs/infrasec/certs"}},c={},p=[{value:"GitHub and Git Repos",id:"github-and-git-repos",level:2},{value:"1Password",id:"1password",level:2},{value:"AWS Organization and Accounts",id:"aws-organization-and-accounts",level:2},{value:"GovCloud",id:"govcloud",level:3},{value:"Atlantis",id:"atlantis",level:3},{value:"Placeholder service modules",id:"placeholder-service-modules",level:3},{value:"CI/CD Pipeline",id:"cicd-pipeline",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"infrasec--project-bootstrap-guide"},(0,r.kt)("a",{parentName:"h1",href:"/engineering-playbook/docs/infrasec/"},"InfraSec")," / Project Bootstrap Guide"),(0,r.kt)("p",null,"When we're starting up a new project, often there is a period of time\nwhere the design and research team is doing their initial work, we don't\nhave any infrastructure set up, and engineers want to do some initial\nexperimentation. This guide is intended as a resource for infrastructure\nengineers bootstrapping a new project from scratch. Not all projects will\nneed all of the elements here; for instance, if you're working in an\nexisting organization's AWS accounts or git repos, then you won't likely\nneed to set up your own."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github-and-git-repos"},"GitHub and Git Repos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1password"},"1Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aws-organization-and-accounts"},"AWS Organization and Accounts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#govcloud"},"GovCloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#atlantis"},"Atlantis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#placeholder-service-modules"},"Placeholder service modules")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cicd-pipeline"},"CI/CD Pipeline"))),(0,r.kt)("h2",{id:"github-and-git-repos"},"GitHub and Git Repos"),(0,r.kt)("p",null,"The first thing you will likely need to do for your project is create\na number of GitHub repos and possibly a new GitHub organization. This\nis the prerequisite for nearly everything else you need to do to set\nup your infrastructure, so doing it as early as possible is a good idea."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your client does not have an organization for you to do this in,\nor if they would prefer you create a new one, then you will need to\ncreate a new GitHub organization. GitHub has\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch"},"docs"),'\nthat explain this process; you will probably want the "GitHub Team"\nproduct, and use the Truss admin credit card to handle this cost. It\'s\nalso a good idea to make sure the leads for your project are owners,\nand probably your contact at the client organization as well. This\nwill allow them to easily add or remove new members if necessary.'),(0,r.kt)("li",{parentName:"ul"},"Once you have a GitHub organization, you will need to create a number\nof repositories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myproject-infra")," - This is a repo which you will use to hold the\nTerraform code used to configure your project's AWS (or other cloud\nservice) account(s)."),(0,r.kt)("li",{parentName:"ul"},"application repo(s) - You should talk to the AppEng lead to see how\nthey would like to organize the application and create repos they\ncan use early on. Some projects, like MyMove, may want a single repo\nfor all the application code, but other projects may want separate\nrepos for the frontend and backend, for instance. Neither of these\nis inherently correct, so consult with the AppEng lead (if you have\none) to make this decision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myproject-infra-gov")," - If your project is going to need to have\nresources in GovCloud, as many of ours do, you will need another repo\nfor the Terraform used for that. This is for two reasons; one, we\ngenerally want tighter permissions on who has access to this repo, and\nsecond, if we want to have ",(0,r.kt)("a",{parentName:"li",href:"https://runatlantis.io"},"Atlantis")," handling\nthe infrastructure in these accounts, we need a separate repo."))),(0,r.kt)("li",{parentName:"ul"},"If at all possible, you should be using Terraform to maintain the users,\nteams, and repos for your project. The catch being that you'll need your\n",(0,r.kt)("inlineCode",{parentName:"li"},"myproject-infra")," repo first.")),(0,r.kt)("h2",{id:"1password"},"1Password"),(0,r.kt)("p",null,'It is highly likely that you will want to get a 1Password team for your\nproject. This will allow you to store things like passwords and MFA codes\nfor AWS accounts, GitHub "robot" users, and anything else that you need\nto give members of the team access to.'),(0,r.kt)("p",null,"You can create a new account by going to ",(0,r.kt)("a",{parentName:"p",href:"https://1password.com"},"https://1password.com"),' and\nclicking on "sign in" in the upper right hand corner, and then instead\nof clicking on an existing account, click on "create a new account" at\nthe bottom of the page, then click on "for my team" on the next page,\nand follow the creation dialogue. Use the Truss admin card for the\ncharges.'),(0,r.kt)("p",null,"You should only need to add people who actually need to access these\ncredentials for the project to the team (since there's a charge per-user).\nThis generally means all members of the infra team, the engineering lead,\nand the project lead -- but you can always add more people later if\nnecessary."),(0,r.kt)("p",null,"Like the GitHub organization/repositories, this should probably be done\nas early in the process as possible, since you will want to store\ncredentials for the other accounts you are creating."),(0,r.kt)("h2",{id:"aws-organization-and-accounts"},"AWS Organization and Accounts"),(0,r.kt)("p",null,"Once you have a Git repo and 1Password set up, you will want to set up\nyour AWS organization and/or accounts. Even if you don't have an actual\napplication to stand up yet, you should get this bootstrapped so that\nthings are ready to go."),(0,r.kt)("p",null,"If you are starting from scratch, you will need to open a new AWS account\nby going to ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com"},"https://aws.amazon.com")," and creating an AWS account, using\nthe Truss admin card as the billing information. This account will be your\n",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account that will start your\n",(0,r.kt)("a",{parentName:"p",href:"/engineering-playbook/docs/infrasec/aws/aws-organizations"},"AWS Organization"),". Once that is created, you\nshould bootstrap Terraform in it and set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-global")," namespace.\nThings you will want to set up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS logs S3 bucket"),(0,r.kt)("li",{parentName:"ul"},"IAM users for org-root users (infra users only)"),(0,r.kt)("li",{parentName:"ul"},"AWS Config for the organization"),(0,r.kt)("li",{parentName:"ul"},"AWS Cloudtrail for the organization"),(0,r.kt)("li",{parentName:"ul"},"AWS GuardDuty for the organization")),(0,r.kt)("p",null,"Once that is done, you'll also need to set up some other accounts using\nTerraform in the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root")," account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-id")," account for handling all your IAM users"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-infra")," account for project-wide infrastructure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-dev")," account for your dev deployment of the application")),(0,r.kt)("p",null,"You may want to set up others as well (",(0,r.kt)("inlineCode",{parentName:"p"},"-staging")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-prod")," for instance),\nbut these are probably the ones you want as soon as possible."),(0,r.kt)("h3",{id:"govcloud"},"GovCloud"),(0,r.kt)("p",null,"If you will need to be using GovCloud for this project, you should set\nup the parallel organization in GovCloud as well. See the (GovCloud\nOrganization)","[","./aws/govcloud/gov-orgs.md","]"," docs for an explanation of how\nto set this up."),(0,r.kt)("p",null,"If you will be working entirely in GovCloud, you will not need the ",(0,r.kt)("inlineCode",{parentName:"p"},"-dev"),"\naccount in your commercial organization; you can leave your commercial\norganization with only the ",(0,r.kt)("inlineCode",{parentName:"p"},"org-root"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-id"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"-infra")," accounts. These\nwill be necessary because there are some things that can ",(0,r.kt)("strong",{parentName:"p"},"only")," be done\nin commercial AWS, such as public DNS."),(0,r.kt)("h3",{id:"atlantis"},"Atlantis"),(0,r.kt)("p",null,"If you plan to use ",(0,r.kt)("a",{parentName:"p",href:"https://runatlantis.io"},"Atlantis")," to maintain your\nTerraform (which we highly recommend), you should also consider setting\nthis up early. We have an ",(0,r.kt)("a",{parentName:"p",href:"/engineering-playbook/docs/infrasec/terraform/atlantis"},"Atlantis doc")," that\nwill help you set this up."),(0,r.kt)("p",null,"Setting up Atlantis early will get your engineers used to the workflow\nand encourage good Terraform habits from the start. This will mean less\nheadaches later trying to figure out which changes are expected and which\nare not."),(0,r.kt)("h3",{id:"placeholder-service-modules"},"Placeholder service modules"),(0,r.kt)("p",null,"Once the AppEng lead has identified, at a high level, the services they\nwill be deploying -- such as a frontend, backend, and database -- you\nshould start building Terraform modules to deploy these components. Even\nif, at this point, they are largely placeholders, you should start\nfiguring out what you'll need to get these working -- things like ECS\nservices, RDS instances, ALBs, VPCs, security groups, IAM roles, etc."),(0,r.kt)("p",null,"Even if there isn't much to actually put there, and the service will be\ndormant, working this out ",(0,r.kt)("em",{parentName:"p"},"before")," you need to start demoing things for\nthe client will help you work out any kinks and help developers get a\ntight feedback loop once they start working on the application in earnest."),(0,r.kt)("h2",{id:"cicd-pipeline"},"CI/CD Pipeline"),(0,r.kt)("p",null,"Setting up your CI/CD pipeline early is another piece of automation that\nwill pay off in the long run. Doing so means that developers will get used\nto the idea that their changes will be put, at the very least, into a real\nrunning environment every time they push, which means that building in\ntests and operability are not optional components or things to be added\nlater."),(0,r.kt)("p",null,"Truss tends to use either CircleCI or GitHub Actions for our projects;\nGitHub Actions are newer and as a result our patterns for them are not as\nwell-developed, however they have a lower barrier to entry and you can\nuse them on a limited basis for free even with private repos. It may also\neasier to use GitHub Actions in environments where clients are cool on\nusing a SaaS product like CircleCI (since they are already likely using\nGitHub). Alternatively, you may need to use a CI/CD pipeline that the\nclient already uses."),(0,r.kt)("p",null,"Regardless of which you pick, you should start wiring up the application\nrepo(s) to your pipeline early, and making sure there is an automated\ndeployment into the dev environment at the very least as close to the\nbeginning of the project as possible. This means that your pipeline\nshould at least do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run pre-commit checks on the repo for each PR"),(0,r.kt)("li",{parentName:"ul"},"run tests (and possibly output code coverage metrics as well)"),(0,r.kt)("li",{parentName:"ul"},"build a docker image and push it to ECR"),(0,r.kt)("li",{parentName:"ul"},"attempt to deploy the application, usually by updating the ECS task\ndefinition, and if at all possible, ensure that the correct version\ncomes up and stays up, rolling back if it does not")))}h.isMDXComponent=!0}}]);