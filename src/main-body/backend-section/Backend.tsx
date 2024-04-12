import { useRef, useCallback, useEffect } from "react";
import styles from "./Backend.module.css";

const Backend = () => {
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
    <div className={styles.backendwrap}>
      <h4>Backend</h4>
      <ul className={styles.backendlist}>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/nodejs.svg" />
            <em>Node</em>
          </span>
          <b className={styles.b1}>0</b>
          <div>
            <wbr />
          </div>
          <b className={styles.b2}>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/bash.svg" />
            <em>Bash</em>
          </span>
          <b className={styles.b1}>0</b>
          <div>
            <wbr />
          </div>
          <b className={styles.b2}>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/language-python.svg" />
            <em>Python</em>
          </span>
          <b className={styles.b1}>0</b>
          <div>
            <wbr />
          </div>
          <b className={styles.b2}>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/language-lua.svg" />
            <em>Lua</em>
          </span>
          <b className={styles.b1}>0</b>
          <div>
            <wbr />
          </div>
          <b className={styles.b2}>10</b>
        </li>
      </ul>
    </div>
  );
};

export default Backend;
