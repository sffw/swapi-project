const express = require("express");
const cors = require('cors')
const multer = require('multer');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()) // initialize cors for all paths to allow incoming requests from any IP



const upload = multer({
    storage: multer.diskStorage({
        destination: './database',
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })
});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    return res.send("File uploaded")
});

app.listen(PORT, () => console.log("Server running on port " + PORT));