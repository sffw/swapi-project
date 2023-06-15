const express = require("express");
const multer = require("multer");
const cors = require('cors')

const app = express();
app.use(cors()) // initialize cors for all paths allowing incoming requests from any IP

const PORT = 3000;

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "database") // Sets the local directory destination for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) // saves uploaded file under original file name in database directory
    }
})

const upload = multer({ storage: storage });  // save files in database directory in project root


app.post('/uploads', upload.array('files'), (req, res) => {
    console.log('req.files', req.files)
    return res.sendStatus(202);
});

app.listen(PORT, () => console.log("Server running on port " + PORT));