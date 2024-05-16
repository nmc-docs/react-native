"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[576],{3905:(n,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>d});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=a.createContext({}),l=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},g=function(n){var e=l(n.components);return a.createElement(c.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,c=n.parentName,g=s(n,["components","mdxType","originalType","parentName"]),p=l(t),u=i,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(d,o(o({ref:e},g),{},{components:t})):a.createElement(d,o({ref:e},g))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[p]="string"==typeof n?n:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7492:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:8},o="C\u1ea5u h\xecnh Deeplink trong React Native",s={unversionedId:"deeplink",id:"deeplink",title:"C\u1ea5u h\xecnh Deeplink trong React Native",description:"Deeplink l\xe0 g\xec?",source:"@site/docs/deeplink.md",sourceDirName:".",slug:"/deeplink",permalink:"/react-native/deeplink",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"S\u1eed d\u1ee5ng Push Notification trong React Native",permalink:"/react-native/push-notification"},next:{title:"T\u1ea1o Splash screen trong React Native",permalink:"/react-native/splash-screen"}},c={},l=[{value:"Deeplink l\xe0 g\xec?",id:"deeplink-l\xe0-g\xec",level:2},{value:"Th\xe0nh ph\u1ea7n c\u1ee7a m\u1ed9t deeplink",id:"th\xe0nh-ph\u1ea7n-c\u1ee7a-m\u1ed9t-deeplink",level:2},{value:"C\xe0i \u0111\u1eb7t Deeplink",id:"c\xe0i-\u0111\u1eb7t-deeplink",level:2},{value:"C\u1ea5u h\xecnh linking",id:"c\u1ea5u-h\xecnh-linking",level:2},{value:"Test deeplink",id:"test-deeplink",level:2},{value:"S\u1eed d\u1ee5ng deeplink trong Push Notification",id:"s\u1eed-d\u1ee5ng-deeplink-trong-push-notification",level:2}],g={toc:l},p="wrapper";function m(n){let{components:e,...r}=n;return(0,i.kt)(p,(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"c\u1ea5u-h\xecnh-deeplink-trong-react-native"},"C\u1ea5u h\xecnh Deeplink trong React Native"),(0,i.kt)("h2",{id:"deeplink-l\xe0-g\xec"},"Deeplink l\xe0 g\xec?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trong React Native, m\u1ed9t deep link (li\xean k\u1ebft s\xe2u) l\xe0 m\u1ed9t URL m\xe0 ng\u01b0\u1eddi d\xf9ng c\xf3 th\u1ec3 nh\u1ea5p v\xe0o \u0111\u1ec3 m\u1edf m\u1ed9t \u1ee9ng d\u1ee5ng di \u0111\u1ed9ng c\u1ee5 th\u1ec3 ho\u1eb7c \u0111\u1ebfn m\u1ed9t v\u1ecb tr\xed c\u1ee5 th\u1ec3 trong \u1ee9ng d\u1ee5ng. Deep link cho ph\xe9p ng\u01b0\u1eddi d\xf9ng truy c\u1eadp tr\u1ef1c ti\u1ebfp v\xe0o m\u1ed9t trang ho\u1eb7c ch\u1ee9c n\u0103ng trong \u1ee9ng d\u1ee5ng m\xe0 kh\xf4ng c\u1ea7n \u0111i qua c\xe1c b\u01b0\u1edbc trung gian.")),(0,i.kt)("h2",{id:"th\xe0nh-ph\u1ea7n-c\u1ee7a-m\u1ed9t-deeplink"},"Th\xe0nh ph\u1ea7n c\u1ee7a m\u1ed9t deeplink"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\u1ed9t deeplink (v\xed d\u1ee5 nh\u01b0: ",(0,i.kt)("strong",{parentName:"li"},"myapp://setting"),") g\u1ed3m 2 th\xe0nh ph\u1ea7n ch\xednh:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scheme"),' (Giao th\u1ee9c): Trong v\xed d\u1ee5 n\xe0y, "myapp" l\xe0 scheme (giao th\u1ee9c). Scheme x\xe1c \u0111\u1ecbnh \u1ee9ng d\u1ee5ng c\u1ee5 th\u1ec3 m\xe0 deep link \u0111ang li\xean k\u1ebft \u0111\u1ebfn. Tr\xean c\xe1c n\u1ec1n t\u1ea3ng di \u0111\u1ed9ng, giao th\u1ee9c th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a trong ph\u1ea1m vi \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n v\xe0 ph\u1ea3i l\xe0 duy nh\u1ea5t \u0111\u1ec3 kh\xf4ng xung \u0111\u1ed9t v\u1edbi c\xe1c \u1ee9ng d\u1ee5ng kh\xe1c.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Path"),' (\u0110\u01b0\u1eddng d\u1eabn): Trong v\xed d\u1ee5 n\xe0y, "setting" l\xe0 path (\u0111\u01b0\u1eddng d\u1eabn). Path x\xe1c \u0111\u1ecbnh m\u1ed9t t\xe0i nguy\xean c\u1ee5 th\u1ec3 trong \u1ee9ng d\u1ee5ng m\xe0 deep link s\u1ebd m\u1edf. \u0110i\u1ec1u n\xe0y c\xf3 th\u1ec3 l\xe0 m\u1ed9t m\xe0n h\xecnh, m\u1ed9t ch\u1ee9c n\u0103ng ho\u1eb7c m\u1ed9t tr\u1ea1ng th\xe1i c\u1ee5 th\u1ec3 trong \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n.')))),(0,i.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-deeplink"},"C\xe0i \u0111\u1eb7t Deeplink"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Navigation c\u0169ng h\u1ed7 tr\u1ee3 cho ta vi\u1ec7c c\u1ea5u h\xecnh deeplink:"),(0,i.kt)("li",{parentName:"ul"},"Ta c\xe0i \u0111\u1eb7t c\xe1c b\u1ed9 th\u01b0 vi\u1ec7n \u0111i k\xe8m c\u1ee7a React Navigation:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native react-native-screens react-native-safe-area-context\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo \u0111\xf3, ta s\u1ebd t\u1ea1o ",(0,i.kt)("strong",{parentName:"li"},"Scheme URI")," th\xf4ng qua l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx uri-scheme add <SCHEME_URI_NAME> --android\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau khi t\u1ea1o xong ",(0,i.kt)("strong",{parentName:"li"},"Scheme URI"),", ta s\u1ebd th\u1ea5y s\u1ef1 thay \u0111\u1ed5i trong file ",(0,i.kt)("strong",{parentName:"li"},"android/app/src/main/AndroidManifest.xml"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    \x3c!-- Scheme URI --\x3e\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" /> \x3c!-- This is SCHEME_URI_NAME --\x3e\n    </intent-filter>\n</activity>\n')),(0,i.kt)("h2",{id:"c\u1ea5u-h\xecnh-linking"},"C\u1ea5u h\xecnh linking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"T\u1ea1o 1 file ",(0,i.kt)("strong",{parentName:"li"},"src/configs/deeplink.config.ts"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { APP_BASE_URI } from "@env";\nimport { LinkingOptions } from "@react-navigation/native";\nimport { ERootScreenList } from "@src/navigators/screens-name";\nimport { Linking } from "react-native";\n\nconst deepLinksConfig = {\n  screens: {\n    // T\xean "key" ph\u1ea3i tr\xf9ng v\u1edbi name c\u1ee7a screen \u1edf trong component <Stack.Screen />\n    // "value" ch\xednh l\xe0 path name trong deeplink\n    [ERootScreenList.HOME]: "home",\n    [ERootScreenList.CONTACT]: "contact",\n    [ERootScreenList.SETTING]: "setting",\n  },\n};\n\nconst linking: LinkingOptions<{}> = {\n  prefixes: [APP_BASE_URI], // \u0110\xe2y l\xe0 Scheme URI, \u0111\u1eb7t trong bi\u1ebfn m\xf4i tr\u01b0\u1eddng\n  config: deepLinksConfig,\n  async getInitialURL() {\n    const url = await Linking.getInitialURL();\n    if (typeof url === "string") {\n      return url;\n    }\n  },\n  subscribe(listener) {\n    const linkingSubscription = Linking.addEventListener("url", ({ url }) => {\n      listener(url);\n    });\n\n    return () => {\n      linkingSubscription.remove();\n    };\n  },\n};\n\nexport default linking;\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Ta c\xf3 th\u1ec3 c\u1ea5u h\xecnh nested navigators v\xe0 k\xe8m th\xeam params cho m\u1ed9t screen."),(0,i.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 c\u1ea5u tr\xfac navigation nh\u01b0 sau:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'function Home() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Profile" component={Profile} />\n      <Tab.Screen name="Feed" component={Feed} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n')),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Khi \u0111\xf3, config s\u1ebd c\xf3 2 d\u1ea1ng nh\u01b0 sau:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  screens: {\n    Home: {\n      screens: {\n        Profile: "users/:id",\n      },\n    },\n  },\n};\n')),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  screens: {\n    Home: {\n      screens: {\n        Profile: {\n          path: "users/:id",\n          screens: {\n            /* If there are more screen that nested in Profile screen, ad\u0111 here */\n          },\n        },\n      },\n    },\n  },\n};\n')),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Khi \u0111\xf3 \u1edf screen Profile, ta c\xf3 th\u1ec3 l\u1ea5y \u0111\u01b0\u1ee3c params ",(0,i.kt)("strong",{parentName:"li"},"id")," nh\u01b0 sau:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRoute } from '@react-navigation/native';\n\nconst ProfileScreen = () => {\n  const route = useRoute();\n  const { id } = route.params;\n\n  // S\u1eed d\u1ee5ng gi\xe1 tr\u1ecb 'id' \u1edf \u0111\xe2y\n  // ...\n\n  return (\n    // JSX c\u1ee7a m\xe0n h\xecnh \"Profile\"\n  );\n};\n\nexport default ChatScreen;\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cu\u1ed1i c\xf9ng, ta th\xeam props ",(0,i.kt)("strong",{parentName:"li"},"linking")," trong component NavigationContainer:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { SafeAreaProvider } from "react-native-safe-area-context";\nimport BootSplash from "react-native-bootsplash";\n\nimport { NavigationContainer } from "@react-navigation/native";\nimport GlobalNavigation, {\n  navigationRef,\n} from "@src/configs/navigation.config";\nimport { createStackNavigator } from "@react-navigation/stack";\nimport { ERootScreenList } from "@src/navigators/screens-name";\nimport HomepageScreen from "@src/screens/home";\nimport ContactScreen from "@src/screens/contact";\nimport SettingScreen from "@src/screens/setting";\nimport styles from "./styles";\nimport { ChevronLeftIcon } from "@src/assets/icons";\nimport linking from "@src/configs/deeplink.config";\n\nconst Stack = createStackNavigator();\n\nconst RootNavigator = () => {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer ref={navigationRef} linking={linking}>\n        <Stack.Navigator\n          screenOptions={{\n            headerShown: false,\n            headerTitleAlign: "center",\n            headerTitleStyle: styles.title,\n            headerStyle: styles.header,\n            headerLeft: () => (\n              <ChevronLeftIcon\n                style={{ marginLeft: 10 }}\n                onPress={() => GlobalNavigation.goBack()}\n              />\n            ),\n          }}\n        >\n          <Stack.Screen\n            name={ERootScreenList.HOME}\n            component={HomepageScreen}\n            options={{\n              headerShown: true,\n              headerTitle: "Homepage",\n            }}\n          />\n          <Stack.Screen\n            name={ERootScreenList.CONTACT}\n            component={ContactScreen}\n            options={{\n              headerShown: true,\n              headerTitle: "Contact",\n            }}\n          />\n          <Stack.Screen\n            name={ERootScreenList.SETTING}\n            component={SettingScreen}\n            options={{\n              headerShown: true,\n              headerTitle: "Setting",\n            }}\n          />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n};\n\nexport default RootNavigator;\n')),(0,i.kt)("h2",{id:"test-deeplink"},"Test deeplink"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"V\u1eady l\xe0 ta \u0111\xe3 ho\xe0n t\u1ea5t vi\u1ec7c c\u1ea5u h\xecnh deeplink, gi\u1edd \u0111\u1ec3 test, ta g\xf5 l\u1ec7nh sau:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npx uri-scheme open "myapp://setting" --android\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trong c\xe2u l\u1ec7nh tr\xean, n\xf3 s\u1ebd t\u1ef1 \u0111\u1ed9ng m\u1edf app v\xe0 \u0111i\u1ec1u h\u01b0\u1edbng th\u1eb3ng \u0111\u1ebfn m\xe0n h\xecnh Setting.")),(0,i.kt)("h2",{id:"s\u1eed-d\u1ee5ng-deeplink-trong-push-notification"},"S\u1eed d\u1ee5ng deeplink trong Push Notification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notification trong react native c\xf3 3 ch\u1ebf \u0111\u1ed9:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Foreground"),": \u0110\xe2y l\xe0 tr\u1ea1ng th\xe1i khi \u1ee9ng d\u1ee5ng \u0111ang m\u1edf v\xe0 \u0111ang ho\u1ea1t \u0111\u1ed9ng tr\xean m\xe0n h\xecnh ch\xednh"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Background"),': Trong tr\u1ea1ng th\xe1i n\xe0y, \u1ee9ng d\u1ee5ng \u0111ang ch\u1ea1y \u1edf n\u1ec1n, t\u1ee9c l\xe0 kh\xf4ng hi\u1ec3n th\u1ecb tr\xean m\xe0n h\xecnh ch\xednh nh\u01b0ng v\u1eabn \u0111ang ho\u1ea1t \u0111\u1ed9ng. \u0110i\u1ec1u n\xe0y th\u01b0\u1eddng x\u1ea3y ra khi ng\u01b0\u1eddi d\xf9ng nh\u1ea5n n\xfat "Home" tr\xean thi\u1ebft b\u1ecb ho\u1eb7c chuy\u1ec3n sang \u1ee9ng d\u1ee5ng kh\xe1c th\xf4ng qua tr\xecnh chuy\u1ec3n \u0111\u1ed5i \u1ee9ng d\u1ee5ng.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quit"),": \u0110\xe2y l\xe0 tr\u1ea1ng th\xe1i khi \u1ee9ng d\u1ee5ng kh\xf4ng ho\u1ea1t \u0111\u1ed9ng ho\u1eb7c \u0111\xe3 b\u1ecb \u0111\xf3ng"))),(0,i.kt)("li",{parentName:"ul"},"Khi app \u0111ang \u1edf ch\u1ebf \u0111\u1ed9 ",(0,i.kt)("strong",{parentName:"li"},"Foreground"),", theo m\u1eb7c \u0111\u1ecbnh, Firebase s\u1ebd kh\xf4ng hi\u1ec3n th\u1ecb th\xf4ng b\xe1o, do \u0111\xf3, ta ph\u1ea3i s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n l\xe0 ",(0,i.kt)("strong",{parentName:"li"},"notifee")," \u0111\u1ec3 x\u1eed l\xfd:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @notifee/react-native\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ta s\u1eeda l\u1ea1i file ",(0,i.kt)("strong",{parentName:"li"},"src/configs/deeplink.config.ts")," nh\u01b0 sau:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { APP_BASE_URI } from "@env";\nimport { LinkingOptions } from "@react-navigation/native";\nimport notifee, { AndroidImportance, EventType } from "@notifee/react-native";\n\nimport { buildDeepLinkFromNotificationData } from "@src/utils/deeplink.util";\nimport { Linking } from "react-native";\nimport messaging from "@react-native-firebase/messaging";\nimport {\n  EAuthScreenList,\n  ERootScreenList,\n} from "@src/constants/screen-constants";\nimport { IRemoteMessageData } from "@src/interfaces/push-notification.interface";\n\nconst deepLinksConfig = {\n  screens: {\n    [ERootScreenList.HOME]: "home",\n    [ERootScreenList.AUTH_NAVIGATOR]: {\n      screens: {\n        [EAuthScreenList.LOGIN]: "login",\n        [EAuthScreenList.SIGNUP]: "signup",\n      },\n    },\n  },\n};\n\nconst linking: LinkingOptions<{}> = {\n  prefixes: [APP_BASE_URI],\n  config: deepLinksConfig,\n  async getInitialURL() {\n    const url = await Linking.getInitialURL();\n    if (typeof url === "string") {\n      return url;\n    }\n\n    //getInitialNotification: When the application is opened from a quit state.\n    const message = await messaging().getInitialNotification();\n    if (message?.data) {\n      const messageData: IRemoteMessageData = message.data;\n      const { navigationKey, navigationParamsInJSON } = messageData;\n      const deeplinkURL = buildDeepLinkFromNotificationData(\n        navigationKey,\n        navigationParamsInJSON\n      );\n      if (typeof deeplinkURL === "string") {\n        return deeplinkURL;\n      }\n    }\n  },\n  subscribe(listener) {\n    // Listen to incoming links from deep linking\n    const linkingSubscription = Linking.addEventListener("url", ({ url }) => {\n      listener(url);\n    });\n\n    //onNotificationOpenedApp: When the application is running, but in the background.\n    const unsubscribe = messaging().onNotificationOpenedApp((remoteMessage) => {\n      if (remoteMessage?.data) {\n        const messageData: IRemoteMessageData = remoteMessage.data;\n        const { navigationKey, navigationParamsInJSON } = messageData;\n        const deeplinkURL = buildDeepLinkFromNotificationData(\n          navigationKey,\n          navigationParamsInJSON\n        );\n        if (typeof deeplinkURL === "string") {\n          listener(deeplinkURL);\n        }\n      }\n    });\n\n    //onForegroundEvent: When the application is in foreground.\n    const notifeeForegroundEvent = notifee.onForegroundEvent(\n      ({ detail, type }) => {\n        if (type === EventType.PRESS) {\n          if (detail.notification?.data) {\n            const messageData: IRemoteMessageData = detail.notification.data;\n            const { navigationKey, navigationParamsInJSON } = messageData;\n            const deeplinkURL = buildDeepLinkFromNotificationData(\n              navigationKey,\n              navigationParamsInJSON\n            );\n            if (typeof deeplinkURL === "string") {\n              listener(deeplinkURL);\n            }\n          }\n        }\n      }\n    );\n\n    //Display notification when the application is in foreground.\n    messaging().onMessage(async (remoteMessage) => {\n      const channelId = await notifee.createChannel({\n        id: "default",\n        name: "Default Channel",\n        sound: "notification",\n        importance: AndroidImportance.HIGH,\n      });\n      await notifee.displayNotification({\n        title: remoteMessage.notification?.title || "",\n        body: remoteMessage.notification?.body || "",\n        android: {\n          channelId,\n          smallIcon: "ic_notification",\n        },\n        data: remoteMessage.data,\n      });\n    });\n\n    return () => {\n      linkingSubscription.remove();\n      unsubscribe();\n      notifeeForegroundEvent();\n    };\n  },\n};\n\nexport default linking;\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"T\u1ea1o file ",(0,i.kt)("strong",{parentName:"li"},"src/utils/deeplink.util.ts")," \u0111\u1ec3 x\u1eed l\xfd vi\u1ec7c t\u1ea1o deeplink t\u1eeb Push Notification:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { APP_BASE_URI } from "@env";\n\nconst constructDeeplinkURI = (pathname: string) => {\n  return `${APP_BASE_URI}${pathname}`;\n};\n\nexport const buildDeepLinkFromNotificationData = (\n  navigationKey?: string,\n  navigationParamsInJSON?: string\n) => {\n  if (!navigationKey) {\n    return null;\n  }\n  if (navigationKey === "signup") {\n    return constructDeeplinkURI(navigationKey);\n  }\n  return null;\n};\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File ",(0,i.kt)("strong",{parentName:"li"},"src/interfaces/push-notification.interface.ts"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IRemoteMessageData {\n  navigationKey?: string;\n  navigationParamsInJSON?: string;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u1ede file ",(0,i.kt)("strong",{parentName:"li"},"index.js"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * @format\n */\n\nimport { AppRegistry } from "react-native";\nimport "react-native-gesture-handler";\nimport messaging from "@react-native-firebase/messaging";\n\nimport App from "./src/App";\nimport { name as appName } from "./app.json";\n\nmessaging().setBackgroundMessageHandler(async (remoteMessage) => {\n  console.log("Message handled in the background!");\n});\n\nAppRegistry.registerComponent(appName, () => App);\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 \u0111\u1ec3 test g\u1eedi th\xf4ng b\xe1o cho ng\u01b0\u1eddi d\xf9ng tr\xean app v\xe0 \u0111i\u1ec1u h\u01b0\u1edbng h\u1ecd \u0111\u1ebfn m\xe0n h\xecnh Setting nh\u01b0 c\u1ea5u h\xecnh b\xean tr\xean:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1709050091582",src:t(2382).Z,width:"1910",height:"1151"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1709050196272",src:t(4141).Z,width:"720",height:"1650"})))}m.isMDXComponent=!0},2382:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/1709050091582-bdaf3090eac5002e1bc5c30c312764b0.png"},4141:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/1709050196272-a8ace71b499ba459d35f3a17ad66e01c.png"}}]);