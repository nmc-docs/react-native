"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},l="S\u1eed d\u1ee5ng SVG Component trong React Native",s={unversionedId:"svg-component-usage",id:"svg-component-usage",title:"S\u1eed d\u1ee5ng SVG Component trong React Native",description:"- C\xe0i \u0111\u1eb7t 2 th\u01b0 vi\u1ec7n sau:",source:"@site/docs/svg-component-usage.md",sourceDirName:".",slug:"/svg-component-usage",permalink:"/react-native/svg-component-usage",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"C\xe1ch s\u1eed d\u1ee5ng path alias trong React Native",permalink:"/react-native/alias-import"},next:{title:"S\u1eed d\u1ee5ng custom local font trong React Native",permalink:"/react-native/local-font-usage"}},i={},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"s\u1eed-d\u1ee5ng-svg-component-trong-react-native"},"S\u1eed d\u1ee5ng SVG Component trong React Native"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t 2 th\u01b0 vi\u1ec7n sau:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-svg\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D react-native-svg-transformer\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe0o file ",(0,a.kt)("strong",{parentName:"li"},"metro"),".",(0,a.kt)("strong",{parentName:"li"},"config"),".",(0,a.kt)("strong",{parentName:"li"},"js:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");\n\nconst {\n  resolver: { sourceExts, assetExts },\n} = getDefaultConfig();\n\n/**\n * Metro configuration\n * https://facebook.github.io/metro/docs/configuration\n *\n * @type {import(\'metro-config\').MetroConfig}\n */\nconst config = {\n  transformer: {\n    babelTransformerPath: require.resolve("react-native-svg-transformer"),\n    getTransformOptions: async () => ({\n      transform: {\n        experimentalImportSupport: false,\n        inlineRequires: false,\n      },\n    }),\n  },\n  resolver: {\n    assetExts: assetExts.filter((ext) => ext !== "svg"),\n    sourceExts: [...sourceExts, "svg"],\n  },\n};\n\nmodule.exports = mergeConfig(getDefaultConfig(__dirname), config);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T\u1ea1o file ",(0,a.kt)("strong",{parentName:"li"},"declarations.d.ts")," \u1edf trong th\u01b0 m\u1ee5c g\u1ed1c d\u1ef1 \xe1n:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'declare module "*.png";\ndeclare module "*.svg";\ndeclare module "*.jpeg";\ndeclare module "*.jpg";\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe0 gi\u1edd ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng SVG nh\u01b0 m\u1ed9t component:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import ChevronLeftIcon from "./chevron-left.svg";\n\nexport { ChevronLeftIcon };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<ChevronLeftIcon\n  style={{ marginLeft: 10 }}\n  onPress={() => GlobalNavigation.goBack()}\n/>\n")))}g.isMDXComponent=!0}}]);