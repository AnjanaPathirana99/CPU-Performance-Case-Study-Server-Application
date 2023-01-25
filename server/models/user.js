const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
});

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
  //if error update to normal function
  const schema = {
    username: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(8).max(1024).required(),
  };
  return Joi.validate(user, schema);
};

exports.User = User;
exports.validate = validateUser;
