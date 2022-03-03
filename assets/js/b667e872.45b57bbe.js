"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1966],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5908:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],a={},l="[CI/CD](/engineering-playbook/docs/developing/cicd/) / CircleCI Utilities",s={unversionedId:"developing/cicd/circleci-utilities",id:"developing/cicd/circleci-utilities",title:"[CI/CD](README.md) / CircleCI Utilities",description:"There are common tasks that may be useful to build into CircleCI commands and jobs to inform more complex build pipeline logic. Since CircleCI does not support orbs designed to return values which can be passed into other commands as parameters, it can be difficult to create reusable orbs for these purposes.",source:"@site/docs/developing/cicd/circleci-utilities.md",sourceDirName:"developing/cicd",slug:"/developing/cicd/circleci-utilities",permalink:"/engineering-playbook/docs/developing/cicd/circleci-utilities",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/cicd/circleci-utilities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Intro to CI/CD](README.md) / CircleCI Config Patterns",permalink:"/engineering-playbook/docs/developing/cicd/circleci-patterns"},next:{title:"[CI/CD](README.md) / Standard Delivery Pipeline",permalink:"/engineering-playbook/docs/developing/cicd/delivery-pipeline"}},u={},p=[{value:"Make Github API Requests",id:"make-github-api-requests",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cicd--circleci-utilities"},(0,o.kt)("a",{parentName:"h1",href:"/engineering-playbook/docs/developing/cicd/"},"CI/CD")," / CircleCI Utilities"),(0,o.kt)("p",null,"There are common tasks that may be useful to build into CircleCI commands and jobs to inform more complex build pipeline logic. Since CircleCI does not support orbs designed to return values which can be passed into other commands as parameters, it can be difficult to create reusable orbs for these purposes."),(0,o.kt)("h2",{id:"make-github-api-requests"},"Make Github API Requests"),(0,o.kt)("p",null,"CircleCI pipelines provide some information about the VCS, but there are scenarios where more information may be required. One way to access more information is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/"},"Github API")," within a job or command."),(0,o.kt)("p",null,"The example below leverages a GET request to get the details of a given PR, specifically extracting the PR's base branch commit SHA. This base SHA combined with the CircleCI-provided pipeline SHA is used to get a list of which files were changed. The output could be used within other steps of a more complex job (e.g. determining what parts of a pipeline should run based on what files were changed)"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"GET Pull Request changed files"),(0,o.kt)("p",null,"References:\n",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/oss/#only-build-pull-requests"},"Only build Pull Requests"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/env-vars/?section=pipelines#built-in-environment-variables"},"Built-in environment variables"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://support.circleci.com/hc/en-us/articles/360047521451-Why-is-CIRCLE-PR-NUMBER-empty-"},"Get PR number from CircleCI pull request build"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/pulls#get-a-pull-request"},"Github API - GET Pull Request API"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-diff"},"git diff")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n  get-pull-request-changes:\n    executor: main\n    steps:\n      - checkout\n      - run:\n          name: "git PR diff"\n          command: |\n            pr_number=${CIRCLE_PULL_REQUEST##*/}\n            base_sha=$( \\\n              curl \\\n              -s \\\n              -H "Accept: application/vnd.github.v3+json" \\\n              https://api.github.com/repos/"${CIRCLE_PROJECT_USERNAME}"/"${CIRCLE_PROJECT_REPONAME}"/pulls/"${pr_number}" \\\n              | jq -r \'.base.sha\'\n            )\n            git diff "$base_sha" "$CIRCLE_SHA1" --name-only\n          environment:\n            TERM: xterm-256color\n'))))}m.isMDXComponent=!0}}]);