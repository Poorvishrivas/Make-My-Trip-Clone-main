const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const flightController = require("../controller/flightController");


router.post('/', adminAuth, flightController.createFlight);
router.get('/', adminAuth, flightController.getFlights);
router.get('/:id',  flightController.getFlightById);
router.put('/:id', adminAuth, flightController.updateFlight);
router.delete('/:id', adminAuth, flightController.deleteFlight);

module.exports = router;
