
import { useState } from "react";
import translations from "../utils/translations";

export function useTranslation(defaultLanguage) {
  const [language, setLanguage] = useState(defaultLanguage);

  // Fungsi untuk mengganti bahasa
  function changeLanguage(newLanguage) {
    setLanguage(newLanguage);
  }

  // Fungsi untuk mendapatkan teks dalam bahasa yang sesuai
  function t(key) {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    // Jika teks tidak ditemukan, Anda bisa mengembalikan teks asli atau teks default.
    return key;
  }

  return { language, changeLanguage, t };
}
