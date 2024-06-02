import { FunctionComponent } from "react";
import styles from "./ClientsSection.module.css";

export type ClientsSectionType = {
  className?: string;
};

const ClientsSection: FunctionComponent<ClientsSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.clientsSection, className].join(" ")}>
      <div className={styles.usedByTheWorldsMostInnovWrapper}>
        <b className={styles.usedByThe}>
          Used by the world's most innovative companies
        </b>
      </div>
      <section className={styles.logoGrid}>
        <div className={styles.logoRowOne}>
          <img
            className={styles.webflowBlack}
            loading="lazy"
            alt=""
            src="/ClientSection1.svg"
          />
          <img
            className={styles.webflowBlack1}
            loading="lazy"
            alt=""
            src="/ClientSection2.svg"
          />
          <img
            className={styles.webflowBlack2}
            loading="lazy"
            alt=""
            src="/ClientSection3.svg"
          />
          <img
            className={styles.webflowBlack3}
            loading="lazy"
            alt=""
            src="/ClientSection4.svg"
          />
        </div>
        <div className={styles.logoRowTwo}>
          <div className={styles.doubleLogo}>
            <img
              className={styles.webflowBlack4}
              loading="lazy"
              alt=""
              src="ClientSection5.svg"
            />
            <img
              className={styles.webflowBlack6}
              loading="lazy"
              alt=""
              src="/ClientSection6.svg"
            />
            <img
              className={styles.webflowBlack6}
              loading="lazy"
              alt=""
              src="/ClientSection7.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsSection;
