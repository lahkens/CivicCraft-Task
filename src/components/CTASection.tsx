import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./CTASection.module.css";

export type CTASectionType = {
  className?: string;
};

const CTASection: FunctionComponent<CTASectionType> = ({ className = "" }) => {
  return (
    <div className={`${styles.ctaSection} ${className}`} style={{ height: "900px" }}>
      <section className={styles.content}>
        <div className={styles.content1}>
          <h1 className={styles.dronesAreThe}>
            Drones are the future of agriculture
          </h1>
          <div className={styles.getABirds}>
            Get a bird's eye view of your fields and get a more accurate
            estimation of crop yield.
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            className={styles.column}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#c47209",
              border: "#c47209 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#c47209" },
            }}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
