"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1738],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="[CI/CD](/Engineering-Playbook/docs/developing/cicd/) / CircleCI Orbs",c={unversionedId:"developing/cicd/circleci-orbs",id:"developing/cicd/circleci-orbs",title:"[CI/CD](README.md) / CircleCI Orbs",description:'As defined by CircleCI, orbs are "a reusable package of YAML configuration that condenses repeated pieces of config into a single line of code." You can think of them as libraries you can import into the CircleCI configuration.',source:"@site/docs/developing/cicd/circleci-orbs.md",sourceDirName:"developing/cicd",slug:"/developing/cicd/circleci-orbs",permalink:"/Engineering-Playbook/docs/developing/cicd/circleci-orbs",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/cicd/circleci-orbs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Tools and Practice](../README.md) / CI/CD",permalink:"/Engineering-Playbook/docs/developing/cicd/"},next:{title:"[Intro to CI/CD](README.md) / CircleCI Config Patterns",permalink:"/Engineering-Playbook/docs/developing/cicd/circleci-patterns"}},p={},u=[{value:"Concepts",id:"concepts",level:2},{value:"Command",id:"command",level:3},{value:"Job",id:"job",level:3},{value:"Executor",id:"executor",level:3},{value:"Using Orbs",id:"using-orbs",level:2},{value:"Creating Orbs",id:"creating-orbs",level:2},{value:"Requirements",id:"requirements",level:3},{value:"GitHub",id:"github",level:3},{value:"Setting up the orb",id:"setting-up-the-orb",level:3},{value:"Testing",id:"testing",level:3},{value:"Publishing",id:"publishing",level:3}],h={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cicd--circleci-orbs"},(0,o.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/developing/cicd/"},"CI/CD")," / CircleCI Orbs"),(0,o.kt)("p",null,'As defined by CircleCI, orbs are "a reusable package of YAML configuration that condenses repeated pieces of config into a single line of code." You can think of them as libraries you can import into the CircleCI configuration.'),(0,o.kt)("p",null,"There is a ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/"},"registry of CircleCI orbs")," including those created and managed by CircleCI and their partners."),(0,o.kt)("p",null,"We also have published one of our own: ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/orb/trussworks/orb-ecr-image-scan-findings"},"trussworks/orb-ecr-image-scan-findings"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#command"},"Command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#job"},"Job")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#executor"},"Executor")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-orbs"},"Using Orbs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-orbs"},"Creating Orbs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#github"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-the-orb"},"Setting up the orb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#testing"},"Testing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#publishing"},"Publishing"))))),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Before reading the rest of this doc, I recommend reviewing what ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/using-orbs/"},"concepts")," exist with orbs."),(0,o.kt)("p",null,"The following is a quick summary of key concepts"),(0,o.kt)("h3",{id:"command"},"Command"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A step you can use in a job.")),(0,o.kt)("h3",{id:"job"},"Job"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Uses steps and specifies an executor. You can add this directly to a workflow.")),(0,o.kt)("h3",{id:"executor"},"Executor"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The image, shell, machine, etc in which the job's steps will run.")),(0,o.kt)("h2",{id:"using-orbs"},"Using Orbs"),(0,o.kt)("p",null,"Invoking orbs in your CircleCI configuration is a straightforward process."),(0,o.kt)("p",null,"Let's say you would like a CircleCI job to notify a Slack channel. You'll find in the CircleCI orb registry that there is an orb that accomplishes this: ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/orb/circleci/slack"},"circleci/slack"),"."),(0,o.kt)("p",null,"First, make sure your CircleCI configuration ",(0,o.kt)("inlineCode",{parentName:"p"},".circle/config.yml")," uses CircleCI version 2.1 at the top of the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2.1\n")),(0,o.kt)("p",null,"You can then set up a key called ",(0,o.kt)("inlineCode",{parentName:"p"},"orbs")," and provide a list of orbs you would like to use. In this case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"orbs:\n  slack: circleci/slack@3.4.2\n")),(0,o.kt)("p",null,"Looking at the commands within the ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/orb/circleci/slack"},"orb's quick start guide"),", we can see that there's a ",(0,o.kt)("inlineCode",{parentName:"p"},"notify")," command which encapsulates what we want: notifying a Slack channel."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": there's some additional setup that will need be done that I won't cover here (getting a Slack verification token, finding the Slack channel id, and so on)."),(0,o.kt)("p",null,"The setup in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml")," to use the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n  build:\n    docker:\n      - image: < docker image >\n    steps:\n      - checkout\n      - run: < some command >\n      - slack/notify:\n          channel: < channel id >\n          color: "#42e2f4"\n          mentions: < userid >\n          message: < message >\n          webhook: < slack verification token >\n')),(0,o.kt)("p",null,"From then on, every time this CircleCI job runs, a slack notification will appear in the specified channel."),(0,o.kt)("p",null,"Using an orb's jobs versus its commands is slightly different. An example would be using ",(0,o.kt)("inlineCode",{parentName:"p"},"circleci/slack"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"approval-notification")," which notifies a channel of a pending approval through the ",(0,o.kt)("inlineCode",{parentName:"p"},"approval")," command."),(0,o.kt)("p",null,"Instead of adding a step to a job, you add the job to a workflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  your-workflow:\n    jobs:\n      - slack/approval-notification:\n          message: < message >\n          webhook: < slack verification token >\n")),(0,o.kt)("p",null,"For concrete examples of the usage of this orb, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/legendary-waddle-dev/blob/master/.circleci/config.yml"},"legendary-waddle-dev"),"."),(0,o.kt)("h2",{id:"creating-orbs"},"Creating Orbs"),(0,o.kt)("p",null,"Unlike using orbs, the process around creating orbs can be tricky. There's plenty of ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/creating-orbs/"},"documentation")," to go through but I'll provide you a condensed version with some Truss pizzazz."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/orb-author-cli/#configure-the-circleci-cli"},"CircleCI CLI")," is installed and set up on your machine"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install circleci\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have the owner role within the Trussworks GitHub org or can snag some time with someone who is an owner"))),(0,o.kt)("h3",{id:"github"},"GitHub"),(0,o.kt)("p",null,"Your orb's source code needs to be housed somewhere. We'll be using GitHub to start as it's where our organization currently holds internal repositories and our CircleCI namespace is linked to GitHub."),(0,o.kt)("p",null,"A CircleCI orb repository should"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'have the name prefixed with "orb-" (ie. ',(0,o.kt)("inlineCode",{parentName:"li"},"orb-ecr-image-scan-findings"),")"),(0,o.kt)("li",{parentName:"ul"},"add the MIT license"),(0,o.kt)("li",{parentName:"ul"},"be set to public"),(0,o.kt)("li",{parentName:"ul"},"include a README describing what the orb does"),(0,o.kt)("li",{parentName:"ul"},"use pre-commit hooks to check the yaml and lint markdown"),(0,o.kt)("li",{parentName:"ul"},"possess CircleCI configuration for validation")),(0,o.kt)("h3",{id:"setting-up-the-orb"},"Setting up the orb"),(0,o.kt)("p",null,"Now that we have a GitHub repo and a name for our orb, we can create the orb itself."),(0,o.kt)("p",null,"In your terminal, let's reserve the name of the orb via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"circleci orb create trussworks/<name of the orb>\n")),(0,o.kt)("p",null,"Within our GitHub repo, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"orb.yml")," with the following content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2.1\n\ndescription: >\n < explanation of what your orb does >\n\ndisplay:\n    home_url: https://truss.works/\n    source_url: <github repo url>\n\n# these are steps you can add to a job\ncommands:\n    placeholder-command:\n        description: < explanation of what this specific command does >\n        parameters: < optional if you need to pass arguments in>\n            <command parameter one>:\n                type: < type of argument >\n                description: < explanation of what is this argument>\n        steps:\n            - run:\n                command: < the actual logic behind what your orb does>\n\n# the environment the job will run in\nexecutors:\n    < placeholder-executor >:\n        # can use a machine or some other environment\n        docker:\n            - image: < placeholder-image >\n\n# these can be used directly in a workflow\njobs:\n    placeholder-job:\n        description: < explanation of what this specific command does >\n        executor: < placeholder-executor >\n        parameters: < optional if you need to pass arguments in>\n            <parameter one>:\n                type: < type of argument >\n                description: < explanation of what is this argument>\n        steps:\n            - placeholder-command:\n                <command parameter one>: <value of command parameter one>\n")),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"orb.yml")," will always contain at least a command. You can call this command directly in a CircleCI configuration as long as it's listed as a step in a job. The ",(0,o.kt)("a",{parentName:"p",href:"#using-orbs"},"Using Orbs")," section covers this."),(0,o.kt)("p",null,"In addition, you can establish jobs which will use the commands. The use case is to plug the orb's jobs directly in a workflow within a CircleCI configuration instead of listing commands as steps in another job. If your orb is going to have jobs, it must also set up executors. This is so the job can actually execute code in an environment instead of pretending to do something in a void."),(0,o.kt)("p",null,"That said, make changes to this template to suit your needs."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": We've put jobs, commands, and executors in one file but you can actually divide them into their own directories. This is useful if you're anticipating creating more than one of each and letting them have their own yaml file."),(0,o.kt)("p",null,"Before we can test that the orb does what we expect, we need to be able to validate that the configuration is sound and publish a dev version of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"circleci orb validate orb.yml\n")),(0,o.kt)("p",null,"Skipping to publishing also validates the yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"circleci orb publish orb.yml trussworks/<orb name>@dev:first\n")),(0,o.kt)("p",null,"You'll notice we used ",(0,o.kt)("inlineCode",{parentName:"p"},"first")," as part of the version name of this orb since this will be the first version of this orb. The best practices guide on orbs in this ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/orbs-best-practices/#versioning"},"link")," says to use semver. This is pure guesswork since CircleCI is lacking in documentation behind the ",(0,o.kt)("em",{parentName:"p"},"why")," but I suspect the development orb's version tag stated should match the major version it will publish as when the orb has its semantic release. ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"first")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"1.x.x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"second")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"2.x.x"),", and so on."),(0,o.kt)("p",null,"As for ",(0,o.kt)("inlineCode",{parentName:"p"},"@dev"),", this is derived from the ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/orb-author/"},"original documentation")," on how to author and publish orbs. Again I haven't found anything yet on why use this particular naming convention or even if the naming matters at all. There's some examples that use ",(0,o.kt)("inlineCode",{parentName:"p"},"@volatile")," instead but, as said, I don't know the importance or the difference between the two."),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"We have a dev version to test."),(0,o.kt)("p",null,"There's ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/testing-orbs/"},"several approaches for testing"),". The least complicated way would be to test within the orb's repository itself. Another would be to test in another repository."),(0,o.kt)("p",null,"We had to go down the latter route with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/orb-ecr-image-scan-findings/blob/master/orb.yml"},"orb-ecr-image-scan-findings")," as the orb's use was to scan images that were built within a GitHub repository. We used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/trussworks-atlantis-ecs-image/pull/3"},"trussworks-atlantis-ecs-image")," to test the orb."),(0,o.kt)("p",null,"Whether you choose to test in the same repository of the orb or in another, you need to make/modify the CircleCI config. You can make the config through the CircleCI app or creating the directory yourself."),(0,o.kt)("p",null,"Testing from there on will be following along the ",(0,o.kt)("a",{parentName:"p",href:"#using-orbs"},"Using Orbs")," section but with your orb."),(0,o.kt)("h3",{id:"publishing"},"Publishing"),(0,o.kt)("p",null,"You've tested and proven your orb is functional. Congrats, we can publish your orb for real"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"circleci orb publish promote sandbox/hello-world@dev:first major\n")),(0,o.kt)("p",null,"Following ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver guidelines"),", we're incrementing this as a ",(0,o.kt)("inlineCode",{parentName:"p"},"major")," segment as this will be the first time our fully functioning orb will be published."),(0,o.kt)("p",null,"Your orb is officially in the CircleCI orb registry and ready for production!"))}m.isMDXComponent=!0}}]);