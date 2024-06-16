import { FunctionComponent } from "react";
import styles from "./SubscribeInput.module.css";

export type SubscribeInputType = {
  className?: string;
};

const SubscribeInput: FunctionComponent<SubscribeInputType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subscribeInput, className].join(" ")}>
      <div className={styles.subscribeField}>
        <div className={styles.subscribe}>Subscribe</div>
      </div>
      <div className={styles.inputBackground} />
      <div className={styles.submitContainer}>
        <button className={styles.primaryButton}>
          <div className={styles.buttonBackground} />
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
    </div>
  );
};

export default SubscribeInput;
