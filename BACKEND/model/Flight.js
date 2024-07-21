const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
  oneWayPrice: { type: Number, required: true },
  oneWayPriceEconomy: { type: Number, required: true },
  oneWayPricePremium: { type: Number, required: true },
  stops: { type: Number, required: true, default: 0 },
  stopLocations: [{ type: String }],
  refundableFares: { type: Boolean, required: true, default: false },
  airlines: { type: String, required: true },
  cityName: { type: String, required: true },
  airportCode: { type: String, required: true },
  airportName: { type: String, required: true },
  class: { type: String, required: true },
  slot:{type:Number,require:true,default:99},
  isDelete: { type: Boolean, required: true, default: false }, // New field
});

module.exports = mongoose.model("Flight", FlightSchema);
