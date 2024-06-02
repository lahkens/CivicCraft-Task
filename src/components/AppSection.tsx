import { FunctionComponent } from "react";
import styles from "./AppSection.module.css";

export type AppSectionType = {
  className?: string;
};

const AppSection: FunctionComponent<AppSectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.appSection, className].join(" ")}>
      <div className={styles.downloadOurAppParent}>
        <h2 className={styles.downloadOurApp}>Download our app</h2>
        <div className={styles.wereAnAgtech}>
          We're an agtech company with a clear mission: to revolutionize farming
          by using AI and drone technology.
        </div>
      </div>
      <div className={styles.storeButtonsWrapper}>
        <div className={styles.storeButtons}>
          <img
            className={styles.appStoreIcon}
            loading="lazy"
            alt=""
            src="/app-store.svg"
          />
          <img
            className={styles.playIcon}
            loading="lazy"
            alt=""
            src="/play.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AppSection;
