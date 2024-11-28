# Description

The mobile app for Heroes 3 HOTA.
Consume the API https://github.com/proyectosbeta/api-heroes-3-HOTA

## Tecnologies

- React 18.2.0
- React Native 0.73.11
- Metro v0.80.12
- NodeJS v20.18.0
- Yarn 3.6.4
- Npm 10.8.2
- OpenJDK 17.0.13
- Gradle 8.3
- Android gradle plugin 7.2.1
- Sonarqube 9.5.XX

## Development

One terminal:

```bash
corepack enable
corepack prepare yarn@3.6.4 --activate
yarn set version 3.6.4
yarn --version
yarn install
npx react-native start --reset-cache
```

Another terminal:

```bash
cd android && ./gradlew clean && cd ../
npx react-native run-android
```

### Developer debug

```bash
cd android && ./gradlew assembleRelease && cd ../
```

## Dev Tools

### Lint

```bash
yarn lint
```

#### Fix

```bash
yarn lint --fix
```

## Production

At the root of the project.

```bash
npx react-native run-android --mode=release
```

### APK path

The apk is in android/app/build/outputs/apk/release/

## Quality code

### Sonarqube

- [Site](https://www.sonarqube.org/)

#### Install

##### With docker

```bash
docker pull sonarqube
docker run -d --name sonarqube -p 9100:9000 -p 9092:9092 sonarqube
```

##### Web access

```
http://localhost:9100
```

###### Credentials

- User: admin
- Password: admin

#### Use with docker

```bash
docker pull newtmitch/sonar-scanner

```

##### GNU-Linux/MacOS

Execute

```bash
docker run -ti -v /home/proyectosbeta/repositoriosGit/app-heroes-3-HOTA:/usr/src --link sonarqube newtmitch/sonar-scanner
```

##### Microsoft Windows

Execute

```bash
docker run -ti -v C:\Users\proyectosbeta\repositoriosGit\app-heroes-3-HOTA:/usr/src --link sonarqube newtmitch/sonar-scanner
```
