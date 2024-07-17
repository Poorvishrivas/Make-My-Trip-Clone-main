import React from 'react';
import styled from 'styled-components';

const CouponCodesStyle = styled.div`
  .coupon-codes {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 0;
  }

  input[type='radio'] {
    margin-right: 10px;
  }
`;

const CouponCodes = () => {
  return (

    <CouponCodesStyle>
      <div className="coupon-codes">
        <h3>Coupon Codes</h3>
        <div>
          <input type="radio" id="big-saver" name="coupon" />
          <label htmlFor="big-saver">MMTBIGSAVER ₹ 347</label>
        </div>
        <div>
          <input type="radio" id="best-buy" name="coupon" />
          <label htmlFor="best-buy">MMTBESTBUY ₹ 160</label>
        </div>
      </div>
    </CouponCodesStyle>
  );
};

export default CouponCodes;
