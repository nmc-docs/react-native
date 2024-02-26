---
sidebar_position: 3
---

# Sử dụng biến môi trường trong React Native

- Cài đặt thư viện sau:

```bash
npm install -D react-native-dotenv
```

- Mở file **babel.config.js**:

```js
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
```

- Tạo file **declarations.d.ts** ở trong thư mục gốc dự án để định nghĩa kiểu dữ liệu cho biến môi trường cũng như tên module chứa nó:

```ts
declare module "@env" {
  /* Declare all your app environment variables here*/
  export const APP_BASE_URI: string;
}
```

- Và giờ ta có thể sử dụng biến môi trường như sau:

```ts
import { APP_BASE_URI } from "@env";
```
