import styles from "../styles/style.module.css";
import { Link } from "react-router-dom";
import undrawWelcome from "/undraw_welcome_re_h3d9.svg";
import educationIllustration from "/education-illustration.svg";
import organizationProjects from "/organization-projects.svg";

const MainHome = () => {
  return (
    <main id="main">
      <section className={styles.hero} id="hero">
        <div className={`${styles.container} ${styles.hero__container}`}>
          <div
            className={`${styles.hero__container__left} ${styles.container__left}`}
          >
            <h1 className={styles.hero__slogan}>
              Let&apos;s start building a new generation
            </h1>
            <div className={styles["hero__call-to-action"]}>
              <Link
                aria-label="Login to Abba School"
                className={`${styles.btn} ${styles.btn__secondary}`}
                to="login"
                role="button"
                tabIndex="0"
              >
                Login
              </Link>
              <Link
                aria-label="Login to Abba School"
                className={`${styles.btn} ${styles.btn__secondary}`}
                to="register"
                role="button"
                tabIndex="0"
              >
                Register
              </Link>
            </div>
          </div>
          <div
            className={`${styles.hero__container__right} ${styles.container__right} ${styles.illustration}`}
          >
            <img src={undrawWelcome} />
          </div>
        </div>
        <div className={styles.hero__curve}>
          <svg
            data-name="Layer 1"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="shape-fill"
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            />
          </svg>
        </div>
      </section>
      <section className={styles.about__us} id="about">
        <div className={`${styles.container} ${styles.about__container}`}>
          <div
            className={`${styles.about__container__left} ${styles.container__left} ${styles.illustration}`}
          >
            <img src={educationIllustration} />
          </div>
          <div
            className={`${styles.about__container__right} ${styles.container__right}`}
          >
            <h2 className={styles.heading__2}>About The School</h2>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              labore iure nemo quos, dolore, odio sit sed rerum magni neque
              reiciendis repudiandae eum fugit voluptas nulla iusto earum
              inventore sequi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <Link className={styles.header__desc__link} to="about" tabIndex="0">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.login} id="login">
        <div className={`${styles.container} ${styles.login__container}`}>
          <div
            className={`${styles.login__container__left} ${styles.container__left}`}
          >
            <h2 className={styles.heading__2}>Login</h2>
            <form className={styles.login__form}>
              <div className={styles.username__input}>
                <input placeholder="Name" required type="text" />
              </div>
              <div className={styles.email__input}>
                <input placeholder="Email" required type="email" />
              </div>
              <div className={styles.password__input}>
                <input placeholder="Password" required type="password" />
              </div>
              <button
                className={`${styles.btn} ${styles.btn__secondary} ${styles.login__button}`}
              >
                Login
              </button>
            </form>
          </div>
          <div
            className={`${styles.login__container__right} ${styles.container__right} ${styles.illustration}`}
          >
            <img src={organizationProjects} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainHome;
