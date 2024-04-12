import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerwrap}>
      <span>
        <img rel="icon" width={100} src="/SVG/arch.svg" />
      </span>
      <span>
        <img rel="icon" width={100} src="/SVG/vite.svg" />
      </span>
      <span>
        <img rel="icon" width={100} src="/SVG/codepen.svg" />
      </span>
    </div>
  );
};

export default Footer;
