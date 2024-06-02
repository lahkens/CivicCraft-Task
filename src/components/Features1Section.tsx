import { FunctionComponent } from "react";
import ListItem from "./ListItem";
import styles from "./Features1Section.module.css";

export type Features1SectionType = {
  className?: string;
};

const Features1Section: FunctionComponent<Features1SectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.features1Section, className].join(" ")}>
      <div className={styles.wrapperPlaceholderImage}>
        <img
          className={styles.placeholderImage}
          loading="lazy"
          alt=""
          src="/placeholder--image@2x.png"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <b className={styles.modernTechnology}>Modern Technology</b>
          <b className={styles.moreThanJust}>More than just a drone company</b>
        </div>
        <div className={styles.list}>
          <ListItem
            listItemIcon="/frame-6.svg"
            modernMachinery="Modern machinery"
            loremIpsumDolorSitAmetCon="Skydrones are designed for large-scale farming operations, so that you can always stay on top of your farm's health."
          />
          <div className={styles.listItem}>
            <img
              className={styles.listItemChild}
              loading="lazy"
              alt=""
              src="/frame-6-1.svg"
            />
            <b className={styles.saveTimeAnd}>Save time and money</b>
            <div className={styles.loremIpsumDolor}>
              With easy-to-use and cost-effective aerial data collection,
              Skydrone makes it easy to monitor crops and livestock.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features1Section;
