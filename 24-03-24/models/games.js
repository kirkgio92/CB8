const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "No-title-provided",
  },
  cover: {
    type: String,
    required: true,
    default: "No-cover-provided",
  },
  year: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Game", gamesSchema);
