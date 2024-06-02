import { FunctionComponent } from "react";
import Content1 from "./Content1";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.row}>
        <Content1
          iconEmail="/icon--email.svg"
          email="Email"
          contactskydronecombr="contact@skydrone.com.br"
        />
        <Content1
          iconEmail="/icon--phone.svg"
          email="Phone"
          contactskydronecombr="+55 51 99999-9999"
        />
        <Content1
          iconEmail="/icon--pin.svg"
          email="Address"
          contactskydronecombr="451-487 Quincy St, Maywood, IL 60153, USA"
        />
      </div>
      <img
        className={styles.screenShot20221025At141}
        loading="lazy"
        alt=""
        src="/screen-shot-20221025-at-1413-1@2x.png"
      />
    </section>
  );
};

export default Content;
