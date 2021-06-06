module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          constants: './app/constants',
          i18n: './app/i18n',
          navigation: './app/navigation',
          screens: './app/screens',
          services: './app/services',
        },
      },
    ],
  ],
};