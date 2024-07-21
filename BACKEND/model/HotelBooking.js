const mongoose = require('mongoose');

const hotelBookingSchema = new mongoose.Schema({
    userid:{
        type:String, required:true,unique:false  },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    numberOfRooms: {
        type: Number,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});

const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema);

module.exports = HotelBooking;
