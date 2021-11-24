const express = require("express");
const path = require("path");
const Store = require("../models/store");

const router = express.Router();

router.get("/api/download/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);

    const fileDetails = await Store.find({ fileKey: id });
    if (fileDetails.length <= 0) res.status(404).send("File Not Found");
    // console.log({ fileDetails });

    let filename = fileDetails[0].fileName;
    const dow = path.join(__dirname, "..", "..", "files", filename);
    const cleanFileName = filename.split("-")[2];
    res.set("Content-Disposition", `attachment; filename = ${cleanFileName}`);
    res.sendFile(dow, cleanFileName);
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
