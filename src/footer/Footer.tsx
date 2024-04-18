import SvgIcon from "../assets/components/svg/SVGRenderer";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerwrap}>
      <span>
        <SvgIcon
          src="arch"
          svgProp={{
            width: 100,
            height: 100,
          }}
        />
      </span>
      <span>
        <SvgIcon
          src="vite"
          svgProp={{
            width: 100,
            height: 100,
          }}
        />
      </span>
      <span>
        <SvgIcon
          src="codepen"
          svgProp={{
            width: 100,
            height: 100,
          }}
        />
      </span>
    </div>
  );
};

export default Footer;
