import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.headerWrapper, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <header className={styles.topRectangle} />
          <div className={styles.topButtonContact}>
            <div className={styles.homeButtons}>
              <a className={styles.home}>Home</a>
            </div>
            <img
              className={styles.topButtonContactChild}
              loading="lazy"
              alt=""
            />
          </div>
          <img
            className={styles.ns1Icon}
            loading="lazy"
            alt=""
            src="/3ns-1@2x.png"
          />
          <button className={styles.group1SignUp}>
            <div className={styles.group1SignUpChild} />
            <div className={styles.topButtonContact1}>
              <a className={styles.home1}>Sign Up</a>
              <img className={styles.topButtonContactItem} alt="" />
            </div>
          </button>
          <button className={styles.group2Login}>
            <div className={styles.group2LoginChild} />
            <div className={styles.topButtonContact2}>
              <div className={styles.homeWrapper}>
                <a className={styles.home2}>Login</a>
              </div>
              <img className={styles.topButtonContactInner} alt="" />
            </div>
          </button>
          <div className={styles.topButtonAbout}>
            <div className={styles.homeContainer}>
              <a className={styles.home3}>About</a>
            </div>
            <img className={styles.topButtonAboutChild} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
