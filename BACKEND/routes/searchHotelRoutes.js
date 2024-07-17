const express = require('express');
const router = express.Router();
const hotelController = require('../controller/searchHotelController');

router.get('/', hotelController.searchHotelsByCity);
router.get('/searchHotelsByAmenities', hotelController.searchHotelsByAmenities);

module.exports = router;
