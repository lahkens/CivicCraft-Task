import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./TestimonialSection.module.css";

export type TestimonialSectionType = {
  className?: string;
};

const TestimonialSection: FunctionComponent<TestimonialSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialSection, className].join(" ")}>
      <section className={styles.content}>
        <Column avatarImage="/avatar-image@2x.png" />
        <Column avatarImage="/avatar-image-1@2x.png" />
        <Column avatarImage="/avatar-image-2@2x.png" />
      </section>
    </div>
  );
};

export default TestimonialSection;
