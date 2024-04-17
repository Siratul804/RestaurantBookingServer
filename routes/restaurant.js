const express = require("express");
const router = express.Router();

const {
    postRestaurant,
  getRestaurant,
  editRestaurant,
  getOneRestaurant
} = require("../controllers/restaurant");

router.post("/post", postRestaurant);

router.get("/get", getRestaurant);

router.get("/get/:id", getOneRestaurant);

router.put("/update/:id", editRestaurant,
);



module.exports = router;