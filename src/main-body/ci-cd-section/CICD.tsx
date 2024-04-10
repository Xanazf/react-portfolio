import styles from "./CICD.module.css";

const CICD = () => {
  return (
    <div className={styles.cicdwrap}>
      <h4>CI/CD</h4>
      <ul className={styles.cicdlist}>
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

export default CICD;
