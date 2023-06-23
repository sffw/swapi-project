const express = require("express");
const multer = require("multer");
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = 3000;

if (!fs.existsSync('database')) fs.mkdirSync('database');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "database");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/uploads', upload.array('files'), (req, res) => {

    if (fs.existsSync(`database/${req.files[0].originalname}`)) {
        console.log(`${req.files[0].originalname} successfully saved`)
        return res.status(202).send("file successfully uploaded");
    } else {
        console.log("File upload unsuccessful")
        return res.status(400).send("File not saved");

    }
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
