const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// users route
app.use(userRouter);

// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Invalid URL",
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Somthing Broke",
  });
});

module.exports = app;
