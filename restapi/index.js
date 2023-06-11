const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use("/", express.static("files"));

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to MongoDB");
  } catch {
    console.log(error);
  }
}

connect();

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});
