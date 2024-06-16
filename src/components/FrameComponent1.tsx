import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import EyeCatchingButtonfalse from "./EyeCatchingButtonfalse";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactUsWrapper, className].join(" ")}>
      <div className={styles.contactUs}>
        <div className={styles.formContainer}>
          <img
            className={styles.background1Icon}
            alt=""
            src="/background-1@2x.png"
          />
          <img
            className={styles.images1Icon}
            loading="lazy"
            alt=""
            src="/images-1@2x.png"
          />
        </div>
        <div className={styles.welcomeTitle}>
          <div className={styles.title}>
            <h2 className={styles.welcomeToSmallCap}>Contact Us</h2>
          </div>
        </div>
        <div className={styles.getInTouch}>
          <div className={styles.getInTouchContainer}>
            <div className={styles.touchForm}>
              <div className={styles.formHeading}>
                <h3 className={styles.getInTouch1}>GET IN TOUCH !</h3>
                <div className={styles.touchDescription}>
                  <p className={styles.needToGet}>
                    Need to get in touch with us ? Either fill out the form with
                    your inquiry .
                  </p>
                </div>
              </div>
              <div className={styles.fullNameEmail}>
                <div className={styles.inputFields}>
                  <div className={styles.inputContainer}>
                    <i className={styles.fullName}>{`Full Name `}</i>
                    <i className={styles.emailAddress}>Email Address</i>
                    <div className={styles.inputIcons}>
                      <img
                        className={styles.inputIconsChild}
                        alt=""
                        src="/rectangle-27.svg"
                      />
                      <img
                        className={styles.iconUserIcon}
                        loading="lazy"
                        alt=""
                        src="/-icon-user-icon.svg"
                      />
                      <img
                        className={styles.iconEnvelopeIcon}
                        loading="lazy"
                        alt=""
                        src="/-icon-envelope-icon.svg"
                      />
                    </div>
                  </div>
                  <textarea
                    className={styles.messageField}
                    placeholder="Message ..."
                    rows={8}
                    cols={27}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sendMessage}>
            <Button
              className={styles.button}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#925b9e",
                borderRadius: "999px",
                "&:hover": { background: "#925b9e" },
                width: 146,
                height: 62,
              }}
            >
              Send
            </Button>
            <EyeCatchingButtonfalse />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
