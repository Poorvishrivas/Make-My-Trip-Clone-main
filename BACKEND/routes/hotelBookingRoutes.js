const express = require('express');
const router = express.Router();
const HotelBookingController = require('../controller/HotelBookingController');
// const authenticateToken = require('../middleware/authenticateToken');

router.post('/bookHotel',  HotelBookingController.bookHotel);

module.exports = router;
