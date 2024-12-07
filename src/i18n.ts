import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Çeviri dosyalarını yüklemek için
  .use(LanguageDetector) // Tarayıcı dilini algılar
  .use(initReactI18next) // React ile entegrasyon
  .init({
    fallbackLng: "tr", // Varsayılan dil (Türkçe)
    supportedLngs: ["tr", "en"], // Desteklenen diller
    debug: false, // Geliştirme sırasında hata ayıklama
    interpolation: {
      escapeValue: false, // React için gerekli
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Çeviri dosyalarının yolu
    },
    detection: {
      order: ["localStorage", "navigator"], // Önce localStorage, sonra tarayıcı diline bakar
      caches: ["localStorage"], // Kullanıcı tercihlerini localStorage'da saklar
    },
  });

export default i18n;
