# Description

The mobile app for Heroes 3 HOTA.
Consume the API https://github.com/proyectosbeta/api-heroes-3-HOTA

# Tecnologies

- React 17.0.xx
- React Native 0.64.xx
- Yarn 1.22.xx
- OpenJDK 14.0.xx
- Gradle 6.5

# Development

One terminal:

```
react-native start
```

Another terminal:

```
cd android && ./gradlew clean && cd ../
npx react-native run-android
```

# Developer debug

```
cd android && ./gradlew assembleRelease && cd ../
```

# Production

At the root of the project.

```
react-native run-android --variant=release
```

## APK path

The apk is in android/app/build/outputs/apk/release/
