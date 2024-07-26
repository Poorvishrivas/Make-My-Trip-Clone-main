import React from 'react';

const FlightCouponCodes = () => {
  return (
    <div className="coupon-codes">
      <h3>Coupon Codes</h3>
      <input type="radio" id="big-saver" name="coupon" />
      <label htmlFor="big-saver">FLIGHTBIGSAVER ₹ 300</label>
      <input type="radio" id="best-buy" name="coupon" />
      <label htmlFor="best-buy">FLIGHTBESTBUY ₹ 150</label>
    </div>
  );
};

export default FlightCouponCodes;
