import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Cookies from "js-cookie";
import styles from "./LanguageSelector.module.css";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);

    Cookies.set("language", lang);
  };

  return (
    <>
      <select
        id="languageselect"
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className={styles.selectbase}
      >
        <option id="en" value="en">
          English
        </option>
        <option id="uk" value="uk">
          Українська
        </option>
      </select>
    </>
  );
};

export default LanguageSelector;
