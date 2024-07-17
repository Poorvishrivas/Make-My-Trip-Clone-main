const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const hotelController = require("../controller/hotelController");

router.post("/", hotelController.createHotel);
router.get("/", hotelController.getHotels);
router.get("/:id", hotelController.getHotelById);
router.put("/:id", hotelController.updateHotel);
router.delete("/:id", hotelController.deleteHotel);

module.exports = router;
