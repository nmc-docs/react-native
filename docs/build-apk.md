---
sidebar_position: 14
---

# Build ứng dụng

- Chạy bằng quyền admin và sau đó di chuyển đến thư mục bin của JDK:

```bash
cd "C:\Program Files\Microsoft\jdk-17.0.8.7-hotspot\bin"
```

- Chạy lệnh sau:

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

:::note

- Lệnh trên sẽ yêu cầu bạn thiết lập mật khẩu cho key store, hãy ghi nhớ mật khẩu đã thiết lập này, các thông tin còn lại có thể điền tùy ý.
- Sau khi lệnh trên chạy xong, nó sẽ tạo ra 1 file có tên: **my-upload-key.keystore**

:::

- Di chuyển file **my-upload-key.keystore** vào trong thư mục **android/app**
- Sau đó, vào file **android/gradle.properties** và thêm dòng sau vào cuối:

```gradle
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=[key_store_password]
MYAPP_UPLOAD_KEY_PASSWORD=[key_store_password]
```

- Tiếp đó, vào file **android/app/build.gradle** và thêm:

```gradle
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

- Chạy gradlew clean:

```bash
cd android
./gradlew clean
```

- Chạy lệnh build (vẫn ở trong thư mục android):

```bash
./gradlew assembleRelease
```

:::tip

- Sau khi build xong, file APK sẽ nằm tại đường dẫn: **android/app/build/outputs/apk/release/app-release.apk**

:::
