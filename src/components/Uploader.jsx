import React, { useState } from "react";

export const Uploader = () => {
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const response = await fetch("http://localhost:3000/uploads", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="file"
        id="files"
        multiple
        onChange={handleFileChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
