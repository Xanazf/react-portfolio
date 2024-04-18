import Billboard from "../../assets/components/Billboard/Billboard";
import styles from "./Name.module.css";
import { LanguageContext } from "../../lang/LanguageContext";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";

const Name = () => {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const catsvg = theme === "light" ? "cat_wink" : "cat";
  return (
    <div className={styles.name_wrapper}>
      <Billboard svg={catsvg} text={t("name")} img="PNG/basepalette_vt.png" />
    </div>
  );
};

export default Name;
