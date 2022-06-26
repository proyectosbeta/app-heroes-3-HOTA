# Description

The mobile app for Heroes 3 HOTA.
Consume the API https://github.com/proyectosbeta/api-heroes-3-HOTA

# Tecnologies

- React 17.0.2
- React Native 0.64.3
- Yarn 1.22.xx
- Npm 8.13.1
- OpenJDK 11.0.xx
- Gradle 6.5

# Development

One terminal:

```bash
yarn install
npx react-native start
```

Another terminal:

```bash
cd android && ./gradlew clean && cd ../
npx react-native run-android
```

# Developer debug

```bash
cd android && ./gradlew assembleRelease && cd ../
```

# Production

At the root of the project.

```bash
npx react-native run-android --variant=release
```

## APK path

The apk is in android/app/build/outputs/apk/release/
