import { Image } from "react";
import uploadIcon from "./../../assets/uploadIcon.svg";
import menuIcon from "./../../assets/menuIcon.svg";

export const TopNavbar = () => {
  return (
    <nav>
      <div id="expand-menu">
        <img src={menuIcon} alt="" />
      </div>
      <div id="add-file">
        <img src={uploadIcon} alt="menu" />
        <span>Add a File</span>
      </div>
    </nav>
  );
};
