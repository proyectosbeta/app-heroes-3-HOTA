import LocalizedStrings from 'react-native-localization';

export const DEFAULT_LANGUAGE = 'es';

const esLanguage = require('i18n/es.json');
const enLanguage = require('i18n/en.json');
const translations = {
  es: esLanguage,
  en: enLanguage,
};

export default new LocalizedStrings(translations);