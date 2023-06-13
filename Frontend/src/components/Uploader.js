import React, { useState } from "react";

export const Uploader = () => {
    const [selectedFile, setSelectedFile] = useState();

    const fileHandler = event => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadHandler = () => {
        const data = new FormData();
        data.append('file', selectedFile);
        console.log(data)

        fetch("/upload", {
            method: 'POST',
            body: data
        })
            .then(res => res.text())
            .then(resText => console.log(resText));
    };

    return (
        <div>
            <input type="file" name="file" onChange={fileHandler} />
            <button onClick={uploadHandler}>Upload!</button>
        </div>
    );
}


