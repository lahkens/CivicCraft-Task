import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  avatarImage?: string;
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  avatarImage,
}) => {
  return (
    <div className={[styles.column, className].join(" ")}>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImageIcon}
          loading="lazy"
          alt=""
          src={avatarImage}
        />
        <div className={styles.avatarContent}>
          <b className={styles.customerName}>Customer name</b>
          <div className={styles.positionCompanyName}>
            Position, Company name
          </div>
        </div>
      </div>
      <blockquote className={styles.aCustomerTestimonial}>
        "A customer testimonial that highlights features and answers potential
        customer doubts about your product or service. Showcase testimonials
        from a similar demographic to your customers."
      </blockquote>
    </div>
  );
};

export default Column;
