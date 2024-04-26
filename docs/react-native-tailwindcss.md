---
sidebar_position: 12
---

# Sử dụng TailwindCSS trong React Native

## Cài đặt thư viện

```bash
npm install twrnc
```

```bash
npm install -D tailwindcss
```

## Khởi tạo file config cho Tailwind

```bash
npx tailwindcss init
```

- File **tailwind.config.js**:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Sử dụng

- Tạo file **src/libs/tailwind.js**:

```js
import { create } from "twrnc";

const twrnc = create(require(`../../tailwind.config`));
const { style } = twrnc;
export { style as tw };
```

- Và giờ ta có thể sử dụng class tailwind để style:

```tsx
import { tw } from "@src/libs/tailwind";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={tw("flex-1 items-center")}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
```

:::tip

- Để bật auto complete cho các class, ta vào file **setting.json** và thêm dòng sau:

```json
{
  "tailwindCSS.classAttributes": ["class", "className", "ngClass", ".*Styles*"],
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    ["tw\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```

:::
