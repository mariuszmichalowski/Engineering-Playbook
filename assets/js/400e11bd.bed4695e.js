"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1041],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),c=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(m.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(m,".").concat(f)]||p[f]||l[f]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2340:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},assets:function(){return u},toc:function(){return l},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},m="[Terraform](/Engineering-Playbook/docs/infrasec/terraform/) / `terraform import`",c={unversionedId:"infrasec/terraform/terraform-import",id:"infrasec/terraform/terraform-import",title:"[Terraform](README.md) / `terraform import`",description:"If you're adding Terraform to an environment where Terraform was not being",source:"@site/docs/infrasec/terraform/terraform-import.md",sourceDirName:"infrasec/terraform",slug:"/infrasec/terraform/terraform-import",permalink:"/Engineering-Playbook/docs/infrasec/terraform/terraform-import",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/terraform/terraform-import.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Naming conventions for Terraform",permalink:"/Engineering-Playbook/docs/infrasec/terraform/naming"},next:{title:"[Terraform](README.md) / `terraform state mv` in Delicate Circumstances",permalink:"/Engineering-Playbook/docs/infrasec/terraform/terraform-state-mv"}},u={},l=[{value:"A Word of Warning",id:"a-word-of-warning",level:2},{value:"Importing a resource as a raw Terraform resource",id:"importing-a-resource-as-a-raw-terraform-resource",level:2},{value:"Importing a resource as a component of a module",id:"importing-a-resource-as-a-component-of-a-module",level:2},{value:"Resources",id:"resources",level:2}],p={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terraform--terraform-import"},(0,o.kt)("a",{parentName:"h1",href:"/Engineering-Playbook/docs/infrasec/terraform/"},"Terraform")," / ",(0,o.kt)("inlineCode",{parentName:"h1"},"terraform import")),(0,o.kt)("p",null,"If you're adding Terraform to an environment where Terraform was not being\nused, often you'll need to import existing resources into your Terraform\ndeployment so they can be managed with your other Terraformed resources.\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/import/index.html"},"Terraform documentation"),"\ndescribes how to do this and will give you a detailed breakdown of the\ncommand; this page provides a tangible example and tries to explain potential\npitfalls."),(0,o.kt)("h2",{id:"a-word-of-warning"},"A Word of Warning"),(0,o.kt)("p",null,"Remember when importing resources that you may need to import multiple\nresources to get everything that might seem like a single component in\nAWS. If you import an S3 bucket, that does ",(0,o.kt)("em",{parentName:"p"},"not")," import its analytics\nconfiguration, for instance, which is a completely different Terraform\nresource."),(0,o.kt)("h2",{id:"importing-a-resource-as-a-raw-terraform-resource"},"Importing a resource as a raw Terraform resource"),(0,o.kt)("p",null,"In this case, we're going to be importing an existing S3 bucket from AWS\nnamed ",(0,o.kt)("inlineCode",{parentName:"p"},"my-s3-bucket")," into our Terraform deployment as a Terraform\n",(0,o.kt)("inlineCode",{parentName:"p"},"aws_s3_bucket")," resource."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the Terraform code that will describe this resource in your\ninfrastructure. For our example, we would add this to our Terraform\ninfrastructure:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_s3_bucket" "my_s3_bucket" {\n  bucket = "my-s3-bucket"\n\n  tags = {\n    Name        = "My Bucket"\n    Environment = "Dev"\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform import")," in the namespace that file is in to import the\nresource. The ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," command requires two arguments; the ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," and\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ID"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," is the terraform resource we just described, so\n",(0,o.kt)("inlineCode",{parentName:"p"},"aws_s3_bucket.my_s3_bucket")," in the example above. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," depends on\nthe resource we're importing; you can find out at the bottom of the\ndocumentation for that resource in the Terraform docs. You can see in the\ndocs for\n",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket#import"},(0,o.kt)("inlineCode",{parentName:"a"},"aws_s3_bucket")),"\nthat for that resource, it's just the bucket name. So we would run this\ncommand:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ terraform import aws_s3_bucket.my_s3_bucket my-s3-bucket\naws_s3_bucket.my_s3_bucket: Importing from ID "my-s3-bucket"...\naws_s3_bucket.my_s3_bucket: Import prepared!\n  Prepared aws_s3_bucket for import\naws_s3_bucket.my_s3_bucket: Refreshing state... [id=my-s3-bucket]\n\nImport successful!\n\nThe resources that were imported are shown above. These resources are now in\nyour Terraform state and will henceforth be managed by Terraform.\n\nReleasing state lock. This may take a few moments...\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Our resource has been imported. Now if we run a ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan"),", we\ncan see that Terraform has added the bucket to the state:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ terraform plan\n\n...\n\nAn execution plan has been generated and is shown below.\nResource actions are indicated with the following symbols:\n  ~ update in-place\n\nTerraform will perform the following actions:\n\n  # aws_s3_bucket.my_s3_bucket will be updated in-place\n  ~ resource "aws_s3_bucket" "my_s3_bucket" {\n      + acl                         = "private"\n        arn                         = "arn:aws:s3:::my-s3-bucket"\n        bucket                      = "my-s3-bucket"\n        bucket_domain_name          = "my-s3-bucket.s3.amazonaws.com"\n        bucket_regional_domain_name = "my-s3-bucket.s3.us-west-2.amazonaws.com"\n      + force_destroy               = false\n        hosted_zone_id              = "Z3BJ5K6RIION3M"\n        id                          = "my-s3-bucket"\n        region                      = "us-west-2"\n        request_payer               = "BucketOwner"\n      ~ tags                        = {\n          + "Environment" = "Dev"\n            "Name"        = "My Bucket"\n        }\n\n        versioning {\n            enabled    = false\n            mfa_delete = false\n        }\n    }\n\nPlan: 0 to add, 1 to change, 0 to destroy.\n')),(0,o.kt)("p",{parentName:"li"},"Note that it is only changing an existing resource. Also note that the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," tag already existed on the existing bucket, so that will not be\nchanged, but that we're adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," tag to the bucket. To\nmake these changes, we'd run a ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," and then we should have\na clean plan after that. We can then use this resource as if it had\nalways been in Terraform."))),(0,o.kt)("h2",{id:"importing-a-resource-as-a-component-of-a-module"},"Importing a resource as a component of a module"),(0,o.kt)("p",null,"It's also possible to import an existing resource as a component of a\nTerraform module, we just have to change our Terraform code and the\n",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," component of the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform import")," command. So if we wanted\nto use the Truss ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform-aws-s3-private-bucket")," module for our bucket\ninstead of the raw S3 resource, we'd have Terraform code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'module "my_s3_bucket" {\n  source         = "trussworks/s3-private-bucket/aws"\n  bucket         = "my-s3-bucket"\n  logging_bucket = "my-logging-bucket"\n\n  tags = {\n    Name        = "My Bucket"\n    Environment = "Dev"\n  }\n}\n')),(0,o.kt)("p",null,"Then we would run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform import module.my_s3_bucket.aws_s3_bucket.private_bucket my-s3-bucket\n")),(0,o.kt)("p",null,"We're getting that ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," by looking at the code of the module and\nseeing where it is actually defining that resource that we want to import;\nin this case, it's the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/terraform-aws-s3-private-bucket/blob/master/main.tf"},(0,o.kt)("inlineCode",{parentName:"a"},"main.tf")),"\nfile, on this line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_s3_bucket" "private_bucket" {\n  bucket        = local.bucket_id\n  acl           = "private"\n\n...\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/import/index.html"},"Importing Infrastructure"))))}f.isMDXComponent=!0}}]);