import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.hamburger}>
        <button className={styles.navTopBarmobile}>
          <div className={styles.logoComponents}>
            <img className={styles.logoicon} alt="" src="/logoicon.svg" />
            <div className={styles.logotext}>
              <b className={styles.logotext1}>All</b>
            </div>
          </div>
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
        </button>
        <div className={styles.navTopBarmobile1}>
          <div className={styles.logoComponents1}>
            <img className={styles.logoicon1} alt="" src="/logoicon.svg" />
            <div className={styles.logotext2}>
              <b className={styles.logotext3}>Coin</b>
            </div>
          </div>
          <img className={styles.menuIcon1} alt="" src="/menu-1.svg" />
        </div>
        <div className={styles.navTopBarmobile2}>
          <div className={styles.logoComponents2}>
            <img className={styles.logoicon2} alt="" src="/logoicon.svg" />
            <div className={styles.logotext4}>
              <b className={styles.logotext5}>Token</b>
            </div>
          </div>
          <img className={styles.menuIcon2} alt="" src="/menu-2.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
