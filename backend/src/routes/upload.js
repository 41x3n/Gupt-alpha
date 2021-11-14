const express = require("express");
const uuid = require("uuid");
const upload = require("../utils/multer");
const Store = require("../models/store");

const router = express.Router();

router.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const fileKey = uuid.v4();
    console.log(fileKey);

    const fileUpload = new Store({
      fileName: req.file.filename,
      fileKey,
    });
    await fileUpload.save();

    res.status(201).send(fileKey);
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
