import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from "../components/Navbar";
import styles from "./HeroSection.module.css";

const HeroSection: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.heroChild} />
        <div className={styles.column}>
          <div className={styles.content}>
            <h1 className={styles.savingTheWorld}>
              Saving the world and growing crops
            </h1>
            <div className={styles.skydronesInnovativeDrone}>
              Skydrone's innovative drone technology is bringing the latest
              farming innovations to farms around the world.
            </div>
          </div>
          <Button
            className={styles.web}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#df8928",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#df8928" },
              width: 133,
              height: 48,
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      {/* Logo container and logo */}
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/group-2.svg" alt="Logo" />
        <b className={styles.skydrone}>SKYDRONE</b>
      </div>
      {/* Menu button */}
      <Button
        className={styles.menuButton}
        onClick={handleMenuClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <MenuIcon />
      </Button>
      {/* Menu */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Client</MenuItem>
        <MenuItem onClick={handleClose}>Features</MenuItem>
        <MenuItem onClick={handleClose}>Download App</MenuItem>
      </Menu>
      {/* Navbar */}
      <Navbar className={styles.navbar} />
    </div>
  );
};

export default HeroSection;
