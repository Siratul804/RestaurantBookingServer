const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  number: { type: Number, required: true },
  seat: { type: Number, required: true },
  resID: {type: String, required: true},
});

module.exports = Booking = mongoose.model("Booking", bookingSchema);