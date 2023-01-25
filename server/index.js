const users = require("./routes/users");
const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const app = express();

mongoose
  .connect("mongodb://localhost/cpuUsage")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Could not connect to mongodb..."));

app.use(express.json());
app.use("/api/users", users);

//PORT config
