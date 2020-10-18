const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
};


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
