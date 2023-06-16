import { useState } from "react";
import styles from "../../styles/LeftNav.module.css";
import menuIcon from "./../../assets/menuIcon.svg";

export const LeftNavbar = () => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      {/* <button className={styles.menuBtn} onClick={toggleOpen}>
        <img src={menuIcon} alt="menu" />
      </button> */}
      <div id="left-title">
        <h1 className={open ? styles.sideitem : styles.sideitemClosed}>
          SWAPI Dev Test
        </h1>
      </div>
      <div className={open ? styles.sideitem : styles.sideitemClosed}>
        Dev Notes
      </div>
      <div className={open ? styles.sideitem : styles.sideitemClosed}>
        Source Code
      </div>
    </div>
  );
};
