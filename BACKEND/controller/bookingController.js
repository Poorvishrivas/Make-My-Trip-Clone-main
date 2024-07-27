const Booking = require("../model/Booking");
const Flight = require("../model/Flight");
const HotelBooking = require("../model/HotelBooking"); // Adjusted the import name

// Helper function to update flight slot
const updateFlightSlot = async (flightId, numberOfTickets) => {
  const flight = await Flight.findById(flightId);
  if (!flight) {
    throw new Error("Flight not found");
  }
  flight.slot -= numberOfTickets;
  await flight.save();
};

exports.createBooking = async (req, res) => {
  const {
    flightId,
    userid,
    passengerEmail,
    numberOfTickets,
    passengerDetails,
    totalPrice,
    bookingDate,
  } = req.body;

  try {
    await updateFlightSlot(flightId, numberOfTickets);

    const newBooking = new Booking({
      userid,
      flightId,
      passengerEmail,
      passengerDetails,
      numberOfTickets,
      bookingDate,
      totalPrice,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("flightId");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Error fetching booking", error: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    // Restore flight slot (optional, depending on requirements)
    // await updateFlightSlot(booking.flightId, -booking.numberOfTickets);
    res.status(200).json(booking);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Error cancelling booking", error: error.message });
  }
};

exports.cancelHotel = async (req, res) => {
  try {
    const booking = await HotelBooking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Error cancelling booking", error: error.message });
  }
};

exports.flightsHistory = async (req, res) => {
  try {
    const data = await Booking.find({ userid: req.user.user.id });
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({
        message: "Error fetching flight booking history",
        error: error.message,
      });
  }
};

exports.hotelsHistory = async (req, res) => {
  try {
    const data = await HotelBooking.find({ userid: req.user.user.id });
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({
        message: "Error fetching hotel booking history",
        error: error.message,
      });
  }
};
