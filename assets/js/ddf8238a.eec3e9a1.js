"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7989],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),y=o,g=f["".concat(s,".").concat(y)]||f[y]||p[y]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return y}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={},s="Single Sign-On",c={unversionedId:"infrasec/tutorials/yubikey-sso",id:"infrasec/tutorials/yubikey-sso",title:"Single Sign-On",description:"Integrating with your GSuite account",source:"@site/docs/infrasec/tutorials/yubikey-sso.md",sourceDirName:"infrasec/tutorials",slug:"/infrasec/tutorials/yubikey-sso",permalink:"/engineering-playbook/docs/infrasec/tutorials/yubikey-sso",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/tutorials/yubikey-sso.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[InfraSec](../README.md) / YubiKey Configuration Guide",permalink:"/engineering-playbook/docs/infrasec/tutorials/yubikey-configuration"},next:{title:"[Engineering Playbook](../README.md) / Leadership",permalink:"/engineering-playbook/docs/leadership/"}},l={},p=[{value:"Integrating with your GSuite account",id:"integrating-with-your-gsuite-account",level:2}],f={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-sign-on"},"Single Sign-On"),(0,i.kt)("h2",{id:"integrating-with-your-gsuite-account"},"Integrating with your GSuite account"),(0,i.kt)("p",null,"Truss GSuite administrators are required to enable security keys on their accounts. Configurations require modern versions of Safari, Chrome or Firefox. You can follow ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/6103523?co=GENIE.Platform%3DDesktop&hl=en"},"Google\u2019s instructions")," on getting it setup."),(0,i.kt)("p",null,"Non-admin Gsuite accounts are not currently required to use security keys for 2fa, but folks are starting to adopt Yubikeys as many of the usability/compatibility issues have been resolved."))}y.isMDXComponent=!0}}]);