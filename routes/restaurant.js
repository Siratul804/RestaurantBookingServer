const express = require("express");
const router = express.Router();

const {
    postRestaurant,
  getRestaurant,
} = require("../controllers/restaurant");

router.post("/post", postRestaurant);

router.get("/get", getRestaurant);

module.exports = router;