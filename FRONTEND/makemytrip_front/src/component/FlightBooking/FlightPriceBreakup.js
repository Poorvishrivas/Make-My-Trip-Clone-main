import React from 'react';

const FlightPriceBreakup = ({ flight }) => {
  const totalPrice = flight.oneWayPriceEconomy + 200; // Add meal price if selected
  const discount = 300; // Example discount
  const priceAfterDiscount = totalPrice - discount;
  const taxes = 50; // Example taxes
  const amountToPay = priceAfterDiscount + taxes;

  return (
    <div className="price-breakup">
      <h3>Price Breakup</h3>
      <p>Base Fare: ₹ {flight.oneWayPriceEconomy}</p>
      <p>Meal: ₹ 200</p>
      <p>Total Discount: ₹ {discount}</p>
      <p>Price after Discount: ₹ {priceAfterDiscount}</p>
      <p>Taxes & Service Fees: ₹ {taxes}</p>
      <p>Total Amount to be paid: ₹ {amountToPay}</p>
    </div>
  );
};

export default FlightPriceBreakup;
