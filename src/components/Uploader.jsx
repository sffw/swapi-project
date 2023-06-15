import React, { useState } from "react";

export const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState();

  const fileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    let data = new FormData();
    data.append("file", selectedFile);
    data = JSON.stringify(data);

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: data,
    });
  };

  return (
    <div>
      <input type="file" name="file" onChange={fileHandler} />
      <button onClick={uploadHandler}>Upload!</button>
    </div>
  );
};
