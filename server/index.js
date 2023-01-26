const users = require("./routes/users");
const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const app = express();

mongoose
  .connect("mongodb://127.0.0.1/cpuUsage")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Could not connect to mongodb...", err));

app.use(express.json());
app.use("/api/users", users);

app.listen(5000, () => console.log("Server started on PORT 5000"));
