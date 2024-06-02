import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={[styles.navbar1, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.web}>
            <img
              className={styles.webChild}
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <b className={styles.skydrone}>SKYDRONE</b>
          </div>
        </div>
        <div className={styles.column1}>
          <nav className={styles.column2}>
            <div className={styles.clients}>Clients</div>
            <div className={styles.features}>Features</div>
            <div className={styles.navLinkDropdown}>
              <div className={styles.clients}>Download App</div>
            </div>
          </nav>
          <Button
            className={styles.column3}
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
              width: 133,
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
