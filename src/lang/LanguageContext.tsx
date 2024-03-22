import React, { createContext, useState, useEffect } from "react";
import en from "./en.json";
import uk from "./uk.json";
import type { LangObj } from "./lang";
import Cookies from "js-cookie";

const translations: { [key: string]: LangObj } = {
  en,
  uk,
};

export const LanguageContext = createContext({
  language: "en",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (lang: string) => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = Cookies.get("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
