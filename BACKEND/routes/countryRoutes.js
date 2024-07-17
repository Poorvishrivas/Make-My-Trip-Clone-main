const express = require('express');
const router = express.Router();
const { getCountries,getCountryCities ,getCitiesWithAirports } = require('../controller/countryController');
const userAuth = require('../middleware/userAuth');

router.get('/countries', getCountries);
router.get('/countries/:countryName/cities', getCountryCities);
router.get('/countries/cities', getCitiesWithAirports);
module.exports = router;
