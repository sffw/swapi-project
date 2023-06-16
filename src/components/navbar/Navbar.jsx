import uploadIcon from "./../../assets/uploadIcon.svg";
import githubIcon from "./../../assets/github-mark.svg";
import styles from "../../styles/Nav.module.css";
import { uploadHelper } from "./uploadHelper";
import { useEffect, useState } from "react";
import UploadAlert from "../UploadedAlert";

export const Navbar = ({ fileUploaded }) => {
  const [files, setFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState(false);

  const handleFileChange = async (e) => {
    setFiles(e.target.files);

    const formData = new FormData();

    for (let file of e.target.files) {
      formData.append("files", file);
    }

    await uploadHelper(formData);
    setUploadMessage(true);
  };

  useEffect(() => {
    console.log(uploadMessage);
  }, [uploadMessage]);

  return (
    <div>
      <nav className={styles.nav}>
        <h1>SWAPI Character Table</h1>
        <div className={styles.navItems}>
          <a
            href="https://github.com/sffw/swapi-project"
            className={styles["add-a-file"]}
            target="_blank"
          >
            <img src={githubIcon} alt="GH" />
          </a>

          <form className={styles["add-file"]}>
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              id="files"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="files">
              <img
                src={uploadIcon}
                alt="upload"
                style={{ cursor: "pointer" }}
              />
            </label>
          </form>
        </div>
      </nav>
      {uploadMessage === true ? (
        <UploadAlert uploaded={true} />
      ) : (
        <UploadAlert uploaded={false} />
      )}
    </div>
  );
};
