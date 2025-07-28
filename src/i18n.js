import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import header_en from './locales/en/header.json';
import header_ru from './locales/ru/header.json';
import header_fr from './locales/fr/header.json';
import header_es from './locales/es/header.json';
import header_ua from './locales/ua/header.json';

import footer_en from './locales/en/footer.json';
import footer_ru from './locales/ru/footer.json';
import footer_fr from './locales/fr/footer.json';
import footer_es from './locales/es/footer.json';
import footer_ua from './locales/ua/footer.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { header: header_en, footer: footer_en },
    ru: { header: header_ru, footer: footer_ru },
    fr: { header: header_fr, footer: footer_fr },
    es: { header: header_es, footer: footer_es },
    ua: { header: header_ua, footer: footer_ua },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  ns: ['header', 'footer'],
  defaultNS: 'header',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
