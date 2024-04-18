import styles from "./Billboard.module.css";
import { ThemeContext } from "../../../theme/ThemeContext";
import { useContext, useRef, useState } from "react";
import SvgIcon from "../svg/SVGRenderer";

interface BillboardProps {
  svg: string;
  img: string;
  text: string;
}
const Billboard = (props: BillboardProps) => {
  const svg = props.svg;
  const img = props.img;
  const text = props.text;

  const nameRef = useRef<HTMLHeadingElement>(null);
  const [glitchy, setGlitchy] = useState<boolean>(false);

  const { theme } = useContext(ThemeContext);
  const stroke =
    theme === "light" ? "var(--dark_primary)" : "var(--gradient_color-3)";
  const filter =
    theme === "light" ? "" : "drop-shadow(0 0 6px var(--gradient_color-3))";
  const handleMouseOnName = () => {
    const namebase = nameRef.current;
    const randomNum = Math.random();
    if (namebase) {
      if (randomNum < 0.5) {
        setGlitchy(true);
      } else {
        setGlitchy(false);
      }
    }
  };
  const handleMouseOffName = () => {
    const namebase = nameRef.current;
    const randomNum = Math.random();
    if (namebase) {
      if (randomNum < 0.5) {
        setGlitchy(true);
      } else {
        setGlitchy(false);
      }
    }
  };
  return (
    <div
      className={`${styles.billboard_wrapper} ${
        theme === "dark" ? `${styles.dark}` : ""
      }`}
    >
      <div className={styles.billboard}>
        <section className={styles.svg_wrapper}>
          <SvgIcon
            src={svg}
            svgProp={{
              width: 100,
              height: 100,
              stroke: stroke,
              filter: filter,
            }}
          />
        </section>
        <div className={styles.content_wrapper}>
          <section
            className={`${glitchy ? `${styles.glitchy}` : ""}`}
            onMouseEnter={handleMouseOnName}
            onMouseLeave={handleMouseOffName}
          >
            <h1 className={styles.h1} ref={nameRef}>
              {text}
            </h1>
          </section>
          <section className={styles.img_wrapper}>
            <img src={img} width="60%" height="100%" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
