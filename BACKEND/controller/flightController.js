const Flight = require("../model/Flight");

exports.createFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    console.error("Error creating flight:", error.message);
    res
      .status(400)
      .json({ message: "Error creating flight", error: error.message });
  }
};

exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching flights", error: error.message });
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!flight) return res.status(404).json({ message: "Flight not found." });
    res.status(200).json(flight);
  } catch (error) {
    console.error("Error updating flight:", error.message);
    res
      .status(400)
      .json({ message: "Error updating flight", error: error.message });
  }
};

exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found." });
    res.status(200).json(flight);
  } catch (error) {
    console.error("Error fetching flight by ID:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching flight by ID", error: error.message });
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found." });
    res.status(200).json({ message: "Flight deleted successfully", flight });
  } catch (error) {
    console.error("Error deleting flight:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting flight", error: error.message });
  }
};
