const HotelBooking = require("../model/HotelBooking");
const Hotel = require("../model/Hotel");

const bookHotel = async (req, res) => {
  try {
    const {
      userid,
      hotelId,
      customerName,
      customerEmail,
      numberOfRooms,
      bookingDate,
      totalPrice,
    } = req.body;

    // Validate input data
    if (
      !userid ||
      !hotelId ||
      !customerName ||
      !customerEmail ||
      !numberOfRooms ||
      !bookingDate ||
      !totalPrice
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    if (hotel.roomsAvailable < numberOfRooms) {
      return res.status(400).json({ message: "Not enough rooms available" });
    }

    // Create booking
    const booking = new HotelBooking({
      userid,
      hotelId,
      customerName,
      customerEmail,
      numberOfRooms,
      bookingDate,
      totalPrice,
    });

    await booking.save();

    // Update hotel room availability
    hotel.roomsAvailable -= numberOfRooms;
    await hotel.save();

    res.status(201).json({
      message: "Hotel booked successfully",
      booking,
      hotel: {
        id: hotel._id,
        name: hotel.name,
        roomsAvailable: hotel.roomsAvailable,
      },
    });
  } catch (error) {
    console.error("Error booking hotel:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  bookHotel,
};
