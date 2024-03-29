import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.herowrap}>
      <div className={styles.imgwrap}>
        <img
          alt="catlogo"
          width="100%"
          height="100%"
          src="/PNG/catlogo_nobg.png"
        />
      </div>
      <div className={styles.catchphrasewrap}>
        <span className={styles.cybrspan}>
          A curious <em>curious</em> cat
          <span aria-hidden className={styles.cybrglitch}>
            A curious <em>curious</em> cat
          </span>
        </span>
        <span className={styles.cybrspan}>
          has code code
          <span aria-hidden className={styles.cybrglitch}>
            has code code
          </span>
        </span>
        <span className={styles.cybrspan}>
          of a <em>curious</em> <mark>kind_</mark>
          <span className={styles.cybrglitch}>
            of a curious <em>curious</em> kind_
          </span>
        </span>
      </div>
    </div>
  );
};

export default Hero;
