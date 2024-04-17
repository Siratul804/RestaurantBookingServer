const Restaurant = require("../models/Restaurant");

exports.postRestaurant = async (req, res) => {
  try {
    const { name, location, description, tag, menu, number, image, price } = req.body;

    // Input validation - ensure required fields are present
    if (!name || !location || !description || !tag || !menu || !number || !image || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new Restaurant object
    const newRestaurant = new Restaurant({
      name, location, description, tag, menu, number, image, price
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



exports.editRestaurant = async (req, res) => {
  try {
    const { name, location, description, tag, menu, number, image, price } = req.body;

    // Input validation - ensure required fields are present
    if (!name || !location || !description || !tag || !menu || !number || !image || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if the request contains an 'id' parameter
    if (req.params.id) {
      // If 'id' is present, update existing restaurant data
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, {
        name, location, description, tag, menu, number, image, price
      }, { new: true });

      if (!updatedRestaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      return res.json({ message: "Restaurant updated successfully", restaurant: updatedRestaurant });
    } else {
      // If 'id' is not present, create a new restaurant
      const newRestaurant = new Restaurant({
        name, location, description, tag, menu, number, image, price
      });

      // Save the new restaurant to the database
      await newRestaurant.save();

      return res.json({ message: "Restaurant added successfully", restaurant: newRestaurant });
    }
  } catch (err) {
    // Handle any errors gracefully
    console.error("Error adding/updating restaurant:", err);
    return res.status(500).json({ message: "Internal server error" });
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

exports.getOneRestaurant = async (req,res) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}