const Flight = require('../model/Flight');

exports.createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body);
       
        await flight.save();
        res.status(201).send(flight);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getFlights = async (req, res) => {
    try {

        const flights = await Flight.find(); 
        res.send(flights);

    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!flight) return res.status(404).send('Flight not found.');
        res.send(flight);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) return res.status(404).send('Flight not found.');
        res.send(flight);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) return res.status(404).send('Flight not found.');
        res.send(flight);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
exports.deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndDelete(req.params.id);
        if (!flight) return res.status(404).send('Flight not found.');
        res.send(flight);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

