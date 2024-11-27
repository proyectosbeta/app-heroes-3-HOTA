module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
};
