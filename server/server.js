const express = require("express");
const app = express();
const fs = require('fs');
const multer = require('multer');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const upload = multer({
    storage: multer.diskStorage({
        destination: './database',
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })
});

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    // do something with the file
});

app.listen(PORT, () => console.log("Server running on port " + PORT));