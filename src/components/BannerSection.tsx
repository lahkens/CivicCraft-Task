import { FunctionComponent } from "react";
import styles from "./BannerSection.module.css";

export type BannerSectionType = {
  className?: string;
};

const BannerSection: FunctionComponent<BannerSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bannerSection, className].join(" ")}>
      <b className={styles.dailyUpdates}>Daily Updates</b>
      <div className={styles.bannerSectionInner}>
      <div className={styles.ellipseDiv} />
        <div className={styles.frameChild} />
      </div>
      <b className={styles.saveMoney}>Save Money</b>
      <div className={styles.bannerSectionChild}>
      <div className={styles.ellipseDiv} />
        <div className={styles.frameItem} />
      </div>
      <b className={styles.modernTechnology}>Modern Technology</b>
      <div className={styles.frameDiv}>
      <div className={styles.ellipseDiv} />
        <div className={styles.frameInner} />
      </div>
      <b className={styles.drones}>Drones</b>
      <div className={styles.bannerSectionInner1}>
        <div className={styles.ellipseDiv} />
      </div>
      <b className={styles.farms}>Farms</b>
    </div>
  );
};

export default BannerSection;
