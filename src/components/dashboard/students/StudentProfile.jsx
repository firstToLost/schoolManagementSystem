import joker from "/joker.jpg";

export default function StudentProfile() {
  return (
    <div className="margin-block margin-inline flex">
      <div>
        <div></div>
      </div>

      <div
        className={`${styles["general-information"]} glass padding border-radius`}
      >
        <div className={styles["profile-picture"]}>
          <img src={joker} />
        </div>
        <hr className={styles["divider"]} />
        <div>
          <p>Personal Information</p>
          <div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Full Name: </span>
              <span className={styles["info-text"]}>The Joker</span>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Gender: </span>
              <span className={styles["info-text"]}>Cis Male</span>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Grade: </span>
              <span className={styles["info-text"]}>
                12<sup>th</sup>
              </span>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Age: </span>
              <span className={styles["info-text"]}>27</span>
            </div>
          </div>
          <hr className={styles["divider"]} />
          <p>Contact Information</p>
          <div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Guardian Name: </span>
              <span className={styles["info-text"]}>Daddy Joker</span>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Gender: </span>
              <span className={styles["info-text"]}>Cis Male</span>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Grade: </span>
              <span className={styles["info-text"]}>
                12<sup>th</sup>
              </span>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info-title"]}>Age: </span>
              <span className={styles["info-text"]}>27</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
