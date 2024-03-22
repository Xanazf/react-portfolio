import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.base}>
      <ul>
        <li>
          <a href="#backend">Backend</a>
          {/* <span className="material-icons-outlined">chevron_right</span> */}
        </li>
        <li>
          <a href="#devops">DevOps</a>
        </li>
        <li>
          <a href="frontend">Frontend</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
