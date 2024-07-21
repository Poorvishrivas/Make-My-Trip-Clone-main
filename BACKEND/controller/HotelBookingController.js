const HotelBooking = require('../model/HotelBooking');
const Hotel = require('../model/Hotel');

const bookHotel = async (req, res) => {
    try {
        const { userid ,hotelId, customerName, customerEmail, numberOfRooms, bookingDate, totalPrice } = req.body;
        // userid:decoded.user.id,
        // hotelId: props._id,
        // customerName: localStorage.getItem("username"),
        // customerEmail: emailRef.current.value,
        // numberOfRooms: numRooms,
        // bookingDate: currentdate,
        // totalPrice: totalAmount,

        // userid:{
        //     type:String, required:true,unique:false  },
        // hotelId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Hotel',
        //     required: true,
        // },
        // customerName: {
        //     type: String,
        //     required: true,
        // },
        // customerEmail: {
        //     type: String,
        //     required: true,
        // },
        // numberOfRooms: {
        //     type: Number,
        //     required: true,
        // },
        // bookingDate: {
        //     type: Date,
        //     required: true,
        // },
        // totalPrice: {
        //     type: Number,
        //     required: true,
        // },
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        if (hotel.roomsAvailable < numberOfRooms) {
            return res.status(400).json({ message: 'Not enough rooms available' });
        }
       
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

        hotel.roomsAvailable -= numberOfRooms;
        await hotel.save();

        res.status(201).json({ message: 'Hotel booked successfully', booking });
    } catch (error) {
        console.error('Error booking hotel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    bookHotel,
};
