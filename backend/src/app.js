require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uploadRouter = require("../src/routes/upload");
const downloadRouter = require("../src/routes/download");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

console.log("Starting up..");
try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB.");
} catch (err) {
  console.error(err);
}

app.get("/", (req, res) => {
  res.send({ saumya: "som" });
});

app.use(uploadRouter);
app.use(downloadRouter);

app.all("*", async (req, res) => {
  throw new Error();
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
