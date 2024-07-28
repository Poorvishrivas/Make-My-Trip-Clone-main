import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import NavBar from "../NavBar";
import backgroundImage from "../../Assets/flight.jpg";
import Statecontext from "../Context/Statecontext";
import { useNavigate } from "react-router-dom";
import "./AddFlightForm.css";
import { getToken } from "../login/loginpanel/LoginForm";

const AddFlightForm = () => {
  const navigate = useNavigate();
  const { apiBaseUrl } = useContext(Statecontext);
  const [flight, setFlight] = useState({
    flightNumber: "",
    departure: "",
    arrival: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    oneWayPrice: "",
    oneWayPriceEconomy: "",
    oneWayPricePremium: "",
    stops: "",
    stopLocations: "",
    refundableFares: false,
    cityName: "",
    airportCode: "",
    airportName: "",
    class: "",
    slot: "",
    isDelete: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFlight({
      ...flight,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const token = getToken();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(flight);
      const url = `${apiBaseUrl}admin/flights`;
      await axios.post(url, flight, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      navigate("/admin/flight");
    } catch (error) {
      console.error("Error adding flight:", error);
      if (error.response.status === 403) {
        alert("Log In as Admin");
        navigate("/");
      }
    }
  };

  return (
    <div
      className="add-flight-form"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      <Container className="form-container">
        <h2 className="text-center mb-4">Add New Flight</h2>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group controlId="formFlightNumber" className="col-md-4">
              <Form.Label>Flight Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter flight number"
                name="flightNumber"
                value={flight.flightNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDeparture" className="col-md-4">
              <Form.Label>Departure</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter departure location"
                name="departure"
                value={flight.departure}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formArrival" className="col-md-4">
              <Form.Label>Arrival</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter arrival location"
                name="arrival"
                value={flight.arrival}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDepartureTime" className="col-md-4">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="departureTime"
                value={flight.departureTime}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formArrivalTime" className="col-md-4">
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="arrivalTime"
                value={flight.arrivalTime}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice" className="col-md-4">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={flight.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formOneWayPrice" className="col-md-4">
              <Form.Label>One-Way Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter one-way price"
                name="oneWayPrice"
                value={flight.oneWayPrice}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formOneWayPriceEconomy" className="col-md-4">
              <Form.Label>One-Way Price (Economy)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter one-way price for economy class"
                name="oneWayPriceEconomy"
                value={flight.oneWayPriceEconomy}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formOneWayPricePremium" className="col-md-4">
              <Form.Label>One-Way Price (Premium)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter one-way price for premium class"
                name="oneWayPricePremium"
                value={flight.oneWayPricePremium}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formStops" className="col-md-4">
              <Form.Label>Stops</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of stops"
                name="stops"
                value={flight.stops}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formStopLocation" className="col-md-4">
              <Form.Label>Stop Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Stop Location"
                name="stopLocations"
                value={flight.stopLocations}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formRefundableFare" className="col-md-4">
              <Form.Label>Refundable</Form.Label>
              <Form.Check
                type="checkbox"
                name="refundableFares"
                checked={flight.refundableFares}
                onChange={handleChange}
                className="form-checkbox"
              />
            </Form.Group>

            <Form.Group controlId="formAirlines" className="col-md-4">
              <Form.Label>Airlines</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Airlines"
                name="airlines"
                value={flight.airlines}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCityName" className="col-md-4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                name="cityName"
                value={flight.cityName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAirportCode" className="col-md-4">
              <Form.Label>Airport Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Airport Code"
                name="airportCode"
                value={flight.airportCode}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAirportName" className="col-md-4">
              <Form.Label>Airport Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Airport Name"
                name="airportName"
                value={flight.airportName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSeats" className="col-md-4">
              <Form.Label>Seats</Form.Label>
              <Form.Control
                type="number"
                placeholder="Available Seat"
                name="slot"
                value={flight.slot}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formClass" className="col-md-4">
              <Form.Label>Class</Form.Label>
              <Form.Select
                name="class"
                value={flight.class}
                onChange={handleChange}
              >
                <option value="">Select Class</option>
                <option value="Economy">Economy Class</option>
                <option value="Premium">Premium Class</option>
              </Form.Select>
            </Form.Group>
          </div>
          <Form.Group className="text-center mt-4">
            <Button type="submit" className="btn-primary">
              Add Flight
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default AddFlightForm;
