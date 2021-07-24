import LocalizedStrings from 'react-native-localization';

export const DEFAULT_LANGUAGE = 'es';

const esLanguage = require('i18n/es.json');
const enLanguage = require('i18n/en.json');
const plLanguage = require('i18n/pl.json');
const ruLanguage = require('i18n/ru.json');
const translations = {
  es: esLanguage,
  en: enLanguage,
  pl: plLanguage,
  ru: ruLanguage,
};

export default new LocalizedStrings(translations);