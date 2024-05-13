import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HTTPAPI from 'i18next-http-backend';

i18n
  .use(HTTPAPI)
  .use(initReactI18next)
  .init({
    lng: 'ta', 
    fallbackLng: 'en',
    ns: ['comman'],
    backend: {
      loadPath: '/i18n/{{lng}}/{{ns}}.json',
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
