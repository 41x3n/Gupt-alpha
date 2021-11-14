const multer = require("multer");
const maxSize = 2 * 1020 * 1024;
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorage,
  limits: { fileSize: maxSize },
});

module.exports = upload;
