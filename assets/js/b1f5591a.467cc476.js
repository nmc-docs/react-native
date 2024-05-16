"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[588],{3905:(t,n,e)=>{e.d(n,{Zo:()=>h,kt:()=>u});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=a.createContext({}),p=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},h=function(t){var n=p(t.components);return a.createElement(c.Provider,{value:n},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),s=p(e),m=i,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return e?a.createElement(u,l(l({ref:n},h),{},{components:e})):a.createElement(u,l({ref:n},h))}));function u(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var r=e.length,l=new Array(r);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=t,o[s]="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=e[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7515:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=e(7462),i=(e(7294),e(3905));const r={sidebar_position:2},l="Setup project React Native ch\u1ea1y tr\xean thi\u1ebft b\u1ecb Android th\u1eadt",o={unversionedId:"react-native-setup",id:"react-native-setup",title:"Setup project React Native ch\u1ea1y tr\xean thi\u1ebft b\u1ecb Android th\u1eadt",description:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng cho React native",source:"@site/docs/react-native-setup.md",sourceDirName:".",slug:"/react-native-setup",permalink:"/react-native/react-native-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u v\u1ec1 React Native",permalink:"/react-native/"},next:{title:"S\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng trong React Native",permalink:"/react-native/environment-variables-usage"}},c={},p=[{value:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng cho React native",id:"c\xe0i-\u0111\u1eb7t-m\xf4i-tr\u01b0\u1eddng-cho-react-native",level:2},{value:"<strong>B\u01b0\u1edbc 1: C\xe0i \u0111\u1eb7t JDK</strong>",id:"b\u01b0\u1edbc-1-c\xe0i-\u0111\u1eb7t-jdk",level:3},{value:"B\u01b0\u1edbc 2: C\xe0i \u0111\u1eb7t Android SDK",id:"b\u01b0\u1edbc-2-c\xe0i-\u0111\u1eb7t-android-sdk",level:3},{value:"B\u01b0\u1edbc 3: Th\xeam bi\u1ebfn m\xf4i tr\u01b0\u1eddng Android",id:"b\u01b0\u1edbc-3-th\xeam-bi\u1ebfn-m\xf4i-tr\u01b0\u1eddng-android",level:3},{value:"Thi\u1ebft l\u1eadp k\u1ebft n\u1ed1i gi\u1eefa laptop v\xe0 thi\u1ebft b\u1ecb Android th\u1eadt",id:"thi\u1ebft-l\u1eadp-k\u1ebft-n\u1ed1i-gi\u1eefa-laptop-v\xe0-thi\u1ebft-b\u1ecb-android-th\u1eadt",level:2},{value:"Thi\u1ebft l\u1eadp tr\xean thi\u1ebft b\u1ecb Android",id:"thi\u1ebft-l\u1eadp-tr\xean-thi\u1ebft-b\u1ecb-android",level:3},{value:"Tr\xean PC ho\u1eb7c laptop",id:"tr\xean-pc-ho\u1eb7c-laptop",level:3},{value:"Kh\u1edfi t\u1ea1o project React native",id:"kh\u1edfi-t\u1ea1o-project-react-native",level:2},{value:"K\u1ebft n\u1ed1i Laptop/PC v\u1edbi thi\u1ebft b\u1ecb Android kh\xf4ng d\xe2y",id:"k\u1ebft-n\u1ed1i-laptoppc-v\u1edbi-thi\u1ebft-b\u1ecb-android-kh\xf4ng-d\xe2y",level:2},{value:"Tr\xean thi\u1ebft b\u1ecb Android",id:"tr\xean-thi\u1ebft-b\u1ecb-android",level:3},{value:"Tr\xean Laptop/PC",id:"tr\xean-laptoppc",level:3}],h={toc:p},s="wrapper";function d(t){let{components:n,...r}=t;return(0,i.kt)(s,(0,a.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-project-react-native-ch\u1ea1y-tr\xean-thi\u1ebft-b\u1ecb-android-th\u1eadt"},"Setup project React Native ch\u1ea1y tr\xean thi\u1ebft b\u1ecb Android th\u1eadt"),(0,i.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-m\xf4i-tr\u01b0\u1eddng-cho-react-native"},"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng cho React native"),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-1-c\xe0i-\u0111\u1eb7t-jdk"},(0,i.kt)("strong",{parentName:"h3"},"B\u01b0\u1edbc 1: C\xe0i \u0111\u1eb7t JDK")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\u1edf Window Powershell v\u1edbi quy\u1ec1n Administrator v\xe0 c\xe0i \u0111\u1eb7t JDK th\xf4ng qua Chocolatey (Xem c\xe1ch c\xe0i \u0111\u1eb7t Chocolatey ",(0,i.kt)("a",{parentName:"li",href:"https://chocolatey.org/install#individual-method"},"t\u1ea1i \u0111\xe2y"),"):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"choco install -y microsoft-openjdk17\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau khi c\xe0i \u0111\u1eb7t, \u0111\u1ec3 ki\u1ec3m tra xem c\xe0i \u0111\u1eb7t th\xe0nh c\xf4ng hay ch\u01b0a, ta g\xf5:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"javac --version\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702886692043",src:e(1857).Z,width:"460",height:"126"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-2-c\xe0i-\u0111\u1eb7t-android-sdk"},"B\u01b0\u1edbc 2: C\xe0i \u0111\u1eb7t Android SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"T\u1ea3i file zip SDK Tools Package: ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio#command-line-tools-only"},"t\u1ea1i \u0111\xe2y")),(0,i.kt)("li",{parentName:"ul"},"Sau khi t\u1ea3i v\u1ec1 v\xe0 gi\u1ea3i n\xe9n ra, ta s\u1ebd th\u1ea5y b\xean trong c\xf3 m\u1ed9t th\u01b0 m\u1ee5c t\xean ",(0,i.kt)("strong",{parentName:"li"},"cmdline-tools")),(0,i.kt)("li",{parentName:"ul"},"Sau \u0111\xf3, ta v\xe0o \u0111\u01b0\u1eddng d\u1eabn: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\MINH CHI\\AppData\\Local")," v\xe0 t\u1ea1o m\u1ed9t th\u01b0 m\u1ee5c m\u1edbi t\xean ",(0,i.kt)("strong",{parentName:"li"},"android-sdk")),(0,i.kt)("li",{parentName:"ul"},"Copy th\u01b0 m\u1ee5c ",(0,i.kt)("strong",{parentName:"li"},"cmdline-tools")," v\xe0o b\xean trong th\u01b0 m\u1ee5c ",(0,i.kt)("strong",{parentName:"li"},"android-sdk")," v\u1eeba m\u1edbi t\u1ea1o")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702887319759",src:e(924).Z,width:"863",height:"227"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"B\xean trong th\u01b0 m\u1ee5c ",(0,i.kt)("strong",{parentName:"li"},"cmdline-tools"),", t\u1ea1o m\u1ed9t th\u01b0 m\u1ee5c m\u1edbi t\xean ",(0,i.kt)("strong",{parentName:"li"},"tools")," v\xe0 di chuy\u1ec3n c\xe1c file v\xe0 folder c\xf2n l\u1ea1i v\xe0o th\u01b0 m\u1ee5c ",(0,i.kt)("strong",{parentName:"li"},"tools")," \u0111\xf3.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702887643155",src:e(6934).Z,width:"839",height:"338"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\u1edf cmd l\xean v\xe0 di chuy\u1ec3n t\u1edbi \u0111\u01b0\u1eddng d\u1eabn: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\MINH CHI\\AppData\\Local\\android-sdk\\cmdline-tools\\tools\\bin")),(0,i.kt)("li",{parentName:"ul"},"G\xf5 l\u1ec7nh sau:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sdkmanager "platform-tools" "platforms;android-34"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau khi \u0111\xe3 c\xe0i \u0111\u1eb7t th\xe0nh c\xf4ng, ta s\u1ebd th\u1ea5y c\xf3 2 th\u01b0 m\u1ee5c ",(0,i.kt)("strong",{parentName:"li"},"platforms")," v\xe0 ",(0,i.kt)("strong",{parentName:"li"},"platform-tools")," nh\u01b0 h\xecnh b\xean d\u01b0\u1edbi:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702887857783",src:e(1512).Z,width:"858",height:"394"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, v\u1eabn t\u1ea1i \u0111\u01b0\u1eddng d\u1eabn ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\MINH CHI\\AppData\\Local\\android-sdk\\cmdline-tools\\tools\\bin"),', ta g\xf5 l\u1ec7nh sau v\xe0 sau \u0111\xf3 g\xf5 "y" cho \u0111\u1ebfn h\u1ebft \u0111\u1ec3 accepted t\u1ea5t c\u1ea3 c\xe1c SDK Package Licenses:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sdkmanager --licenses\n")),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-3-th\xeam-bi\u1ebfn-m\xf4i-tr\u01b0\u1eddng-android"},"B\u01b0\u1edbc 3: Th\xeam bi\u1ebfn m\xf4i tr\u01b0\u1eddng Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ta t\u1ea1o bi\u1ebfn System t\xean ",(0,i.kt)("strong",{parentName:"li"},"ANDROID_HOME")," v\u1edbi \u0111\u01b0\u1eddng d\u1eabn: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\MINH CHI\\AppData\\Local\\android-sdk"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702888315578",src:e(6956).Z,width:"742",height:"409"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau \u0111\xf3 th\xeam \u0111\u01b0\u1eddng d\u1eabn ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\MINH CHI\\AppData\\Local\\android-sdk\\platform-tools")," l\xe0m bi\u1ebfn m\xf4i tr\u01b0\u1eddng b\xean trong Path:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702888416185",src:e(8747).Z,width:"702",height:"662"})),(0,i.kt)("h2",{id:"thi\u1ebft-l\u1eadp-k\u1ebft-n\u1ed1i-gi\u1eefa-laptop-v\xe0-thi\u1ebft-b\u1ecb-android-th\u1eadt"},"Thi\u1ebft l\u1eadp k\u1ebft n\u1ed1i gi\u1eefa laptop v\xe0 thi\u1ebft b\u1ecb Android th\u1eadt"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Ta s\u1ebd k\u1ebft n\u1ed1i thi\u1ebft b\u1ecb Android th\xf4ng qua d\xe2y c\xe1p USB v\xe0 ScrcPy."),(0,i.kt)("li",{parentName:"ul"},"Xem th\xeam: C\xe1ch k\u1ebft n\u1ed1i Laptop/PC v\u1edbi thi\u1ebft b\u1ecb Android th\xf4ng qua Wifi (k\u1ebft n\u1ed1i kh\xf4ng c\u1ea7n d\xf9ng d\xe2y c\xe1p USB) \u1edf b\xean d\u01b0\u1edbi."))),(0,i.kt)("h3",{id:"thi\u1ebft-l\u1eadp-tr\xean-thi\u1ebft-b\u1ecb-android"},"Thi\u1ebft l\u1eadp tr\xean thi\u1ebft b\u1ecb Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tr\xean \u0111i\u1ec7n tho\u1ea1i, v\xe0o ",(0,i.kt)("strong",{parentName:"li"},"C\xe0i \u0111\u1eb7t")," -> ",(0,i.kt)("strong",{parentName:"li"},"Gi\u1edbi thi\u1ec7u \u0111i\u1ec7n tho\u1ea1i")," v\xe0 nh\u1ea5n li\xean t\u1ee5c v\xe0o phi\xean b\u1ea3n m\xe1y \u0111\u1ec3 m\u1edf ch\u1ebf \u0111\u1ed9 nh\xe0 ph\xe1t tri\u1ec3n:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702889384880",src:e(1568).Z,width:"224",height:"512"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, v\xe0o ",(0,i.kt)("strong",{parentName:"li"},"C\xe0i \u0111\u1eb7t")," -> ",(0,i.kt)("strong",{parentName:"li"},"C\xe0i \u0111\u1eb7t b\u1ed5 sung")," -> ",(0,i.kt)("strong",{parentName:"li"},"T\xf9y ch\u1ecdn nh\xe0 ph\xe1t tri\u1ec3n")," v\xe0 b\u1eadt c\xe1c t\xf9y ch\u1ecdn \u1edf d\u01b0\u1edbi. Sau khi b\u1eadt xong c\xe1c t\xf9y ch\u1ecdn \u0111\xf3, ta ph\u1ea3i kh\u1edfi \u0111\u1ed9ng l\u1ea1i m\xe1y \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o n\xf3 ho\u1ea1t \u0111\u1ed9ng.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702889912099",src:e(8478).Z,width:"224",height:"512"})),(0,i.kt)("h3",{id:"tr\xean-pc-ho\u1eb7c-laptop"},"Tr\xean PC ho\u1eb7c laptop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t scrcpy th\xf4ng qua l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"choco install -y scrcpy\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 ki\u1ec3m tra c\xe1c devices hi\u1ec7n \u0111ang k\u1ebft n\u1ed1i v\u1edbi m\xe1y t\xednh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb devices\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702890991806",src:e(2380).Z,width:"482",height:"164"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau \u0111\xf3 chi\u1ebfu m\xe0n h\xecnh \u0111i\u1ec7n tho\u1ea1i l\xean m\xe1y t\xednh b\u1eb1ng l\u1ec7nh sau tr\xean CMD ho\u1eb7c click v\xe0o shortcut c\u1ee7a scrcpy:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scrcpy\n")),(0,i.kt)("h2",{id:"kh\u1edfi-t\u1ea1o-project-react-native"},"Kh\u1edfi t\u1ea1o project React native"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 kh\u1edfi t\u1ea1o project React native:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native@latest init MyFirstRNApp\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau khi kh\u1edfi t\u1ea1o xong project, ta s\u1ebd ch\u1ea1y b\u1eb1ng l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Sau \u0111\xf3 nh\u1ea5n ph\xedm "a" \u0111\u1ec3 n\xf3 ch\u1ea1y tr\xean Android. Qu\xe1 tr\xecnh ch\u1ea1y l\u1ea7n \u0111\u1ea7u c\xf3 th\u1ec3 s\u1ebd h\u01a1i l\xe2u (t\u1ea7m 5 ph\xfat).')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"L\u01b0u \xfd: trong qu\xe1 tr\xecnh ch\u1ea1y, c\xf3 th\u1ec3 thi\u1ebft b\u1ecb Android c\u1ee7a b\u1ea1n s\u1ebd y\xeau c\u1ea7u cho ph\xe9p c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng l\xean m\xe1y, h\xe3y ch\u1ea5p nh\u1eadn \u0111\u1ec3 app c\xf3 th\u1ec3 ch\u1ea1y tr\xean thi\u1ebft b\u1ecb c\u1ee7a b\u1ea1n"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702892496772",src:e(1880).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702893195080",src:e(467).Z,width:"2560",height:"1920"})),(0,i.kt)("h2",{id:"k\u1ebft-n\u1ed1i-laptoppc-v\u1edbi-thi\u1ebft-b\u1ecb-android-kh\xf4ng-d\xe2y"},"K\u1ebft n\u1ed1i Laptop/PC v\u1edbi thi\u1ebft b\u1ecb Android kh\xf4ng d\xe2y"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u1ede tr\xean, ta \u0111\xe3 d\xf9ng d\xe2y c\xe1p USB \u0111\u1ec3 k\u1ebft n\u1ed1i gi\u1eefa Laptop/PC v\xe0 thi\u1ebft b\u1ecb Android. \u1ede ph\u1ea7n n\xe0y, ta s\u1ebd t\xecm hi\u1ec3u c\xe1ch k\u1ebft n\u1ed1i kh\xe1c th\xf4ng qua Wifi.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"V\xec l\xe0 k\u1ebft n\u1ed1i th\xf4ng qua Wifi n\xean h\xe3y \u0111\u1ea3m b\u1ea3o thi\u1ebft b\u1ecb Android v\xe0 Laptop/PC c\u1ee7a b\u1ea1n k\u1ebft n\u1ed1i t\u1edbi c\xf9ng m\u1ed9t wifi"))),(0,i.kt)("h3",{id:"tr\xean-thi\u1ebft-b\u1ecb-android"},"Tr\xean thi\u1ebft b\u1ecb Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"V\xe0o ",(0,i.kt)("strong",{parentName:"li"},"C\xe0i \u0111\u1eb7t")," -> ",(0,i.kt)("strong",{parentName:"li"},"C\xe0i \u0111\u1eb7t b\u1ed5 sung")," -> ",(0,i.kt)("strong",{parentName:"li"},"T\xf9y ch\u1ecdn nh\xe0 ph\xe1t tri\u1ec3n")," -> ",(0,i.kt)("strong",{parentName:"li"},"G\u1ee1 l\u1ed7i kh\xf4ng d\xe2y")," -> B\u1eadt ch\u1ebf \u0111\u1ed9 ",(0,i.kt)("strong",{parentName:"li"},"G\u1ee1 l\u1ed7i kh\xf4ng d\xe2y"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702914515573",src:e(9931).Z,width:"548",height:"637"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"L\u01b0u \xfd: H\xe3y \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea1n v\u1eabn b\u1eadt 3 t\xf9y ch\u1ecdn: ",(0,i.kt)("strong",{parentName:"li"},"G\u1ee1 l\u1ed7i USB"),", ",(0,i.kt)("strong",{parentName:"li"},"C\xe0i \u0111\u1eb7t qua USB")," v\xe0 ",(0,i.kt)("strong",{parentName:"li"},"G\u1ee1 l\u1ed7i USB (C\xe0i \u0111\u1eb7t b\u1ea3o m\u1eadt)")," nh\u01b0 \u1ea3nh tr\xean"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ti\u1ebfp \u0111\xf3, ch\u1ecdn ",(0,i.kt)("strong",{parentName:"li"},"Gh\xe9p n\u1ed1i thi\u1ebft b\u1ecb b\u1eb1ng m\xe3 gh\xe9p n\u1ed1i"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702912334892",src:e(7371).Z,width:"373",height:"807"})),(0,i.kt)("h3",{id:"tr\xean-laptoppc"},"Tr\xean Laptop/PC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L\xfac n\xe0y ta s\u1ebd c\xf3 2 th\xf4ng tin quan tr\u1ecdng \u0111\u1ec3 k\u1ebft n\u1ed1i l\xe0 ",(0,i.kt)("strong",{parentName:"li"},"\u0110\u1ecba ch\u1ec9 IP")," v\xe0 ",(0,i.kt)("strong",{parentName:"li"},"M\xe3 gh\xe9p n\u1ed1i Wi-Fi"),", m\u1edf terminal l\xean v\xe0 th\u1ef1c hi\u1ec7n gh\xe9p n\u1ed1i t\u1edbi thi\u1ebft b\u1ecb Android th\xf4ng qua l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adb pair <<IP>>\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702912541366",src:e(3189).Z,width:"1004",height:"183"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo ta s\u1ebd connect t\u1edbi thi\u1ebft b\u1ecb Android th\xf4ng qua IP c\u1ee7a n\xf3 b\u1eb1ng l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb connect <<IP>>\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ecba ch\u1ec9 IP \u0111\u1ec3 connect l\xe0 \u0111\u1ecba ch\u1ec9 IP hi\u1ec3n th\u1ecb nh\u01b0 \u1ea3nh d\u01b0\u1edbi:")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"1702912738425",src:e(4450).Z,width:"224",height:"512"}))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702912816550",src:e(4316).Z,width:"465",height:"120"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1702912860956",src:e(5928).Z,width:"466",height:"143"})),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"V\u1eady l\xe0 ta \u0111\xe3 k\u1ebft n\u1ed1i kh\xf4ng d\xe2y th\xe0nh c\xf4ng. Gi\u1edd ta v\u1eabn c\xf3 th\u1ec3 thao t\xe1c \u0111i\u1ec1u khi\u1ec3n \u0111i\u1ec7n tho\u1ea1i tr\xean Laptop/PC th\xf4ng qua \u1ee9ng d\u1ee5ng Vysor."))))}d.isMDXComponent=!0},1857:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702886692043-0fcd8932290e1d05bd241743afc0bff0.png"},924:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702887319759-458c1b7ba7a6a2f7fad6739a3bfc2039.png"},6934:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702887643155-0d8e84b6917531167f7847b13c28bde1.png"},1512:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702887857783-e16799be7f3f00ff03e978f003cf8261.png"},6956:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702888315578-381e5d34e615d3a27431c0ec66e1c7e3.png"},8747:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702888416185-ff2daa3b0bb33b1ff52cb3b03e41b60b.png"},1568:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702889384880-99a479a25be3b4fbca5f457c142f5747.png"},8478:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702889912099-445952d72cd6e5c531a0a8699d906ffe.png"},2380:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702890991806-1b517d624c884e96008b89de22cf6b13.png"},1880:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702892496772-f9946c1e0243b9745445a5d8ecd0f317.png"},467:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702893195080-3a1d8f288adb42b44e4746fac39831ef.png"},7371:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702912334892-8499f24b8342436f6ea26e23e8203156.png"},3189:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702912541366-e1a0d97d43acbc7ade32b592c08fc37f.png"},4450:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702912738425-65c30ec8f1b6e7e1793b1fd0c2253244.png"},4316:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702912816550-33f75f93637f2b02165ee6d7328d47a3.png"},5928:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702912860956-f3492ac982dac26f1c6927e34fbf189f.png"},9931:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1702914515573-69890e5a781316d90f52ae7394146038.png"}}]);