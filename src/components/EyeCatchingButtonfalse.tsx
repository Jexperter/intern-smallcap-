import { FunctionComponent } from "react";
import styles from "./EyeCatchingButtonfalse.module.css";

export type EyeCatchingButtonfalseType = {
  className?: string;
};

const EyeCatchingButtonfalse: FunctionComponent<EyeCatchingButtonfalseType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.eyeCatchingButtonfalse, className].join(" ")} />
  );
};

export default EyeCatchingButtonfalse;
