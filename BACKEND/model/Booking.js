const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    passengerName: { type: String, required: true },
    passengerEmail: { type: String, required: true },
    // passengerPhone: { type: String, required: true },
    numberOfTickets: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now }, 
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
});

module.exports = mongoose.model('Booking', BookingSchema);
