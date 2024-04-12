import { useRef, useCallback, useEffect } from "react";
import styles from "./Frontend.module.css";

const Frontend = () => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    itemRefs.current.forEach((itemRef) => {
      if (itemRef) {
        observer.observe(itemRef);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      itemRefs.current.forEach((itemRef) => {
        if (itemRef) {
          observer.unobserve(itemRef);
        }
      });
    };
  }, [handleIntersection]);

  const addItemRef = useCallback((ref: HTMLLIElement | null) => {
    if (ref) {
      itemRefs.current.push(ref);
    }
  }, []);
  return (
    <div className={styles.frontendwrap}>
      <h4>Frontend</h4>
      <ul className={styles.frontendlist}>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/language-css3.svg" />
            <em>CSS</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/react.svg" />
            <em>React</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/solid.svg" />
            <em>Solid</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/angular.svg" />
            <em>Angular</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
      </ul>
    </div>
  );
};

export default Frontend;
