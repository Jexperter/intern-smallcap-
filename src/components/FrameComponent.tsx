import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.subscribeContainerWrapper, className].join(" ")}
    >
      <div className={styles.subscribeContainer}>
        <div className={styles.subscriptionForm}>
          <div className={styles.envelopeIcon}>
            <img
              className={styles.iconEnvelopeWarn}
              loading="lazy"
              alt=""
              src="/-icon-envelope-warn.svg"
            />
          </div>
          <div className={styles.subscribeHeading}>
            <div className={styles.subscribeTitle}>
              <b className={styles.subscribeNow}>Subscribe Now!</b>
            </div>
            <div className={styles.enterYourEmail}>
              Enter your email to receive daily update
            </div>
          </div>
        </div>
        <div className={styles.emailInput}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.emailAddressWrapper}>
              <i className={styles.emailAddress}>Email Address</i>
            </div>
            <Button
              className={styles.subscribeButtonContainer}
              disableElevation
              variant="text"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                borderRadius: "0px 0px 0px 0px",
                width: 162,
                height: 66,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
