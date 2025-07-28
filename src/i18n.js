import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import header_en from './locales/en/header.json';
import header_ru from './locales/ru/header.json';
import header_fr from './locales/fr/header.json';
import header_es from './locales/es/header.json';
import header_ua from './locales/ua/header.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { header: header_en },
    ru: { header: header_ru },
    fr: { header: header_fr },
    es: { header: header_es },
    ua: { header: header_ua },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  ns: ['header'],
  defaultNS: 'header',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
