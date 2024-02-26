---
sidebar_position: 4
---

# Cách sử dụng path alias trong React Native

- Cài đặt thư viện sau:

```bash
npm install -D babel-plugin-module-resolver
```

- Trong file **babel.config.js**:

```js
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@src": "./src",
        },
      },
    ],
  ],
};
```

- Trong file **tsconfig.json**:

```ts
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "types": ["react-native", "jest"],
    "lib": ["es2019", "ES2021.String"],
    "allowJs": true,
    "jsx": "react-native",
    "noEmit": true,
    "isolatedModules": true,
    "strict": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@src/*": ["./src/*"]
    }
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}

```

- Vậy là đã xong, và giờ ta có thể import path alias như sau:

```ts
import { ETranslationKey } from "@src/constants/enum";
```

:::note

- Nếu không hoạt động, hãy chạy lại app bằng lệnh:

```bash
npx react-native start --reset-cache
```

:::
