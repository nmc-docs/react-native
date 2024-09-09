"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[473],{5154:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var s=i(4848),r=i(8453);const l={sidebar_position:14},a="Build \u1ee9ng d\u1ee5ng",t={id:"build-apk",title:"Build \u1ee9ng d\u1ee5ng",description:"- Ch\u1ea1y b\u1eb1ng quy\u1ec1n admin v\xe0 sau \u0111\xf3 di chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c bin c\u1ee7a JDK:",source:"@site/docs/build-apk.md",sourceDirName:".",slug:"/build-apk",permalink:"/react-native/build-apk",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Thi\u1ebft l\u1eadp \u0111a ng\xf4n ng\u1eef trong React Native",permalink:"/react-native/multiple-language"}},d={},o=[];function c(n){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"build-\u1ee9ng-d\u1ee5ng",children:"Build \u1ee9ng d\u1ee5ng"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ch\u1ea1y b\u1eb1ng quy\u1ec1n admin v\xe0 sau \u0111\xf3 di chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c bin c\u1ee7a JDK:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'cd "C:\\Program Files\\Microsoft\\jdk-17.0.8.7-hotspot\\bin"\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ch\u1ea1y l\u1ec7nh sau:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"L\u1ec7nh tr\xean s\u1ebd y\xeau c\u1ea7u b\u1ea1n thi\u1ebft l\u1eadp m\u1eadt kh\u1ea9u cho key store, h\xe3y ghi nh\u1edb m\u1eadt kh\u1ea9u \u0111\xe3 thi\u1ebft l\u1eadp n\xe0y, c\xe1c th\xf4ng tin c\xf2n l\u1ea1i c\xf3 th\u1ec3 \u0111i\u1ec1n t\xf9y \xfd."}),"\n",(0,s.jsxs)(e.li,{children:["Sau khi l\u1ec7nh tr\xean ch\u1ea1y xong, n\xf3 s\u1ebd t\u1ea1o ra 1 file c\xf3 t\xean: ",(0,s.jsx)(e.strong,{children:"my-upload-key.keystore"})]}),"\n"]})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Di chuy\u1ec3n file ",(0,s.jsx)(e.strong,{children:"my-upload-key.keystore"})," v\xe0o trong th\u01b0 m\u1ee5c ",(0,s.jsx)(e.strong,{children:"android/app"})]}),"\n",(0,s.jsxs)(e.li,{children:["Sau \u0111\xf3, v\xe0o file ",(0,s.jsx)(e.strong,{children:"android/gradle.properties"})," v\xe0 th\xeam d\xf2ng sau v\xe0o cu\u1ed1i:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-gradle",children:"MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore\nMYAPP_UPLOAD_KEY_ALIAS=my-key-alias\nMYAPP_UPLOAD_STORE_PASSWORD=[key_store_password]\nMYAPP_UPLOAD_KEY_PASSWORD=[key_store_password]\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Ti\u1ebfp \u0111\xf3, v\xe0o file ",(0,s.jsx)(e.strong,{children:"android/app/build.gradle"})," v\xe0 th\xeam:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-gradle",children:"...\nandroid {\n    ...\n    defaultConfig { ... }\n    signingConfigs {\n        release {\n            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {\n                storeFile file(MYAPP_UPLOAD_STORE_FILE)\n                storePassword MYAPP_UPLOAD_STORE_PASSWORD\n                keyAlias MYAPP_UPLOAD_KEY_ALIAS\n                keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n            }\n        }\n    }\n    buildTypes {\n        release {\n            ...\n            signingConfig signingConfigs.release\n        }\n    }\n}\n...\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ch\u1ea1y gradlew clean:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd android\n./gradlew clean\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ch\u1ea1y l\u1ec7nh build (v\u1eabn \u1edf trong th\u01b0 m\u1ee5c android):"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"./gradlew assembleRelease\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Sau khi build xong, file APK s\u1ebd n\u1eb1m t\u1ea1i \u0111\u01b0\u1eddng d\u1eabn: ",(0,s.jsx)(e.strong,{children:"android/app/build/outputs/apk/release/app-release.apk"})]}),"\n"]})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>t});var s=i(6540);const r={},l=s.createContext(r);function a(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);