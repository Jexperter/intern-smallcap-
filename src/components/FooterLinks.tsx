import { FunctionComponent } from "react";
import styles from "./FooterLinks.module.css";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: FunctionComponent<FooterLinksType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.footerLinks, className].join(" ")}>
      <div className={styles.copyright}>
        <div className={styles.copyrightInfo}>
          <div className={styles.nsai}>©2024. 3ns.ai</div>
          <img
            className={styles.ns2Icon}
            loading="lazy"
            alt=""
            src="/3ns-2@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProduct}>
        <div className={styles.company}>Company</div>
        <div className={styles.homeProductLinks}>
          <div className={styles.homeFormLinks}>
            <div className={styles.home}>Home</div>
            <a className={styles.about}>About</a>
            <a className={styles.roadMap}>Road Map</a>
          </div>
        </div>
      </div>
      <div className={styles.companyProduct1}>
        <div className={styles.product}>Product</div>
        <div className={styles.companyProductInner}>
          <div className={styles.formParent}>
            <div className={styles.form}>Form</div>
            <div className={styles.token}>Token</div>
            <a className={styles.faq}>FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
