const mongoose = require("mongoose");

const passwordModel = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Passwords", passwordModel);
