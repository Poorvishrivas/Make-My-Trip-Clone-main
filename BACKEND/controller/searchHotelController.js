// controllers/hotelController.js

const Hotel = require('../model/Hotel');

exports.searchHotelsByCity = async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send('City name is required');
    }

    try {
        const hotels = await Hotel.find({ city: city}); 
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
exports.searchHotelsByAmenities = async (req, res) => {
    const { city, freeWiFi, complimentaryBreakfast, housekeeping, airConditioningHeating, sortPrice } = req.query;

    // Initialize the query object
    const query = {};

    // Add the city filter
    if (city) query.city = city;

    // Add other filters
    if (freeWiFi === 'true') query.freeWiFi = true;
    if (complimentaryBreakfast === 'true') query.complimentaryBreakfast = true;
    if (housekeeping === 'true') query.housekeeping = true;
    if (airConditioningHeating === 'true') query.airConditioningHeating = true;

    // Initialize the sorting object
    let sort = {};
    if (sortPrice === 'lowToHigh') {
        sort.pricePerNight = 1; // Ascending order
    } else if (sortPrice === 'highToLow') {
        sort.pricePerNight = -1; // Descending order
    }

    try {
        // Find hotels based on the query and sort
        const hotels = await Hotel.find(query).sort(sort);
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
