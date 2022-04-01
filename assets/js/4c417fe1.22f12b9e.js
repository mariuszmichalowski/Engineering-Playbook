"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1771],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6296:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},c="[AWS](/Engineering-Playbook/docs/infrasec/aws/) / AWS Organizations",l={unversionedId:"infrasec/aws/aws-organizations",id:"infrasec/aws/aws-organizations",title:"[AWS](README.md) / AWS Organizations",description:"AWS Organizations",source:"@site/docs/infrasec/aws/aws-organizations.md",sourceDirName:"infrasec/aws",slug:"/infrasec/aws/aws-organizations",permalink:"/Engineering-Playbook/docs/infrasec/aws/aws-organizations",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/aws-organizations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](../README.md) / AWS",permalink:"/Engineering-Playbook/docs/infrasec/aws/"},next:{title:"[AWS](../README.md) / Working in GovCloud",permalink:"/Engineering-Playbook/docs/infrasec/aws/govcloud/"}},u={},p=[{value:"Truss Patterns",id:"truss-patterns",level:2},{value:"The Organization Root Account",id:"the-organization-root-account",level:3},{value:"The ID Account",id:"the-id-account",level:3},{value:"The Infra Account",id:"the-infra-account",level:3},{value:"Other Accounts",id:"other-accounts",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"External links",id:"external-links",level:2}],h={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws--aws-organizations"},(0,o.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/infrasec/aws/"},"AWS")," / AWS Organizations"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html"},"AWS Organizations"),"\nprovide a native way to manage multiple AWS accounts.  They provide\nconsolidated billing, APIs (e.g., via Terraform) for automating account\ncreation, and the ability to apply account-wide IAM like policies."),(0,o.kt)("p",null,"As security best practices prefer account boundaries over IAM policies\nas a way to limit resource access, AWS Organizations are becoming a\nstandard part of any AWS deployment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#truss-patterns"},"Truss Patterns"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-organization-root-account"},"The Organization Root Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-id-account"},"The ID Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-infra-account"},"The Infra Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other-accounts"},"Other Accounts")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#best-practices"},"Best Practices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#external-links"},"External links"))),(0,o.kt)("h2",{id:"truss-patterns"},"Truss Patterns"),(0,o.kt)("p",null,"As Truss has begun adopting AWS Organizations for most of our new\nprojects, we have developed a number of patterns for organizations.\nFor a more thorough description of the process of bootstrapping a\nnew AWS Organization, see the ",(0,o.kt)("a",{parentName:"p",href:"/Engineering-Playbook/docs/infrasec/aws/org-bootstrap"},"Bootstrapping an AWS\nOrganization")," document, but below is a brief\ndescription of the patterns we've adopted."),(0,o.kt)("h3",{id:"the-organization-root-account"},"The Organization Root Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pick a standard prefix you can use for all the accounts in your\norganization; for our example we'll use ",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats"),"."),(0,o.kt)("li",{parentName:"ul"},'The first account you should create is the "org-root" account for the\norganization, which is where you will configure organization-wide\nresources. We call this the "org-root" account and name it like\n',(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-org-root"),". ",(0,o.kt)("em",{parentName:"li"},"This account should not be used for anything\nelse -- no application should use resources from this account.")),(0,o.kt)("li",{parentName:"ul"},"There should be as few users with IAM access to the ",(0,o.kt)("inlineCode",{parentName:"li"},"org-root"),'\naccount as possible; generally only infrastructure engineers and\nan "owner" from the client. Their IAM users in this account should\nbe suffixed with ',(0,o.kt)("inlineCode",{parentName:"li"},".org-root")," in order to distinguish them from\nIAM users in other accounts (such as ",(0,o.kt)("inlineCode",{parentName:"li"},"alice.org-root"),")."),(0,o.kt)("li",{parentName:"ul"},"You can use the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/trussworks/terraform-aws-org-scp"},(0,o.kt)("inlineCode",{parentName:"a"},"terraform-aws-org-scp")),"\nmodule to get a base set of ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html"},"Service Control\nPolicies"),"\nto apply to OUs created in this account."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"suspended")," OU for the organization in this account which\nyou can place accounts into if you think they have been compromised\nor are exhibiting strange behavior. It can also be used for dummy\naccounts for ",(0,o.kt)("a",{parentName:"li",href:"/Engineering-Playbook/docs/infrasec/aws/govcloud/"},"GovCloud")," deployments."),(0,o.kt)("li",{parentName:"ul"},"To bootstrap other accounts, you can define them here with the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/providers/aws/r/organizations_account.html"},(0,o.kt)("inlineCode",{parentName:"a"},"aws_organizations_account")),"\nTerraform resource. Once they are created, you can access them using\nIAM users in this account by assuming the\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html"},(0,o.kt)("inlineCode",{parentName:"a"},"OrganizationAccountAccessRole")),"\nin the subsidiary accounts."),(0,o.kt)("li",{parentName:"ul"},"You can create a ",(0,o.kt)("inlineCode",{parentName:"li"},"billing")," role in this account that can be assumed by\nproduct or delivery managers (with their accounts in the ID account)\nto give them access to billing information ",(0,o.kt)("em",{parentName:"li"},"without")," giving them access\nto this account directly."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," password for this account should be reset each time an admin\nleaves the project or at least once every six months, just to ensure\nthat it is not leaked.")),(0,o.kt)("h3",{id:"the-id-account"},"The ID Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The second account you create should be the ID account. This account\nwill be used to define the IAM users and groups that people will use\non a day-to-day basis. We name this like ",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-id"),"."),(0,o.kt)("li",{parentName:"ul"},"When creating this account, be sure to set the ",(0,o.kt)("inlineCode",{parentName:"li"},"iam_user_access_to_billing"),"\nparameter for the account to ",(0,o.kt)("inlineCode",{parentName:"li"},"ALLOW")," (all other accounts should have\nthis set to ",(0,o.kt)("inlineCode",{parentName:"li"},"DENY"),"). Doing by doing this, we can allow users to see the\nbilling data without having to give them direct access to the ",(0,o.kt)("inlineCode",{parentName:"li"},"org-root"),"\naccount. ",(0,o.kt)("em",{parentName:"li"},"This cannot be changed once the account is created, so be sure\nto do it now.")),(0,o.kt)("li",{parentName:"ul"},"To access other accounts, we assign group policies which allow direct role assumption.\nWe use ",(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/trussworks/iam-user-group/aws/1.0.2"},(0,o.kt)("inlineCode",{parentName:"a"},"iam-user-group"))," and ",(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/trussworks/iam-cross-acct-dest/aws"},(0,o.kt)("inlineCode",{parentName:"a"},"iam-cross-acct-dest"))," modules to do this; see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/trussworks/terraform-layout-example"},(0,o.kt)("inlineCode",{parentName:"a"},"terraform-layout-example"))," for how we use them."),(0,o.kt)("li",{parentName:"ul"},"Like the ",(0,o.kt)("inlineCode",{parentName:"li"},"org-root")," account, other than the IAM users and groups, we\nshould avoid putting any other resources in this account.")),(0,o.kt)("h3",{id:"the-infra-account"},"The Infra Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You will probably also need an infra account for your organization.\nThis account will contain resources that are organization-wide but are\nonly used to handle infrastructure concerns. We name this account like\n",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-infra"),"."),(0,o.kt)("li",{parentName:"ul"},"Examples of resources appropriate for this account might be an Atlantis\ndeployment for the organization or DNS for your root domain."),(0,o.kt)("li",{parentName:"ul"},"If you define the root domain here (say, ",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats.com"),"), we can then\ndelegate subdomains (like ",(0,o.kt)("inlineCode",{parentName:"li"},"dev.spacecats.com"),") to other accounts, which\nallows application engineers to define new DNS entries in dev or sandbox\naccounts without giving them access to other DNS resources.")),(0,o.kt)("h3",{id:"other-accounts"},"Other Accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Other than the above accounts, the organization structure is relatively\nfreeform, or at least flexible."),(0,o.kt)("li",{parentName:"ul"},'Remember that accounts are essentially "free" in terms of monetary cost,\nat least. This means we can use them to segregate resources based on\naccess. On some projects, placing each environment into a different\naccount makes perfect sense; on others, we might only want production\nto be in a separate account.')),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"These are the best practices gleaned from online resources and our\nexperiences on various projects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the email address for each of your accounts, create an infrastructure\nalias (like ",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-infra@truss.works"),") and then for each AWS account,\nset the email address to be that alias, with a ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," suffix for each\naccount, so you can identify where these emails came from. For instance,\nwe might make the email address for ",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-org-root")," to be\n",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-infra+aws-org-root@truss.works"),", the one for the ID account\nto be ",(0,o.kt)("inlineCode",{parentName:"li"},"spacecats-infra+aws-org-id@truss.works"),", etc. This email will be\nwhere support responses and other notifications about your AWS accounts\nwill be sent."),(0,o.kt)("li",{parentName:"ul"},"As stated above, ",(0,o.kt)("em",{parentName:"li"},"severely limit access to the org-root account.")," This\naccount provides access to everything else in the organization, and\nas a result poses a significant security risk if compromised. Use IAM\nroles and the ID account to provide granular access to resources."),(0,o.kt)("li",{parentName:"ul"},"Pick whether your SCPs will be whitelists or blacklists; avoid mixing:\nunderstanding what happens when a whitelist SCP inherits a blacklist\nSCP (or vice versa) is too complicated.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prefer blacklists as these allow folks to experiment with new\nservices \u2014\xa0staying out of the way of engineers."),(0,o.kt)("li",{parentName:"ul"},"Use whitelists for larger organizations operating in high compliance\nenvironments. For example, this could let a large health care company\nonly allow access to HIPAA approved services. Whitelists require more\nmaintenance as new services need to get manually added to the whitelist\nas they are approved."))),(0,o.kt)("li",{parentName:"ul"},"Create a top-level OU that everything else is under. This makes it easy\nto apply policies across all accounts (e.g., enforce encrypted data).")),(0,o.kt)("h2",{id:"external-links"},"External links"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZKpkF17d0Oo"},"How Capital One Applies AWS Organizations Best Practices")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/slalom-engineering/aws-multi-account-architecture-with-terraform-yeoman-and-jenkins-7fd42ddcdda8"},"AWS Multi-Account Architecture with Terraform, Yeoman, and Jenkins")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.slideshare.net/AmazonWebServices/wrangling-multiple-aws-accounts-with-aws-organizations"},"Wrangling Multiple AWS Accounts with AWS Organizations"))))}m.isMDXComponent=!0}}]);