import React from 'react';
import styled from 'styled-components';

const PriceBreakupStyle = styled.div`
  .price-breakup {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 5px;
  }
`;

const PriceBreakup = () => {
  return (

    <PriceBreakupStyle>
      <div className="price-breakup">
        <h3>Price Breakup</h3>
        <p>1 Room x 1 Night: ₹ 3,500</p>
        <p>Total Discount: ₹ 1,548</p>
        <p>Price after Discount: ₹ 1,952</p>
        <p>Taxes & Service Fees: ₹ 437</p>
        <p>Total Amount to be paid: ₹ 2,389</p>
      </div>
    </PriceBreakupStyle>

  );
};

export default PriceBreakup;
