import Backend from "../backend-section/Backend";
import CICD from "../ci-cd-section/CICD";
import Frontend from "../frontend-section/Frontend";
import styles from "./HeroContent.module.css";
import { useState } from "react";

const HeroContent = () => {
  const [activeContent, setActiveContent] = useState("backend");

  const handleNavClick = (contentID: string) => {
    setActiveContent(contentID);
  };

  return (
    <div className={styles.herocontentwrap}>
      <nav className={styles.contentselect}>
        <a href="#backend" onClick={() => handleNavClick("backend")}>
          backend
        </a>
        <a href="#cicd" onClick={() => handleNavClick("cicd")}>
          ci/cd
        </a>
        <a href="#frontend" onClick={() => handleNavClick("frontend")}>
          frontend
        </a>
      </nav>
      <div className={styles.contentwrap}>
        <div className={styles.contentslider} data-active={activeContent}>
          <article className={styles.contentitem} id="backend">
            <Backend />
          </article>
          <article className={styles.contentitem} id="cicd">
            <CICD />
          </article>
          <article className={styles.contentitem} id="frontend">
            <Frontend />
          </article>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
