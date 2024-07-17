const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/userAuth");
const bookingController = require("../controller/bookingController");

router.post("/book", userAuth,bookingController.createBooking);
router.get("/booking/:id", bookingController.getBooking);
router.put("/cancel/:id", bookingController.cancelBooking);

module.exports = router;
