const Hotel = require('../model/Hotel');

exports.createHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).send(hotel);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!hotel) return res.status(404).send('Hotel not found.');
        res.send(hotel);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) return res.status(404).send('Hotel not found.');
        res.send(hotel);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) return res.status(404).send('Hotel not found.');
        res.send(hotel);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
