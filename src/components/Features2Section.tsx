import { FunctionComponent } from "react";
import ListItem from "./ListItem";
import styles from "./Features2Section.module.css";

export type Features2SectionType = {
  className?: string;
};

const Features2Section: FunctionComponent<Features2SectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.features2Section, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <b className={styles.powerfulSimplicity}>Powerful simplicity</b>
          <h1 className={styles.enterTheFuture}>Enter the future of farming</h1>
        </div>
        <div className={styles.list}>
          <ListItem
            listItemIcon="/frame-61.svg"
            modernMachinery="Pest control"
            loremIpsumDolorSitAmetCon="We provide all the data you need to know about your crops in just a few clicks."
          />
          <div className={styles.listItem}>
            <div className={styles.wrapperPlanosDoBasicoAoCo}>
              <img
                className={styles.planosDoBasicoAoCompleto}
                loading="lazy"
                alt=""
                src="/frame-6-11.svg"
              />
            </div>
            <b className={styles.aiPoweredScanning}>AI-powered scanning</b>
            <div className={styles.loremIpsumDolor}>
              Skydrone uses AI, machine learning and computer vision for
              real-time crop scanning.
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.placeholderImage}
        loading="lazy"
        alt=""
        src="/placeholder--image1@2x.png"
      />
    </div>
  );
};

export default Features2Section;
