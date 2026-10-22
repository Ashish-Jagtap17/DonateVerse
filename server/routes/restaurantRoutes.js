const express = require("express");
const { signupRestaurant, loginRestaurant } = require("../controllers/restaurantController");
const router = express.Router();

// Signup route
router.post("/signup", signupRestaurant);

// Login route
router.post("/login", loginRestaurant);

module.exports = router;
