import { FunctionComponent } from "react";
import styles from "./Content1.module.css";

export type Content1Type = {
  className?: string;
  iconEmail?: string;
  email?: string;
  contactskydronecombr?: string;
};

const Content1: FunctionComponent<Content1Type> = ({
  className = "",
  iconEmail,
  email,
  contactskydronecombr,
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <img className={styles.iconEmail} loading="lazy" alt="" src={iconEmail} />
      <div className={styles.contactInfo}>
        <b className={styles.email}>{email}</b>
        <div className={styles.contactskydronecombr}>
          {contactskydronecombr}
        </div>
      </div>
    </div>
  );
};

export default Content1;
