const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// Register a new user
router.post("/Register", authController.register);

// Login a user
router.post("/login", authController.login);

module.exports = router;
