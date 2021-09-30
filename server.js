// require express
const express = require("express");
// create express app
const app = express();
// mongoose require
const mongoose = require("mongoose");
// dotenv require
require("dotenv").config();

// mongo db connection link from .env file
const URL = process.env.CONNECTION_DB_URL;
// port from .env
const PORT = process.env.PORT || 5000;

// route for app
app.get("/", (req, res) => {
  res.send("Welcome to tasker api... ");
});

// server listen connection
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
// mongoose connect to mongo db
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDb connection established...");
  })
  .catch((error) => {
    console.error("mongoDb connection failed:", error.message);
  });
