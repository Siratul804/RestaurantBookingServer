const Restaurant = require("../models/Restaurant");

exports.postRestaurant = async (req, res) => {
  try {
    const { name, location, description, tag, image, price } = req.body;

    // Input validation - ensure required fields are present
    if (!name || !location || !description || !tag || !image || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new Restaurant object
    const newRestaurant = new Restaurant({
      name,
      location,
      description,
      tag,
      image,
      price
    });

    // Save the new restaurant to the database
    await newRestaurant.save();

    res.json({ message: "Restaurant added successfully" });
  } catch (err) {
    // Handle any errors gracefully
    console.error("Error adding restaurant:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getRestaurant = async (req, res) => {
  try {
    const result = await Restaurant.find({});
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
