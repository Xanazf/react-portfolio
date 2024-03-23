// LanguageContext.tsx
import React, { createContext, useState } from "react";
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
  setLanguage: (_lang: string) => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
