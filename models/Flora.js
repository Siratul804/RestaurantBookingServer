const mongoose = require("mongoose");

const floraSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  tags: { type: String, required: true },
  image: { type: String, required: true },
  mark: { type: String, required: true },
});

module.exports = Flora = mongoose.model("Flora", floraSchema);
