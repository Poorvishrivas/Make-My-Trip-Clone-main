const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true }, // Country
    city: { type: String, required: true }, // City
    address: { type: String, required: true }, // Address
    location: { type: String, required: true },
    roomsAvailable: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    imagePath: { type: String, required: true },
    freeWiFi: { type: Boolean, default: false }, // Free Wi-Fi
    complimentaryBreakfast: { type: Boolean, default: false }, // Complimentary Breakfast
    housekeeping: { type: Boolean, default: false }, // Housekeeping
    airConditioningHeating: { type: Boolean, default: false } // Air Conditioning/Heating
});

module.exports = mongoose.model('Hotel', HotelSchema);
