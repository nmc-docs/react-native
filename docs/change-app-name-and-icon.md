---
sidebar_position: 10
---

# Cách thay đổi tên app và icon app

## Thay đổi tên app

- Vào file **[Projectname]\android\app\src\main\res\values\strings.xml** và thay đổi tên app ở tag string:

```xml
<resources>
    <string name="app_name">App name</string>
</resources>
```

## Thay đổi logo app

- Đầu tiên, dùng công cụ để tạo logo cho app. Để làm điều này, vào link sau: https://easyappicon.com/
- Sau đó up ảnh icon của app lên, thay đổi màu nền và padding cho phù hợp.

:::caution

- Lưu ý: tên file icon phải khớp với tên được cấu hình trong file **AndroidManifest.xml**

![1709135212432](image/change-app-name-and-icon/1709135212432.png)

:::

- Sau khi tải xuống xong và giải nén ra, copy tất cả các file/folder trong thư mục **android** và paste vào thư mục **android/app/src/main/res** trong dự án:

![1709135442394](image/change-app-name-and-icon/1709135442394.png)

:::note

- Vậy là setup app name với app icon đã xong, để chạy sự thay đổi:

```bash
cd android
./gradlew clean
npx react-native start --reset-cache
```

:::
