import styles from "./Backend.module.css";

const Backend = () => {
  return (
    <div className={styles.backendwrap}>
      <h4>Backend</h4>
      <ul className={styles.backendlist}>
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

export default Backend;
