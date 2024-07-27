const Hotel = require("../model/Hotel");

exports.createHotel = async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json({ message: "Hotel created successfully", hotel });
  } catch (error) {
    console.error("Error creating hotel:", error);
    res
      .status(400)
      .json({ message: "Error creating hotel", error: error.message });
  }
};

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res
      .status(500)
      .json({ message: "Error fetching hotels", error: error.message });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hotel) return res.status(404).json({ message: "Hotel not found." });
    res.status(200).json({ message: "Hotel updated successfully", hotel });
  } catch (error) {
    console.error("Error updating hotel:", error);
    res
      .status(400)
      .json({ message: "Error updating hotel", error: error.message });
  }
};

exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found." });
    res.status(200).json(hotel);
  } catch (error) {
    console.error("Error fetching hotel:", error);
    res
      .status(500)
      .json({ message: "Error fetching hotel", error: error.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found." });
    res.status(200).json({ message: "Hotel deleted successfully", hotel });
  } catch (error) {
    console.error("Error deleting hotel:", error);
    res
      .status(500)
      .json({ message: "Error deleting hotel", error: error.message });
  }
};
