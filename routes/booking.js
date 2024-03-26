const express = require("express");
const router = express.Router();

const {
    postBooking,
    getBooking,
} = require("../controllers/booking");

router.post("/post", postBooking);

router.get("/get", getBooking);

module.exports = router;