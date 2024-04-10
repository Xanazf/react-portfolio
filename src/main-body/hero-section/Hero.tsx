import { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.css";
import HeroContent from "./HeroContent";

const Hero = () => {
  const headingRef = useRef<HTMLElement>(null);
  const [hovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const nameRef = useRef<HTMLHeadingElement>(null);
  const [glitchy, setGlitchy] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const heading = headingRef.current;
    if (heading) {
      const rect = heading.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width;
      const centerY = rect.height;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const distanceRatio = distance / maxDistance;

      const hue = 180 + distanceRatio * 90; // Cyan to violet hue range

      heading.style.setProperty(
        "--mouse-x",
        `${mousePosition.x - rect.left}px`
      );
      heading.style.setProperty("--mouse-y", `${mousePosition.y - rect.top}px`);
      heading.style.setProperty("--glow-hue", hue.toString());
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    <div className={styles.herowrap}>
      <article
        className={`${styles.headingwrap} ${
          hovered ? `${styles.hovered}` : ""
        }`}
        data-glow
        ref={headingRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.headingcontent}>
          <div className={styles.svgwrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <ellipse
                rx="7.675801"
                ry="7.551127"
                transform="matrix(1.172516 0 0 1.191875 12 12)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="-1.888536"
                x2="0"
                y2="1.888536"
                transform="matrix(1 0 0 1.266668 21 4.863592)"
                fill="none"
                stroke="#000"
                strokeWidth="0.24"
              />
              <line
                x1="0"
                y1="-1.888536"
                x2="0"
                y2="1.888536"
                transform="matrix(1 0 0 1.266668 3.000001 4.700242)"
                fill="none"
                stroke="#000"
                strokeWidth="0.24"
              />
              <line
                x1="0"
                y1="-1.888536"
                x2="0"
                y2="1.888536"
                transform="matrix(-.011381 0.999935-1.266586-.014416 5.391994 2.335319)"
                fill="none"
                stroke="#000"
                strokeWidth="0.24"
              />
              <line
                x1="0"
                y1="-1.888536"
                x2="0"
                y2="1.888536"
                transform="matrix(-.011381 0.999935-1.266586-.014416 18.608007 2.444219)"
                fill="none"
                stroke="#000"
                strokeWidth="0.24"
              />
              <line
                x1="0"
                y1="-1.888536"
                x2="0"
                y2="1.888536"
                transform="matrix(-.354102 0.935207-.811047-.30709 7.783987 9.398126)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="-1.888536"
                x2="0"
                y2="1.888536"
                transform="matrix(-.354716-.934974 0.810845-.307623 16.216014 9.399132)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
              <ellipse
                rx="1.5"
                ry="1.5"
                transform="translate(13.299488 13.700514)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
                strokeDasharray="4,4"
              />
              <ellipse
                rx="1.5"
                ry="1.5"
                transform="matrix(.125739 0.992063-.992063 0.125739 10.500001 13.676704)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
                strokeDasharray="4,4"
              />
              <ellipse
                rx="1.64"
                ry="1.64"
                transform="translate(7.783987 9.399132)"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <h1
            className={`${styles.namebase} ${
              glitchy ? `${styles.glitchyname}` : ""
            }`}
            onMouseEnter={handleMouseOnName}
            onMouseLeave={handleMouseOffName}
            ref={nameRef}
          >
            Oleksandr Marnov
          </h1>
        </div>
      </article>
      <HeroContent />
    </div>
  );
};

export default Hero;
