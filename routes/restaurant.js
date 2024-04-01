const express = require("express");
const router = express.Router();

const {
    postRestaurant,
  getRestaurant,
  getOneRestaurant
} = require("../controllers/restaurant");

router.post("/post", postRestaurant);

router.get("/get", getRestaurant);

router.get("/get/:id", getOneRestaurant);

module.exports = router;