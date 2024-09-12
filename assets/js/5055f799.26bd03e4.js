"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[285],{3115:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(4848),r=t(8453);const i={sidebar_position:4},a="C\xe1ch s\u1eed d\u1ee5ng path alias trong React Native",o={id:"alias-import",title:"C\xe1ch s\u1eed d\u1ee5ng path alias trong React Native",description:"- C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n sau:",source:"@site/docs/alias-import.md",sourceDirName:".",slug:"/alias-import",permalink:"/react-native/alias-import",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"S\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng trong React Native",permalink:"/react-native/environment-variables-usage"},next:{title:"S\u1eed d\u1ee5ng SVG Component trong React Native",permalink:"/react-native/svg-component-usage"}},l={},c=[];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"c\xe1ch-s\u1eed-d\u1ee5ng-path-alias-trong-react-native",children:"C\xe1ch s\u1eed d\u1ee5ng path alias trong React Native"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n sau:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install -D babel-plugin-module-resolver\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Trong file ",(0,s.jsx)(e.strong,{children:"babel.config.js"}),":"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'module.exports = {\n  presets: ["module:@react-native/babel-preset"],\n  plugins: [\n    [\n      "module-resolver",\n      {\n        root: ["./src"],\n        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],\n        alias: {\n          "@src": "./src",\n        },\n      },\n    ],\n  ],\n};\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Trong file ",(0,s.jsx)(e.strong,{children:"tsconfig.json"}),":"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'{\n  "compilerOptions": {\n    "target": "esnext",\n    "module": "commonjs",\n    "types": ["react-native", "jest"],\n    "lib": ["es2019", "ES2021.String"],\n    "allowJs": true,\n    "jsx": "react-native",\n    "noEmit": true,\n    "isolatedModules": true,\n    "strict": true,\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "allowSyntheticDefaultImports": true,\n    "forceConsistentCasingInFileNames": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "baseUrl": ".",\n    "paths": {\n      "@src/*": ["./src/*"]\n    }\n  },\n  "exclude": [\n    "node_modules",\n    "babel.config.js",\n    "metro.config.js",\n    "jest.config.js"\n  ]\n}\n\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"V\u1eady l\xe0 \u0111\xe3 xong, v\xe0 gi\u1edd ta c\xf3 th\u1ec3 import path alias nh\u01b0 sau:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'import { ETranslationKey } from "@src/constants/enum";\n'})}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"N\u1ebfu kh\xf4ng ho\u1ea1t \u0111\u1ed9ng, h\xe3y ch\u1ea1y l\u1ea1i app b\u1eb1ng l\u1ec7nh:"}),"\n"]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npx react-native start --reset-cache\n"})})]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);