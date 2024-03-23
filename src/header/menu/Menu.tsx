import { LanguageContext } from "../../lang/LanguageContext";
import LanguageSelector from "../../lang/LanguageSelector";
import { ThemeSelector } from "../../theme/ThemeSelector";
import styles from "./Menu.module.css";
import { useContext, useState } from "react";

const Menu = () => {
  const [pressed, setPressed] = useState(false);

  const handleToggle = () => {
    setPressed(!pressed);
  };

  const { t } = useContext(LanguageContext);

  return (
    <nav className={styles.base}>
      <ul>
        <li className={styles.dropdown_container}>
          <button aria-pressed={pressed} onClick={handleToggle}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect
                width="18"
                fill="red"
                height="1.5"
                ry="0.75"
                x="3"
                y="6.25"
              />
              <rect
                width="18"
                fill="red"
                height="1.5"
                ry="0.75"
                x="3"
                y="11.25"
              />
              <rect
                width="18"
                fill="red"
                height="1.5"
                ry="0.75"
                x="3"
                y="16.25"
              />
            </svg>
          </button>
          <div className={styles.dropdown_wrapper}>
            <ul
              className={`${styles.dropdown_menu} ${
                pressed ? styles.dropdown_active : ""
              }`}
            >
              <li className={styles.menu_item}>
                <LanguageSelector />
              </li>
              <li className={styles.menu_item}>
                <span>{t("theme")} &nbsp;</span>
                <ThemeSelector />
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#backend">Backend</a>
          {/* <span className="material-icons-outlined">chevron_right</span> */}
        </li>
        <li>
          <a href="#devops">DevOps</a>
        </li>
        <li>
          <a href="#frontend">Frontend</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
