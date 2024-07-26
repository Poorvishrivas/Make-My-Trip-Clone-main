import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import FlightBookingForm from "./FlightBookingForm";
import FlightPriceBreakup from "./FlightPriceBreakup";
import FlightCouponCodes from "./FlightCouponCodes";
import FlightGuestDetails from "./FlightGuestDetails";
import "./Bookingform.css";
import { Header } from "../SearchPage/Header";
import { Bottom } from "../HomePage/Bottom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Statecontext from "../Context/Statecontext";

const Style = styled.div`
  height: 700px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  color: white;
`;

const FlightBookingPage = () => {
  const [flight, setFlight] = useState(null);
  const [guestDetails, setGuestDetails] = useState({});
  const { apiBaseUrl } = useContext(Statecontext);
  const { id } = useParams();

  useEffect(() => {
    const fetchFlight = async () => {
      const url = `${apiBaseUrl}admin/flights/${id}`;
      const response = await axios.get(url);
      setFlight(response.data);
    };

    fetchFlight();
  }, [id, apiBaseUrl]); // Added apiBaseUrl to the dependency array

  const handleGuestDetailsChange = (details) => {
    setGuestDetails(details);
  };

  const handleBooking = async () => {
    const bookingData = {
      flightId: flight._id,
      passengerName: guestDetails.name,
      passengerEmail: guestDetails.email,
      passengerPhone: guestDetails.mobile,
      numberOfTickets: 1,
      totalPrice: flight.oneWayPriceEconomy + 200, // Example calculation
    };
    const url = `${apiBaseUrl}admin/book`;
    await axios.post(url, bookingData);
    alert("Booking successful!");
  };

  if (!flight) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Style>
        <h1>Review your Booking</h1>
        <FlightBookingForm flight={flight} />
        <FlightPriceBreakup flight={flight} />
        <FlightCouponCodes />
        <FlightGuestDetails onGuestDetailsChange={handleGuestDetailsChange} />
        <button onClick={handleBooking}>Confirm Booking</button>
      </Style>
      <Bottom />
    </>
  );
};

export default FlightBookingPage;
