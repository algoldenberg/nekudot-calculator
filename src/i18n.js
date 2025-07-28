import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// header
import header_en from './locales/en/header.json';
import header_ru from './locales/ru/header.json';
import header_fr from './locales/fr/header.json';
import header_es from './locales/es/header.json';
import header_ua from './locales/ua/header.json';

// footer
import footer_en from './locales/en/footer.json';
import footer_ru from './locales/ru/footer.json';
import footer_fr from './locales/fr/footer.json';
import footer_es from './locales/es/footer.json';
import footer_ua from './locales/ua/footer.json';

// faq
import faq_en from './locales/en/faq.json';
import faq_ru from './locales/ru/faq.json';
import faq_fr from './locales/fr/faq.json';
import faq_es from './locales/es/faq.json';
import faq_ua from './locales/ua/faq.json';

// calculator
import calculator_en from './locales/en/calculator.json';
import calculator_ru from './locales/ru/calculator.json';
import calculator_fr from './locales/fr/calculator.json';
import calculator_es from './locales/es/calculator.json';
import calculator_ua from './locales/ua/calculator.json';

// form
import form_en from './locales/en/form.json';
import form_ru from './locales/ru/form.json';
import form_fr from './locales/fr/form.json';
import form_es from './locales/es/form.json';
import form_ua from './locales/ua/form.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: header_en,
      footer: footer_en,
      faq: faq_en,
      calculator: calculator_en,
      form: form_en,
    },
    ru: {
      header: header_ru,
      footer: footer_ru,
      faq: faq_ru,
      calculator: calculator_ru,
      form: form_ru,
    },
    fr: {
      header: header_fr,
      footer: footer_fr,
      faq: faq_fr,
      calculator: calculator_fr,
      form: form_fr,
    },
    es: {
      header: header_es,
      footer: footer_es,
      faq: faq_es,
      calculator: calculator_es,
      form: form_es,
    },
    ua: {
      header: header_ua,
      footer: footer_ua,
      faq: faq_ua,
      calculator: calculator_ua,
      form: form_ua,
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  ns: ['header', 'footer', 'faq', 'calculator', 'form'],
  defaultNS: 'header',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
