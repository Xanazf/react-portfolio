import styles from "./Frontend.module.css";

const Frontend = () => {
  return (
    <div className={styles.frontendwrap}>
      <h4>Frontend</h4>
      <ul className={styles.frontendlist}>
        <li className={styles.techitem}>
          <span>tech</span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem}>
          <span>tech</span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem}>
          <span>tech</span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
        <li className={styles.techitem}>
          <span>tech</span>
          <b>0</b>
          <div></div>
          <b>10</b>
        </li>
      </ul>
    </div>
  );
};

export default Frontend;
