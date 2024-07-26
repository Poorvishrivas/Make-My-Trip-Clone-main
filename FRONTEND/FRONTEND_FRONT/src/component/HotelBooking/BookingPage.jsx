import React from "react";
import styled from "styled-components";
import BookingForm from "./BookingForm";
import PriceBreakup from "./PriceBreakup";
import CouponCodes from "./CouponCodes";
import GuestDetails from "./GuestDetails";
import { Header } from "../SearchPage/Header";
import { Bottom } from "../HomePage/Bottom";

const Style = styled.div`
  height: 100%;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  color: white;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }

  .booking-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

const BookingPage = () => {
  return (
    <>
      <Header />
      <Style>
        <h1>Review your Booking</h1>
        <div className="booking-content">
          <BookingForm />
          <div>
            <PriceBreakup />
            <CouponCodes />
            <GuestDetails />
          </div>
        </div>
      </Style>
      <Bottom />
    </>
  );
};

export default BookingPage;
