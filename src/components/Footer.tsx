import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-21.svg"
              />
            </div>
            <b className={styles.skydrone}>SKYDRONE</b>
          </div>
        </div>
        <div className={styles.contentChild}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
            <img
              className={styles.savannaSystemAcknowledgement}
              loading="lazy"
              alt=""
              src="/frame-13.svg"
            />
            <img
              className={styles.divprogressIcon}
              loading="lazy"
              alt=""
              src="/frame-12.svg"
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.links}>
            <div className={styles.divcolmd}>
              <b className={styles.clients}>Clients</b>
              <b className={styles.features}>Features</b>
              <b className={styles.downloadApp}>Download App</b>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.dividerParent}>
        <div className={styles.divider} />
        <div className={styles.row}>
          <div className={styles.privacyPolicyParent}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsOfService}>Terms of Service</div>
            <div className={styles.cookiesSettings}>Cookies Settings</div>
          </div>
          <div className={styles.copyright2022}>
            Copyright © 2022. SkyDrone by @apta.agency
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
