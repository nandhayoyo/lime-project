// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./public/locales/en.json";
import translationID from "./public/locales/id.json";

const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Bahasa default
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
