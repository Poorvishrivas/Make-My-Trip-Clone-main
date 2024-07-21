const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/userAuth");
const bookingController = require("../controller/bookingController");

router.get("/book/flightshistory", userAuth,bookingController.flightsHistory);
router.get("/book/hotelshistory", userAuth,bookingController.hotelsHistory);
router.post("/book", userAuth,bookingController.createBooking);
router.get("/booking/:id", bookingController.getBooking);
router.post("/cancel/:id", bookingController.cancelBooking);
router.post("/cancelHotel/:id", bookingController.cancelHotel);

module.exports = router;
