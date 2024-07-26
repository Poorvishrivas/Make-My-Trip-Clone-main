import React from 'react';
import styled from 'styled-components';

const BookingFormStyle = styled.div`
  .booking-form {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .hotel-info {
    margin-bottom: 10px;
  }

  .check-in-out {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    div {
      flex: 1;
    }
  }

  .room-info {
    margin-bottom: 10px;
  }

  .room-info h3 {
    margin-top: 0;
  }

  .room-info p {
    margin-bottom: 5px;
  }

  .non-refundable {
    color: #ff0000;
    font-weight: 700;
  }

  .upgrade-stay {
    margin-bottom: 10px;

    label {
      margin-left: 10px;
    }
  }
`;

const BookingForm = () => {
  return (

    <BookingFormStyle>
      <div className="booking-form">
        <div className="hotel-info">
          <h2>The Hq</h2>
          <p>Swatantra Path, Vasco da Gama, Goa, India</p>

        </div>
        <div className="check-in-out">
          <div>
            <label>Check In</label>
            <p>Tue 9 Jul 2024 <span>2 PM</span></p>
          </div>
          <div>
            <label>Check Out</label>
            <p>Wed 10 Jul 2024 <span>12 PM</span></p>
          </div>
        </div>
        <div className="room-info">
          <h3>Deluxe Room</h3>
          <p>2 Adults</p>
          <p>Room Only</p>
          <p>No meals included</p>
          <p className="non-refundable">Non-Refundable</p>
        </div>
        <div className="upgrade-stay">
          <input type="checkbox" id="breakfast" />
          <label htmlFor="breakfast">Add Breakfast for ₹ 261 for all guests</label>
        </div>
      </div>

    </BookingFormStyle>

  );
};

export default BookingForm;
