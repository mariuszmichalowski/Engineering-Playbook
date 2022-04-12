"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8966],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8642:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={},l="Terratest Guide",c={unversionedId:"infrasec/terraform/terratest",id:"infrasec/terraform/terratest",title:"Terratest Guide",description:"Terratest is a Go framework that is used to test Terraform infrastructure code.",source:"@site/docs/infrasec/terraform/terratest.md",sourceDirName:"infrasec/terraform",slug:"/infrasec/terraform/terratest",permalink:"/docs/infrasec/terraform/terratest",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/terraform/terratest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"`terraform state mv` in Delicate Circumstances",permalink:"/docs/infrasec/terraform/terraform-state-mv"},next:{title:"Tutorials",permalink:"/docs/infrasec/tutorials/"}},u={},m=[{value:"Basic Terratest example of a module",id:"basic-terratest-example-of-a-module",level:2},{value:"Other Examples",id:"other-examples",level:3},{value:"Run manually",id:"run-manually",level:2},{value:"Configure CircleCi to run the tests automatically",id:"configure-circleci-to-run-the-tests-automatically",level:2},{value:"Configure CircleCi Job",id:"configure-circleci-job",level:3},{value:"Update the Key rotator configuration",id:"update-the-key-rotator-configuration",level:3},{value:"Alternative: Configure AWS Keys for the CircleCI project",id:"alternative-configure-aws-keys-for-the-circleci-project",level:3},{value:"Access test metadata stored in CircleCI",id:"access-test-metadata-stored-in-circleci",level:3},{value:"Documentation links",id:"documentation-links",level:2}],p={toc:m};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terratest-guide"},"Terratest Guide"),(0,o.kt)("p",null,"Terratest is a Go framework that is used to test Terraform infrastructure code.\nIt executes the defined Terraform and then validates things you're asserting."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#basic-terratest-example-of-a-module"},"Basic Terratest example of a module"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other-examples"},"Other Examples")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-manually"},"Run manually")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-circleci-to-run-the-tests-automatically"},"Configure CircleCi to run the tests automatically"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-circleci-job"},"Configure CircleCi Job")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#update-the-key-rotator-configuration"},"Update the Key rotator configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#alternative-configure-aws-keys-for-the-circleci-project"},"Alternative: Configure AWS Keys for the CircleCI project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#access-test-metadata-stored-in-circleci"},"Access test metadata stored in CircleCI")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation-links"},"Documentation links"))),(0,o.kt)("h2",{id:"basic-terratest-example-of-a-module"},"Basic Terratest example of a module"),(0,o.kt)("p",null,"The most basic Terratest test you can write brings up an example in your ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory, tears it down, and will only test that it runs.\nWe've got some basics in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-module-template"},"terraform-template-module repo")," so you can see it all in context."),(0,o.kt)("p",null,"Write an example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory that includes the module(s) and configuration that you're testing. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," directory create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform_aws<NAME_OF_MODULE>_test.go"),". Basic test is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package test\n\nimport (\n    "fmt"\n    "strings"\n    "testing"\n\n    "github.com/gruntwork-io/terratest/modules/random"\n    "github.com/gruntwork-io/terratest/modules/terraform"\n    test_structure "github.com/gruntwork-io/terratest/modules/test-structure"\n)\n\nfunc TestTerraformAwsEcrRepo(t *testing.T) {\n    t.Parallel()\n\n    tempTestFolder := test_structure.CopyTerraformFolderToTemp(t, "../", "examples/simple")\n\n    testName := fmt.Sprintf("terratest-%s", strings.ToLower(random.UniqueId()))\n    awsRegion := "us-west-2"\n\n    terraformOptions := &terraform.Options{\n        // The path to where our Terraform code is located\n        TerraformDir: tempTestFolder,\n\n        // Variables to pass to our Terraform code using -var options\n        Vars: map[string]interface{}{\n            "test_name": testName,\n        },\n\n        // Environment variables to set when running Terraform\n        EnvVars: map[string]string{\n            "AWS_DEFAULT_REGION": awsRegion,\n        },\n    }\n\n    defer terraform.Destroy(t, terraformOptions)\n    terraform.InitAndApply(t, terraformOptions)\n\n}\n\n')),(0,o.kt)("h3",{id:"other-examples"},"Other Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/trussworks/terraform-aws-alb-web-containers"},"terraform-aws-alb-web-containers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/trussworks/terraform-aws-ecs-service"},"terrraform-aws-ecs-service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/trussworks/terraform-aws-logs/"},"terraform-aws-logs"))),(0,o.kt)("h2",{id:"run-manually"},"Run manually"),(0,o.kt)("p",null,"To run these tests manually against the ",(0,o.kt)("inlineCode",{parentName:"p"},"trussworks-ci")," AWS account you'll need AWS access in our AWS organization. You'll need help from someone in #infrasec and must follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md#setup-new-iam-user"},"setup instructions"),"."),(0,o.kt)("p",null,"You'll also need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"aws-vault")," and ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"./aws/config")," file is setup correctly."),(0,o.kt)("p",null,"In most of our modules, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"makefile")," that defines ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," so you'll run the following from the root of the repo you're testing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"AWS_VAULT_KEYCHAIN_NAME=login aws-vault exec trussworks-ci -- make test\n")),(0,o.kt)("h2",{id:"configure-circleci-to-run-the-tests-automatically"},"Configure CircleCi to run the tests automatically"),(0,o.kt)("h3",{id:"configure-circleci-job"},"Configure CircleCi Job"),(0,o.kt)("p",null,"Add a job to the ",(0,o.kt)("inlineCode",{parentName:"p"},".circleci/config")," file in the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'terratest:\n    docker:\n    - auth:\n        password: $DOCKER_PASSWORD\n        username: $DOCKER_USERNAME\n      image: *circleci_docker\n      environment:\n        - TEST_RESULTS: /tmp/test-results\n    steps:\n    - checkout\n    - restore_cache:\n        keys:\n        - pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}\n        - go-mod-sources-v1-{{ checksum "go.sum" }}\n    - run:\n        command: |\n          temp_role=$(aws sts assume-role --role-arn arn:aws:iam::313564602749:role/circleci --role-session-name circleci)\n          export AWS_ACCESS_KEY_ID=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)\n          export AWS_SECRET_ACCESS_KEY=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)\n          export AWS_SESSION_TOKEN=$(echo $temp_role | jq .Credentials.SessionToken | xargs)\n          make test\n        name: Assume role, run pre-commit and run terratest\n    - save_cache:\n        key: pre-commit-dot-cache-{{ checksum ".pre-commit-config.yaml" }}\n        paths:\n        - ~/.cache/pre-commit\n    - save_cache:\n        key: go-mod-sources-v1-{{ checksum "go.sum" }}\n        paths:\n        - ~/go/pkg/mod\n    - store_test_results:\n        path: /tmp/test-results/gotest\n')),(0,o.kt)("p",null,"You'll either create a new workflow or add this job to an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," definition to be run on every commit/push etc."),(0,o.kt)("h3",{id:"update-the-key-rotator-configuration"},"Update the Key rotator configuration"),(0,o.kt)("p",null,"We have automation in place that updates the AWS Access Keys used by CircleCI daily so you'll need to add this repo to rotator configuration if it is running Terratests against the trussworks-ci AWS account ."),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate.yaml")," file in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/legendary-waddle"},"Legendary Waddle")," to include a sink to your new repo. A sink stanza looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      - kind: CircleCI\n        key_to_name:\n          accessKeyId: AWS_ACCESS_KEY_ID\n          secretAccessKey: AWS_SECRET_ACCESS_KEY\n        account: trussworks\n        repo: <REPO NAME>\n")),(0,o.kt)("p",null,"You can run the rotator script manually in your local environment to populate the keys to your repository. To do so, you will need a personal API token set up in a ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.local")," file in your local environment. See the ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/managing-api-tokens/"},"CircleCI Documentation")," on creating a personal API token."),(0,o.kt)("p",null,"Rotate the keys via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aws-vault exec trussworks-id -- rotator rotate -f ./rotate.yaml -y\n")),(0,o.kt)("p",null,"Instructions to install rotator can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chanzuckerberg/rotator"},"here"),"."),(0,o.kt)("h3",{id:"alternative-configure-aws-keys-for-the-circleci-project"},"Alternative: Configure AWS Keys for the CircleCI project"),(0,o.kt)("p",null,"These tests are running as the ",(0,o.kt)("inlineCode",{parentName:"p"},"circleci")," user account configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"trussworks-id")," account."),(0,o.kt)("p",null,"To add the access keys go to the project settings page ",(0,o.kt)("inlineCode",{parentName:"p"},"https://circleci.com/gh/trussworks/<PROJECT NAME>/edit#env-vars"),".\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," to the current values.\nThese keys are rotated daily."),(0,o.kt)("h3",{id:"access-test-metadata-stored-in-circleci"},"Access test metadata stored in CircleCI"),(0,o.kt)("p",null,"In order to access the test metadata we stored in the ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/collect-test-data/"},(0,o.kt)("inlineCode",{parentName:"a"},"store_test_results"))," key of our ",(0,o.kt)("inlineCode",{parentName:"p"},".circleci/config")," test environment, we'll need to make a few tweaks. This will allow us luxuries such as pinpointing flaky tests that cause intermittent failures."),(0,o.kt)("p",null,"Since CircleCI only reads metadata in xml format, first we need to convert our ",(0,o.kt)("inlineCode",{parentName:"p"},"go test output")," into a file CircleCI can read. We'll use package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jstemmer/go-junit-report"},(0,o.kt)("inlineCode",{parentName:"a"},"go-junit-report")),". Add a bash script like so, following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jstemmer/go-junit-report/blob/master/README.md"},"usage directions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nset -eu -o pipefail\n\ngo_test_output="/tmp/go-test.out"\n\ngo test -short -count 1 -v -timeout 90m github.com/trussworks/terraform-aws-logs/test/... | tee "${go_test_output}"\n\n# Check if we are running tests inside of CircleCI by checking for a $CIRCLECI\n# environment variable. The dash after $CIRCLECI substitutes a null value if\n# CIRCLECI is unset. This prevents unbound variable errors\nif [[ -n ${CIRCLECI-} ]]; then\n    mkdir -p "${TEST_RESULTS}"/gotest\n    go-junit-report < "${go_test_output}" \\\n                    > "${TEST_RESULTS}/gotest/go-test-report.xml"\nfi\n')),(0,o.kt)("p",null,"Save this script with a filename like ",(0,o.kt)("inlineCode",{parentName:"p"},"make-test")," and make it executable using ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x make-test"),". Now we'll add a call to the executable in our Makefile like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".PHONY: test\ntest: bin/make-test\n")),(0,o.kt)("p",null,"Finally we update our ",(0,o.kt)("inlineCode",{parentName:"p"},".circleci/config")," by adding two steps prior to running terratest - one to ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," the package and another to access our shiny new executable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    - run:\n        name: Adding go binaries to $PATH\n        command: |\n          echo 'export PATH=${PATH}:~/go/bin' >> $BASH_ENV\n          source $BASH_ENV\n    - run: go get github.com/jstemmer/go-junit-report\n")),(0,o.kt)("p",null,"Now we should be able to see both the tests and artifacts tabs in our CircleCI pipeline:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CircleCI Tabs",src:r(2808).Z,title:"CircleCI Tabs",width:"491",height:"250"})),(0,o.kt)("h2",{id:"documentation-links"},"Documentation links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gruntwork-io/terratest"},"Terratest repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://terratest.gruntwork.io/docs/"},"Official Terratest Documentation"))))}d.isMDXComponent=!0},2808:function(e,t,r){t.Z=r.p+"assets/images/circleci_tabs-e8b1e17ad53388fc9af3b998764d2bfa.png"}}]);