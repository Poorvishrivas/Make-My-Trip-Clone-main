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
    // Check if the flight has enough slots
    const flight = await Flight.findById(flightId);
    if (flight.slot < numberOfTickets) {
      return res.status(400).json({ message: "Not enough slots available" });
    }

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
