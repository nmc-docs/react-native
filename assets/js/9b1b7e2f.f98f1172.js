"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},l="S\u1eed d\u1ee5ng custom local font trong React Native",c={unversionedId:"local-font-usage",id:"local-font-usage",title:"S\u1eed d\u1ee5ng custom local font trong React Native",description:"- T\u1ea1o th\u01b0 m\u1ee5c t\xean assets/fonts v\xe0 cho t\u1ea5t c\u1ea3 c\xe1c file font \u0111u\xf4i .otf ho\u1eb7c .ttf v\xe0o folder \u0111\xf3",source:"@site/docs/local-font-usage.md",sourceDirName:".",slug:"/local-font-usage",permalink:"/react-native/local-font-usage",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"S\u1eed d\u1ee5ng SVG Component trong React Native",permalink:"/react-native/svg-component-usage"}},i={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"s\u1eed-d\u1ee5ng-custom-local-font-trong-react-native"},"S\u1eed d\u1ee5ng custom local font trong React Native"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"T\u1ea1o th\u01b0 m\u1ee5c t\xean ",(0,o.kt)("strong",{parentName:"li"},"assets/fonts")," v\xe0 cho t\u1ea5t c\u1ea3 c\xe1c file font \u0111u\xf4i .otf ho\u1eb7c .ttf v\xe0o folder \u0111\xf3")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1708962508312",src:n(430).Z,width:"347",height:"941"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"T\u1ea1o file ",(0,o.kt)("strong",{parentName:"li"},"react"),"-",(0,o.kt)("strong",{parentName:"li"},"native"),".",(0,o.kt)("strong",{parentName:"li"},"config"),".",(0,o.kt)("strong",{parentName:"li"},"js"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  project: {\n    ios: {},\n    android: {},\n  },\n  assets: ["./src/assets/fonts"],\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, ch\u1ea1y l\u1ec7nh sau \u0111\u1ec3 link font v\xe0o project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native-asset\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe0 gi\u1edd ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng font \u0111\xf3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { StyleSheet } from "react-native";\n\nconst styles = StyleSheet.create({\n  title: {\n    fontFamily: "SF-Pro-Display-Ultralight",\n    fontSize: 16,\n  },\n});\n\nexport default styles;\n')))}f.isMDXComponent=!0},430:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1708962508312-99766052f96440c2cc16fef50e8e59b4.png"}}]);