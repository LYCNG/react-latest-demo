import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend) // 加載翻譯檔案
  .use(LanguageDetector) // 自動檢測用戶語言
  .use(initReactI18next) // 集成 React
  .init({
    fallbackLng: "en", // 默認語言
    lng: "en",
    debug: true, // 開啟調試模式
    interpolation: {
      escapeValue: false, // React 自動防範 XSS，無需轉義
    },

    backend: {
      loadPath: "src/i18n/locales/{{lng}}.json",
    },

    detection: {
      // 語言檢測相關配置
      //   order: ["localStorage", "navigator"], // 優先順序
      //   caches: ["localStorage"], // 記住用戶選擇的語言
    },
  });

export default i18n;
