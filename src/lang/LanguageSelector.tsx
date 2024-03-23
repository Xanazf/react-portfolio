import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Cookies from "js-cookie";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);

    Cookies.set("language", lang);
  };

  // console.log(t("hello"), language);

  return (
    <>
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </>
  );
};

export default LanguageSelector;