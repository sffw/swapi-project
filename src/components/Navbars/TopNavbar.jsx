import { Image } from "react";
import uploadIcon from "./../../assets/uploadIcon.svg";
import styles from "../../styles/TopNav.module.css";

export const TopNavbar = () => {
  return (
    <nav id={styles["top-nav"]}>
      <div id={styles["add-file"]}>
        <img src={uploadIcon} alt="menu" />
        <span>Add a File</span>
      </div>
    </nav>
  );
};
