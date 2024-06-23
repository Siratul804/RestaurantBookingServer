const Booking = require("../models/Booking");

exports.postBooking = async (req, res) => {
  try {
    const { id, name, date, time, number, seat } = req.body;

    // Input validation - ensure required fields are present
    if ( !id || !name || !date || !time || !number || !seat) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new Restaurant object
    const newRestaurant = new Booking({
        id, name, date, time, number, seat
    });

    // Save the new restaurant to the database
    await newRestaurant.save();

    res.json({ message: "Booking added successfully" });
  } catch (err) {
    // Handle any errors gracefully
    console.error("Error adding Booking:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getBooking = async (req, res) => {
  try {
    const result = await Booking.find({});
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
