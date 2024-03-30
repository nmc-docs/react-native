---
sidebar_position: 5
---

# Sử dụng SVG Component trong React Native

- Cài đặt 2 thư viện sau:

```bash
npm install react-native-svg
```

```bash
npm install -D react-native-svg-transformer
```

- Vào file **metro**.**config**.**js:**

```js
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig();

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

- Tạo file **declarations.d.ts** ở trong thư mục gốc dự án:

```ts
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
```

- Và giờ ta có thể sử dụng SVG như một component:

```ts
import ChevronLeftIcon from "./chevron-left.svg";

export { ChevronLeftIcon };
```

```tsx
<ChevronLeftIcon
  style={{ marginLeft: 10 }}
  onPress={() => GlobalNavigation.goBack()}
/>
```

:::tip

Cách custom width, height, color của icon svg trong react native

- Vào file .svg, xóa thuộc tính width, height trong tag `<svg>`
- Xem thuộc tính chứa màu của icon là gì (thường là stroke, fill), thay bằng giá trị "currentColor".
- Cuối cùng có thể custom component svg thông qua style={{width, height, color}}

:::
