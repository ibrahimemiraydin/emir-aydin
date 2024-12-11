import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Sayfa yüklendiğinde tarayıcı dilini algıla ve ayarla
  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    if (!["tr", "en"].includes(browserLanguage)) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage(browserLanguage);
    }
  }, [i18n]);

  // Dil değiştirme fonksiyonu
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer className="p-6 bg-gray-100 dark:bg-gray-900 text-center">
      {/* Telif Hakkı Yazısı */}
      <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </p>

      {/* Dil Değişim Butonları */}
      <div className="mt-4 space-x-4">
        <button
          onClick={() => handleLanguageChange("tr")}
          className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${
            i18n.language === "tr"
              ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
              : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          }`}
        >
          {t("footer.language.turkish")}
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${
            i18n.language === "en"
              ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
              : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          }`}
        >
          {t("footer.language.english")}
        </button>
      </div>
    </footer>
  );
};

export default Footer;