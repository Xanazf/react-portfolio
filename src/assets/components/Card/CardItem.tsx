import SvgIcon from "../svg/SVGRenderer";
import styles from "./CardItem.module.css";
import React, { useEffect, useRef, useState } from "react";

interface CardItemProps {
  skill: string;
  value: number;
}

const skillcolors: { [key: string]: string } = {
  typescript: "var(--gradient_color-2)",
  node: "lime",
  bash: "var(--common_gray)",
  python: "var(--cicd_yellow)",
  lua: "blue",
  git: "var(--gmail_red)",
  linux: "lightblue",
  k8s: "#1313ff",
  database: "lime",
  cloud: "#1f90ff",
  css3: "#0f13ff",
  react: "#3f90ff",
  angular: "#ff3f3f",
};
const CardItem: React.FC<CardItemProps> = (props) => {
  const skill = props.skill;
  const value = props.value;
  const barRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            resetValues();
          }
        });
      },
      { threshold: 1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  const resetValues = () => {
    setIsVisible(false);
    if (numberRef.current) {
      numberRef.current.textContent = "0";
    }
    if (barRef.current) {
      barRef.current.style.setProperty("--bar-width", "0%");
    }
  };

  useEffect(() => {
    let currentValue = 0;
    // const interval = 20; // animation speed in future

    const animateValue = () => {
      if (currentValue < value && isVisible) {
        currentValue += 1;
        if (numberRef.current) {
          numberRef.current.textContent = currentValue.toString();
        }
        if (barRef.current) {
          barRef.current.style.setProperty(
            "--bar-width",
            `${(currentValue / 10) * 100}%`
          );
        }
        requestAnimationFrame(animateValue);
      }
    };

    if (isVisible) {
      requestAnimationFrame(animateValue);
    }
  }, [value, isVisible]);
  return (
    <div className={styles.carditem_wrapper}>
      <div className={styles.carditem}>
        <span>
          <SvgIcon
            src={skill}
            svgProp={{
              width: 50,
              height: 50,
              fill: skillcolors[skill],
            }}
          />
        </span>
        <b className={styles.b1} ref={numberRef}>
          0
        </b>
        <div className={styles.bar} ref={barRef}>
          <wbr />
        </div>
        <b className={styles.b2}>10</b>
      </div>
    </div>
  );
};

export default CardItem;
