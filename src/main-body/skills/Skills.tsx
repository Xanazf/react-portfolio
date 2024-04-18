import styles from "./Skills.module.css";
import { LanguageContext } from "../../lang/LanguageContext";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import Card from "../../assets/components/Card/Card";

interface Skillobj {
  [key: string]: number;
}

const backendobj: Skillobj = {
  typescript: 10,
  node: 10,
  bash: 8,
  python: 8,
  lua: 7,
};

const cicdobj: Skillobj = {
  git: 10,
  linux: 10,
  k8s: 7,
  database: 7,
  cloud: 10,
};

const frontendobj: Skillobj = {
  css3: 10,
  react: 9,
  solid: 7,
  angular: 7,
};
const Skills = () => {
  const [activeContent, setActiveContent] = useState("backend");
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const handleNavClick = (contentID: string) => {
    setActiveContent(contentID);
  };
  return (
    <div className={styles.skills_wrapper}>
      <nav className={styles.content_select}>
        <a
          href="#backend"
          className={
            activeContent === "backend" ? `${styles.backend_nav_glow}` : ""
          }
          onClick={() => handleNavClick("backend")}
        >
          backend
        </a>
        <a
          href="#cicd"
          className={activeContent === "cicd" ? `${styles.cicd_nav_glow}` : ""}
          onClick={() => handleNavClick("cicd")}
        >
          ci/cd
        </a>
        <a
          href="#frontend"
          className={
            activeContent === "frontend" ? `${styles.frontend_nav_glow}` : ""
          }
          onClick={() => handleNavClick("frontend")}
        >
          frontend
        </a>
      </nav>
      <div className={styles.content_wrapper}>
        <div className={styles.content_slider} data-active={activeContent}>
          <article className={styles.content_item} id="backend">
            <Card values={backendobj} />
          </article>
          <article className={styles.content_item} id="cicd">
            <Card values={cicdobj} />
          </article>
          <article className={styles.content_item} id="frontend">
            <Card values={frontendobj} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skills;
