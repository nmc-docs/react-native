"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[487],{7052:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=a(4848),s=a(8453);const i={sidebar_position:13},c="Thi\u1ebft l\u1eadp \u0111a ng\xf4n ng\u1eef trong React Native",r={id:"multiple-language",title:"Thi\u1ebft l\u1eadp \u0111a ng\xf4n ng\u1eef trong React Native",description:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n",source:"@site/docs/multiple-language.md",sourceDirName:".",slug:"/multiple-language",permalink:"/react-native/multiple-language",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"S\u1eed d\u1ee5ng TailwindCSS trong React Native",permalink:"/react-native/react-native-tailwindcss"},next:{title:"Build \u1ee9ng d\u1ee5ng",permalink:"/react-native/build-apk"}},l={},o=[{value:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n",id:"c\xe0i-\u0111\u1eb7t-th\u01b0-vi\u1ec7n",level:2},{value:"Setup",id:"setup",level:2},{value:"T\u1ea1o c\xe1c file v\xe0 th\u01b0 m\u1ee5c",id:"t\u1ea1o-c\xe1c-file-v\xe0-th\u01b0-m\u1ee5c",level:3},{value:"T\u1ea1o h\xe0m chuy\u1ec3n \u0111\u1ed5i ng\xf4n ng\u1eef",id:"t\u1ea1o-h\xe0m-chuy\u1ec3n-\u0111\u1ed5i-ng\xf4n-ng\u1eef",level:3},{value:"S\u1eed d\u1ee5ng",id:"s\u1eed-d\u1ee5ng",level:2}];function g(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"thi\u1ebft-l\u1eadp-\u0111a-ng\xf4n-ng\u1eef-trong-react-native",children:"Thi\u1ebft l\u1eadp \u0111a ng\xf4n ng\u1eef trong React Native"}),"\n",(0,t.jsx)(e.h2,{id:"c\xe0i-\u0111\u1eb7t-th\u01b0-vi\u1ec7n",children:"C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm install i18next react-i18next\n"})}),"\n",(0,t.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(e.h3,{id:"t\u1ea1o-c\xe1c-file-v\xe0-th\u01b0-m\u1ee5c",children:"T\u1ea1o c\xe1c file v\xe0 th\u01b0 m\u1ee5c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["T\u1ea1o 1 folder t\xean ",(0,t.jsx)(e.strong,{children:"i18n"})," b\xean trong th\u01b0 m\u1ee5c ",(0,t.jsx)(e.strong,{children:"src"}),", sau \u0111\xf3 t\u1ea1o c\xe1c file nh\u01b0 \u1ea3nh d\u01b0\u1edbi:"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"1714756275480",src:a(2639).A+"",width:"391",height:"279"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Trong \u0111\xf3:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Th\u01b0 m\u1ee5c ",(0,t.jsx)(e.strong,{children:"languages"})," bao g\u1ed3m 2 th\u01b0 m\u1ee5c ",(0,t.jsx)(e.strong,{children:"en"})," v\xe0 ",(0,t.jsx)(e.strong,{children:"vi"})," l\xe0 2 ng\xf4n ng\u1eef m\xe0 ta s\u1eed d\u1ee5ng trong project. M\u1ed7i th\u01b0 m\u1ee5c s\u1ebd ch\u1ee9a c\xe1c file namespace json \u0111\u1ecbnh ngh\u0129a c\xe1c c\u1eb7p key - value \u0111\u1ec3 d\u1ecbch theo ng\xf4n ng\u1eef t\u01b0\u01a1ng \u1ee9ng"]}),"\n",(0,t.jsxs)(e.li,{children:["File ",(0,t.jsx)(e.strong,{children:"enum.ts"})," \u0111\u1ecbnh ngh\u0129a t\xean c\xe1c namespace v\xe0 locale."]}),"\n",(0,t.jsxs)(e.li,{children:["File ",(0,t.jsx)(e.strong,{children:"index.ts"})," l\xe0 file c\u1ea5u h\xecnh cho i18n."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:'Trong i18next, "namespace" l\xe0 m\u1ed9t thu\u1eadt ng\u1eef \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh c\xe1c ph\u1ea1m vi ho\u1eb7c kh\xf4ng gian c\u1ee7a c\xe1c t\xe0i nguy\xean ng\xf4n ng\u1eef. Cho ph\xe9p t\u1ed5 ch\u1ee9c v\xe0 qu\u1ea3n l\xfd c\xe1c b\u1ed9 ng\xf4n ng\u1eef c\u1ee7a \u1ee9ng d\u1ee5ng m\u1ed9t c\xe1ch c\xf3 t\u1ed5 ch\u1ee9c.'}),(0,t.jsxs)(e.p,{children:["V\u1edbi i18next, ta c\xf3 th\u1ec3 chia c\xe1c t\xe0i nguy\xean ng\xf4n ng\u1eef c\u1ee7a m\xecnh th\xe0nh c\xe1c namespace kh\xe1c nhau \u0111\u1ec3 ph\xe2n lo\u1ea1i ch\xfang theo c\xe1c ch\u1ee9c n\u0103ng, th\xe0nh ph\u1ea7n ho\u1eb7c c\xe1c ph\u1ea1m vi kh\xe1c. Nh\u01b0 v\xed d\u1ee5 \u1edf tr\xean, ta c\xf3 2 namespace l\xe0 ",(0,t.jsx)(e.strong,{children:"common"})," (ch\u1ee9a c\xe1c t\u1eeb d\xf9ng chung) v\xe0 ",(0,t.jsx)(e.strong,{children:"translations"})," (ch\u1ee9a c\xe1c t\u1eeb d\xf9ng trong c\xe1c screen trong app). T\xf9y theo c\xe1ch t\u1ed5 ch\u1ee9c, ta c\xf3 th\u1ec3 c\xf3 nhi\u1ec1u namespace."]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"C\xe1c file json:"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"1714756892450",src:a(4097).A+"",width:"1473",height:"898"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["File ",(0,t.jsx)(e.strong,{children:"enum.ts"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'export enum ELanguageNamespaces {\n  TRANSLATIONS = "translations",\n  COMMON = "common",\n}\n\nexport enum ELocales {\n  VIETNAMESE = "vi",\n  ENGLISH = "en",\n}\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"V\u1ec1 \u0111\u1eb7t t\xean locale, h\xe3y tu\xe2n theo t\xean chu\u1ea9n c\u1ee7a locale qu\u1ed1c t\u1ebf."}),"\n",(0,t.jsxs)(e.li,{children:["Xem t\xean locale chu\u1ea9n theo qu\u1ed1c t\u1ebf: ",(0,t.jsx)(e.a,{href:"https://help.sap.com/docs/SAP_BUSINESSOBJECTS_BUSINESS_INTELLIGENCE_PLATFORM/09382741061c40a989fae01e61d54202/46758c5e6e041014910aba7db0e91070.html",children:"T\u1ea1i \u0111\xe2y"})]}),"\n"]})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ta \u0111\u1ecbnh ngh\u0129a m\u1ed9t h\xe0m \u0111\u1ec3 x\xe1c \u0111\u1ecbnh ng\xf4n ng\u1eef cho app (c\xf3 th\u1ec3 t\xe1ch ra m\u1ed9t file util ri\xeang):"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'import AsyncStorage from "@react-native-async-storage/async-storage";\nimport { NativeModules, Platform } from "react-native";\n\nimport { EStorageKey } from "@src/constants/enum";\nimport { ELocales } from "@src/i18n/enum";\n\nexport const getAppLanguage = async () => {\n  const currentAppLanguage = (await AsyncStorage.getItem(\n    EStorageKey.I18NLANGUAGE\n  )) as ELocales;\n\n  const deviceLanguage = (\n    Platform.OS === "ios"\n      ? NativeModules.SettingsManager.settings.AppleLocale ||\n        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13\n      : NativeModules.I18nManager.localeIdentifier\n  ).split("_")[0];\n\n  const deviceLanguageExistsInAppConfig = Object.values(ELocales).includes(\n    deviceLanguage\n  )\n    ? deviceLanguage\n    : null;\n\n  const defaultLanguage = ELocales.ENGLISH;\n  return (\n    currentAppLanguage || deviceLanguageExistsInAppConfig || defaultLanguage\n  );\n};\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["File ",(0,t.jsx)(e.strong,{children:"index.ts"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'/* eslint-disable import/no-named-as-default-member */\nimport i18next from "i18next";\nimport { initReactI18next } from "react-i18next";\n\nimport { ELocales } from "@src/constants/enum";\nimport { ELanguageNamespaces } from "@src/i18n/enum";\nimport enCommon from "@src/i18n/languages/en/common.json";\nimport enTranslations from "@src/i18n/languages/en/translations.json";\nimport viCommon from "@src/i18n/languages/vi/common.json";\nimport viTranslations from "@src/i18n/languages/vi/translations.json";\nimport { getAppLanguage } from "@src/utils/common.util";\n\nconst languageDetector: any = {\n  type: "languageDetector",\n  async: true,\n  detect: async (cb: any) => {\n    // X\xe1c \u0111\u1ecbnh ng\xf4n ng\u1eef \u0111\u1ec3 thi\u1ebft l\u1eadp cho app\n    const language = await getAppLanguage();\n    cb(language);\n  },\n  init: () => {},\n  cacheUserLanguage: () => {},\n};\nconst defaultNS = ELanguageNamespaces.TRANSLATIONS; // Namespace m\u1eb7c \u0111\u1ecbnh l\xe0 "translations"\n\n/*\n- \u0110\u1ecbnh ngh\u0129a resource (l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng ch\u1ee9a c\xe1c t\xe0i nguy\xean ng\xf4n ng\u1eef cho \u1ee9ng d\u1ee5ng)\n- Resource \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh d\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t object c\xf3 hai thu\u1ed9c t\xednh, ELocales.VIETNAMESE v\xe0 ELocales.ENGLISH, l\xe0 c\xe1c gi\xe1 tr\u1ecb t\u1eeb m\u1ed9t enum ELocales. M\u1ed7i thu\u1ed9c t\xednh \u0111\u1ea1i di\u1ec7n cho m\u1ed9t ng\xf4n ng\u1eef trong \u1ee9ng d\u1ee5ng. M\u1ed7i ng\xf4n ng\u1eef l\u1ea1i l\xe0 m\u1ed9t object ch\u1ee9a 2 thu\u1ed9c t\xednh l\xe0 2 namespace, c\xf3 gi\xe1 tr\u1ecb l\xe0 c\xe1c file json m\xe0 ta import \u1edf tr\xean\n*/\nconst resources = {\n  [ELocales.VIETNAMESE]: {\n    [ELanguageNamespaces.TRANSLATIONS]: viTranslations,\n    [ELanguageNamespaces.COMMON]: viCommon,\n  },\n  [ELocales.ENGLISH]: {\n    [ELanguageNamespaces.TRANSLATIONS]: enTranslations,\n    [ELanguageNamespaces.COMMON]: enCommon,\n  },\n};\n\ni18next\n  .use(languageDetector)\n  .use(initReactI18next)\n  .init({\n    compatibilityJSON: "v3",\n    fallbackLng: ELocales.ENGLISH,\n    resources,\n    ns: Object.values(ELanguageNamespaces),\n    react: {\n      useSuspense: false,\n    },\n    defaultNS,\n  });\n\nexport default i18next;\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["T\u1ea1o file ",(0,t.jsx)(e.strong,{children:"i18next.d.ts"})," \u1edf b\xean trong th\u01b0 m\u1ee5c ",(0,t.jsx)(e.strong,{children:"src"})," (m\u1ee5c \u0111\xedch file n\xe0y l\xe0 \u0111\u1ec3 hi\u1ec3n th\u1ecb g\u1ee3i \xfd cho key khi ta d\xf9ng hook ",(0,t.jsx)(e.strong,{children:"useTranslation()"}),"):"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'import "i18next";\nimport viCommon from "@src/i18n/languages/vi/common.json";\nimport viTranslations from "@src/i18n/languages/vi/translations.json";\n\ndeclare module "i18next" {\n  interface CustomTypeOptions {\n    defaultNS: ["translations", "common"];\n    resources: {\n      common: typeof viCommon;\n      translations: typeof viTranslations;\n    };\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u1ede file ",(0,t.jsx)(e.strong,{children:"index.js"})," (file root c\u1ee7a project), h\xe3y import i18n \u1edf file ta v\u1eeba config:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'/**\n * @format\n */\n\nimport messaging from "@react-native-firebase/messaging";\nimport { AppRegistry } from "react-native";\n\nimport "react-native-gesture-handler";\nimport "./src/i18n"; // Import d\xf2ng n\xe0y\nimport { name as appName } from "./app.json";\nimport App from "./src/App";\n\nmessaging().setBackgroundMessageHandler(async (remoteMessage) => {\n  console.log("Message handled in the background!");\n});\n\nAppRegistry.registerComponent(appName, () => App);\n'})}),"\n",(0,t.jsx)(e.h3,{id:"t\u1ea1o-h\xe0m-chuy\u1ec3n-\u0111\u1ed5i-ng\xf4n-ng\u1eef",children:"T\u1ea1o h\xe0m chuy\u1ec3n \u0111\u1ed5i ng\xf4n ng\u1eef"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'import AsyncStorage from "@react-native-async-storage/async-storage";\nimport { useEffect, useState } from "react";\nimport { useTranslation } from "react-i18next";\nimport { View } from "react-native";\n\nimport { UsaFlagIcon, VietnamFlagIcon } from "@src/assets/icons";\nimport SelectLanguageButton from "@src/components/features/change-language/SelectLanguageButton";\nimport Loading from "@src/components/UI/Loading";\nimport { EStorageKey } from "@src/constants/enum";\nimport { ELocales } from "@src/i18n/enum";\nimport { tw } from "@src/libs/tailwind";\nimport { getAppLanguage } from "@src/utils/common.util";\n\nconst languages = [\n  {\n    locale: ELocales.VIETNAMESE,\n    flagIcon: <VietnamFlagIcon style={tw("w-[30px] h-[30px]")} />,\n    languageName: "Vietnamese",\n  },\n  {\n    locale: ELocales.ENGLISH,\n    flagIcon: <UsaFlagIcon style={tw("w-[30px] h-[30px]")} />,\n    languageName: "English",\n  },\n];\n\nconst ChangeLanguageScreen = () => {\n  const [currentLanguaged, setCurrentLanguage] = useState<ELocales>();\n  const { i18n } = useTranslation();\n\n  //H\xe0m chuy\u1ec3n \u0111\u1ed5i ng\xf4n ng\u1eef\n  const handleChooseLanguage = async (locale: ELocales) => {\n    await AsyncStorage.setItem(EStorageKey.I18NLANGUAGE, locale);\n    i18n.changeLanguage(locale);\n    setCurrentLanguage(locale);\n  };\n\n  useEffect(() => {\n    (async () => {\n      const language = await getAppLanguage();\n      setCurrentLanguage(language);\n    })();\n  }, []);\n\n  return (\n    <View style={tw("grow p-5 bg-old_lace")}>\n      <View style={tw("flex-row gap-6 flex-wrap justify-between")}>\n        {languages.map((language, index) => (\n          <SelectLanguageButton\n            key={index}\n            flagIcon={language.flagIcon}\n            languageName={language.languageName}\n            locale={language.locale}\n            isSelected={currentLanguaged === language.locale}\n            onChangeLanguage={handleChooseLanguage}\n          />\n        ))}\n      </View>\n      <Loading />\n    </View>\n  );\n};\n\nexport default ChangeLanguageScreen;\n'})}),"\n",(0,t.jsx)(e.h2,{id:"s\u1eed-d\u1ee5ng",children:"S\u1eed d\u1ee5ng"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Gi\u1edd ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng h\xe0m ",(0,t.jsx)(e.strong,{children:"t"})," \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb hook ",(0,t.jsx)(e.strong,{children:"useTranslation()"})," \u0111\u1ec3 d\u1ecbch, v\xed d\u1ee5:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'import { useTranslation } from "react-i18next";\nimport { Text, View } from "react-native";\n\nconst MyScreen = () => {\n  const { t } = useTranslation();\n  return (\n    <View>\n      <Text>{t("common:taskDetails")}</Text>\n      <Text>{t("headerTitle.login")}</Text>\n    </View>\n  );\n};\n\nexport default MyScreen;\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["V\xec \u1edf b\xean tr\xean ta \u0111\xe3 c\u1ea5u h\xecnh namespace m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,t.jsx)(e.strong,{children:"translations"}),', cho n\xean n\u1ebfu mu\u1ed1n s\u1eed d\u1ee5ng namespace kh\xe1c th\xec ph\u1ea3i th\xeam ti\u1ec1n t\u1ed1 "[namespace]:" \u1edf \u0111\u1eb1ng tr\u01b0\u1edbc nh\u01b0 \u1edf v\xed d\u1ee5 tr\xean l\xe0 "common',":taskDetails",'"']}),"\n"]})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ta c\xf3 th\u1ec3 truy\u1ec1n gi\xe1 tr\u1ecb \u0111\u1ed9ng khi d\u1ecbch:"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"1714758934049",src:a(7658).A+"",width:"1446",height:"367"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u0110\u1ec3 s\u1eed d\u1ee5ng m\u1ed9t namespace kh\xe1c b\xean trong file json c\u1ee7a m\u1ed9t namespace, ta s\u1eed d\u1ee5ng ",(0,t.jsxs)(e.strong,{children:["$t(namespace",":key",")"]})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"1714759043786",src:a(3638).A+"",width:"1476",height:"796"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}},2639:(n,e,a)=>{a.d(e,{A:()=>t});const t="data:image/png;base64,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"},4097:(n,e,a)=>{a.d(e,{A:()=>t});const t=a.p+"assets/images/1714756892450-b8c484eca25eeea112336f90f3ece6f4.png"},7658:(n,e,a)=>{a.d(e,{A:()=>t});const t=a.p+"assets/images/1714758934049-9db963fdb37422e4dc9d61a616a0bda8.png"},3638:(n,e,a)=>{a.d(e,{A:()=>t});const t=a.p+"assets/images/1714759043786-30b02fafeefdfaa849ef1415e36c7690.png"},8453:(n,e,a)=>{a.d(e,{R:()=>c,x:()=>r});var t=a(6540);const s={},i=t.createContext(s);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);