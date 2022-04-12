"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3817],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],c={},l="ACM in GovCloud",s={unversionedId:"infrasec/aws/govcloud/gov-acm",id:"infrasec/aws/govcloud/gov-acm",title:"ACM in GovCloud",description:"AWS Certificate Manager (ACM) is our preferred way to handle certificates",source:"@site/docs/infrasec/aws/govcloud/gov-acm.md",sourceDirName:"infrasec/aws/govcloud",slug:"/infrasec/aws/govcloud/gov-acm",permalink:"/docs/infrasec/aws/govcloud/gov-acm",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/aws/govcloud/gov-acm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working in GovCloud",permalink:"/docs/infrasec/aws/govcloud/"},next:{title:"Setting Up a GovCloud Organization",permalink:"/docs/infrasec/aws/govcloud/gov-orgs"}},u={},m=[{value:"The problem: ACM DNS validation",id:"the-problem-acm-dns-validation",level:2},{value:"The solution: step-by-step creation",id:"the-solution-step-by-step-creation",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"acm-in-govcloud"},"ACM in GovCloud"),(0,o.kt)("p",null,"AWS Certificate Manager (ACM) is our preferred way to handle certificates\nin AWS whenever possible. Unfortunately, due to the fact that Route53\ncannot create public DNS entries in GovCloud, the modules which create\nACM certificates and validate them with DNS will not work. This means the\nprocess of creating these certificates becomes slightly more complicated."),(0,o.kt)("h2",{id:"the-problem-acm-dns-validation"},"The problem: ACM DNS validation"),(0,o.kt)("p",null,"In both the Truss and ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform-aws-modules")," ACM module, the module\nattempts to create three resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ACM certificate"),(0,o.kt)("li",{parentName:"ul"},"the Route53 DNS entry to validate the certificate"),(0,o.kt)("li",{parentName:"ul"},"the Terraform ",(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html"},(0,o.kt)("inlineCode",{parentName:"a"},"aws_acm_certificate_validation"))," resource")),(0,o.kt)("p",null,"It's important to note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"aws_acm_certificate_validation")," resource\ndoes not actually represent a real AWS resource -- it is an internal\nmechanism Terraform uses to correctly order the creation of resources\ndependent on a valid Terraform certificate. It is ",(0,o.kt)("em",{parentName:"p"},"not required")," to\nactually validate an ACM certificate."),(0,o.kt)("p",null,"However, the problem that the ",(0,o.kt)("inlineCode",{parentName:"p"},"aws_acm_certificate_validation")," resource\nwas designed to solve -- preventing Terraform from trying to use an\ninvalid certificate on another resource, like an ALB -- still exists in\nGovCloud. The ACM certificate resource itself ",(0,o.kt)("em",{parentName:"p"},"cannot be used")," until it\nhas been validated. This means trying to create an ALB using an certificate\nthat has not yet been validated will fail, and in GovCloud, this creates\na timing issue, because we need to create the certificate to get the\nDNS validation information, but we have to create the DNS entry in the\ncommercial organization before we can use it elsewhere in GovCloud."),(0,o.kt)("h2",{id:"the-solution-step-by-step-creation"},"The solution: step-by-step creation"),(0,o.kt)("p",null,"We can solve this by using a step-by-step creation method for our systems\nwhich require ACM certificates. We recommend ",(0,o.kt)("em",{parentName:"p"},"not")," creating these\ncertificates inside modules for your application, but instead providing\nthe certificate as a parameter that resources in your module can use, as\nanything contingent on the successful creation of the certificate will fail\non your first apply of the module if you do include it."),(0,o.kt)("p",null,"To do this, here's some sample code for the creation of the ACM certificate\nin our GovCloud account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_acm_certificate" "acm_myapp" {\n  domain_name       = "myapp.example.com"\n  validation_method = "DNS"\n\n  tags = {\n    Name        = "myapp.example.com"\n    Automation  = "Terraform"\n  }\n\n  lifecycle {\n    create_before_destroy = true\n  }\n}\n\noutput "myapp_cert_validation" {\n  description = "Map of data for myapp cert validation"\n  value       = aws_acm_certificate.acm_myapp.domain_validation_options\n}\n')),(0,o.kt)("p",null,"The output is necessary because this is what will provide us the information\nwe need to create the validation DNS entry in our commercial AWS account. It\nwill look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'testing_cert_validation = [\n  {\n    "domain_name" = "myapp.example.com"\n    "resource_record_name" = "_42ef3fd691a332acfe219f37910eee14.myapp.example.com."\n    "resource_record_type" = "CNAME"\n    "resource_record_value" = "_31d89bcda5baf24c2518526a81f86617.tfmgdnztqk.acm-validations.aws."\n  },\n]\n')),(0,o.kt)("p",null,"We can then take that output and create a DNS entry in our commercial DNS\naccount with this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_route53_record" "myapp_acm_validation" {\n  zone_id = aws_route53_zone.myzone.zone_id\n  name    = "_42ef3fd691a332acfe219f37910eee14.myapp.example.com."\n  type    = "CNAME"\n  records = ["_31d89bcda5baf24c2518526a81f86617.tfmgdnztqk.acm-validations.aws."]\n  ttl     = 60\n}\n')),(0,o.kt)("p",null,"Once this entry has been created, you should be able to use your certificate\non other resources within a minute or two. If you want to confirm that the\ncertificate has been validated, you can run these commands in the GovCloud\naccount:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ aws acm list-certificates\n{\n    "CertificateSummaryList": [\n        {\n            "CertificateArn": "arn:aws:acm:us-west-2:000123456789:certificate/78dca028-1812-4fa5-9c84-b92fdeadbeef",\n            "DomainName": "myapp.example.com"\n        }\n    ]\n}\n\n$ aws acm describe-certificate --certificate-arn "arn:aws:acm:us-west-2:000123456789:certificate/78dca028-1812-4fa5-9c84-b92fdeadbeef"\n{\n    "Certificate": {\n        "CertificateArn": "arn:aws:acm:us-west-2:000123456789:certificate/78dca028-1812-4fa5-9c84-b92fdeadbeef",\n        "DomainName": "myapp.example.com",\n        "SubjectAlternativeNames": [\n            "myapp.example.com"\n        ],\n        "DomainValidationOptions": [\n            {\n                "DomainName": "myapp.example.com",\n                "ValidationDomain": "myapp.example.com",\n                "ValidationStatus": "SUCCESS",\n\n...\n')),(0,o.kt)("p",null,"If your ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationStatus")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", your certificate should be ready to go."))}d.isMDXComponent=!0}}]);