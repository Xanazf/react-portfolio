import { useRef, useCallback, useEffect } from "react";
import styles from "./CICD.module.css";

const CICD = () => {
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
    <div className={styles.cicdwrap}>
      <h4>CI/CD</h4>
      <ul className={styles.cicdlist}>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/git.svg" />
            <em>Git</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/kubernetes.svg" />
            <em>K8s</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/google-cloud.svg" />
            <em>Cloud</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem} ref={addItemRef}>
          <span>
            <img rel="icon" width={100} src="/SVG/linux.svg" />
            <em>Linux</em>
          </span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
      </ul>
    </div>
  );
};

export default CICD;
