const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, required: true },
  image: { type: String },
});

module.exports = Restaurant = mongoose.model("Restaurant", restaurantSchema);