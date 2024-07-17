import React from 'react';

const FlightBookingForm = ({ flight }) => {
  return (
    <div className="booking-form">
      <div className="flight-info">
        <h2>{flight.airlines}</h2>
        <p>{flight.departure} to {flight.arrival}</p>
      </div>
      <div className="check-in-out">
        <div>
          <label>Departure Time</label>
          <p>{new Date(flight.departureTime).toLocaleString()}</p>
        </div>
        <div>
          <label>Arrival Time</label>
          <p>{new Date(flight.arrivalTime).toLocaleString()}</p>
        </div>
      </div>
      <div className="class-info">
        <h3>Economy</h3>
        <p>Price: ₹ {flight.oneWayPriceEconomy}</p>
        <h3>Premium</h3>
        <p>Price: ₹ {flight.oneWayPricePremium}</p>
        <p className="non-refundable">Non-Refundable: {flight.refundableFares ? "Yes" : "No"}</p>
      </div>
      <div className="upgrade-stay">
        <input type="checkbox" id="meal" />
        <label htmlFor="meal">Add Meal for ₹ 200</label>
      </div>
    </div>
  );
};

export default FlightBookingForm;
