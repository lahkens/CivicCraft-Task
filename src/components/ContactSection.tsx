import { FunctionComponent } from "react";
import Content from "../components/Content";
import styles from "./ContactSection.module.css";

const ContactSection: FunctionComponent = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.sectionTitle}>
        <b className={styles.contact}>contact</b>
        <div className={styles.content}>
          <h1 className={styles.talkToUs}>Talk to Us</h1>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default ContactSection;
