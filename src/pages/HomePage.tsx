import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterLinks from "../components/FooterLinks";
import SubscribeInput from "../components/SubscribeInput";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <FrameComponent5 />
      <div className={styles.trend}>
        <img className={styles.trendChild} alt="" src="/rectangle-711@2x.png" />
        <img className={styles.trendItem} alt="" src="/rectangle-711@2x.png" />
        <img className={styles.trendInner} alt="" src="/rectangle-711@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-711@2x.png"
        />
        <img
          className={styles.trendChild1}
          alt=""
          src="/rectangle-711@2x.png"
        />
        <img className={styles.ana21Icon} alt="" src="/ana2-1@2x.png" />
        <img className={styles.ana23Icon} alt="" src="/ana2-1@2x.png" />
        <img className={styles.ana24Icon} alt="" src="/ana2-1@2x.png" />
        <img className={styles.ana25Icon} alt="" src="/ana2-1@2x.png" />
        <img className={styles.ana22Icon} alt="" src="/ana2-1@2x.png" />
      </div>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <img className={styles.image106Icon} alt="" src="/image-106@2x.png" />
      <FrameComponent1 />
      <FrameComponent />
      <footer className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/rectangle-22.svg" />
        <div className={styles.footerBackground} />
        <div className={styles.topLine}>
          <div className={styles.topLineChild} />
          <div className={styles.topLineItem} />
        </div>
        <div className={styles.footerContent}>
          <FooterLinks />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.infoSocial}>
            <div className={styles.infoContainer}>
              <div className={styles.infosmallcapcom}>info@smallcap.com</div>
              <div className={styles.socialIcons}>
                <div className={styles.twitter}>
                  <div className={styles.twitterChild} />
                  <img
                    className={styles.twitter1Icon}
                    loading="lazy"
                    alt=""
                    src="/twitter-1@2x.png"
                  />
                </div>
                <div className={styles.facebook}>
                  <div className={styles.facebookChild} />
                  <img
                    className={styles.facebook1Icon}
                    loading="lazy"
                    alt=""
                    src="/facebook-1@2x.png"
                  />
                </div>
                <div className={styles.instagram}>
                  <div className={styles.instagramChild} />
                  <img
                    className={styles.instagram1Icon}
                    loading="lazy"
                    alt=""
                    src="/instagram-1@2x.png"
                  />
                </div>
                <div className={styles.linkedin}>
                  <div className={styles.linkedinChild} />
                  <img
                    className={styles.linkedin1Icon}
                    loading="lazy"
                    alt=""
                    src="/linkedin-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerSubscribe}>
          <SubscribeInput />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
