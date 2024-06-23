const express = require("express");
const router = express.Router();
const flora = require("../controllers/flora");

// Routes
router.post("/postFlora", flora.createFlora);
router.get("/getFlora", flora.getFlora);

module.exports = router;
