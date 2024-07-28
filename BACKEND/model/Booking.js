// const mongoose = require("mongoose");

// const BookingSchema = new mongoose.Schema({
//   userid: { type: String, required: true, unique: false },
//   flightId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Flight",
//     required: true,
//   },

//   passengerEmail: { type: String, required: true },
//   passengerDetails: [
//     {
//       name: { type: String },
//       age: { type: Number },
//       gender: { type: String },
//       amount: { type: Number },
//     },
//   ],
//   numberOfTickets: { type: Number, required: true },
//   bookingDate: { type: Date, default: Date.now },
//   totalPrice: { type: Number, required: true },
//   status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
// });

// module.exports = mongoose.model("Booking", BookingSchema);
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
    required: true,
  },
  passengerEmail: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
  },
  passengerDetails: [
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
        min: 0,
      },
      gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  numberOfTickets: {
    type: Number,
    required: true,
    min: 1,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ["booked", "cancelled"],
    default: "booked",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
