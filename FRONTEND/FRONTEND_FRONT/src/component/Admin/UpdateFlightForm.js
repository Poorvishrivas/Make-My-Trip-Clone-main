import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/flight.jpg';
import Statecontext from '../Context/Statecontext';
import { useNavigate, useParams } from "react-router-dom";
import './FlightsList.css';
import { getToken } from '../login/loginpanel/LoginForm';

const UpdateFlightForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get flight ID from URL parameters
  const { apiBaseUrl } = useContext(Statecontext);
  const [flight, setFlight] = useState({
    flightNumber: '',
    departure: '',
    arrival: '',
    departureTime: '',
    arrivalTime: '',
    price: '',
    oneWayPrice: '',
    oneWayPriceEconomy: '',
    oneWayPricePremium: '',
    stops: '',
    stopLocations: '',
    refundableFares: false,
    cityName: '',
    airportCode: '',
    airportName: '',
    class: '',
    slot:'',
    isDelete: false
  });

  useEffect(() => {
    fetchFlightDetails();
  }, []);

  const fetchFlightDetails = async () => {
    try {
      const url = `${apiBaseUrl}admin/flights/${id}`;
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + getToken()
        }
      });
      setFlight(response.data);
    } catch (error) {
      console.error('Error fetching flight details:', error);
      if (error.response.status === 403) {
        alert('Log In as Admin');
        navigate('/');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFlight({
      ...flight,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiBaseUrl}admin/flights/${id}`;
      await axios.put(url, flight, {
        headers: {
          'Authorization': 'Bearer ' + getToken()
        }
      });
      navigate('/admin/flight');
    } catch (error) {
      console.error('Error updating flight:', error);
      if (error.response.status === 403) {
        alert('Log In as Admin');
        navigate('/');
      }
    }
  };
  const formatDateForInput = (dateString) => {
    return dateString ? dateString.slice(0, 16) : ''; // Adjust as per your date format needs
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Update Flight</h2>
        <Form onSubmit={handleSubmit}>
          <div className="col-md-12">
            <div className="row">
              <Form.Group controlId="formFlightNumber" className="col-md-6">
                <Form.Label>Flight Number</Form.Label>
                <Form.Control
                  type="text"
                  name="flightNumber"
                  value={flight.flightNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDeparture" className="col-md-6">
                <Form.Label>Departure</Form.Label>
                <Form.Control
                  type="text"
                  name="departure"
                  value={flight.departure}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formArrival" className="col-md-6">
                <Form.Label>Arrival</Form.Label>
                <Form.Control
                  type="text"
                  name="arrival"
                  value={flight.arrival}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDepartureTime" className="col-md-6">
                <Form.Label>Departure Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="departureTime"
                  value={formatDateForInput(flight.departureTime)}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formArrivalTime" className="col-md-6">
                <Form.Label>Arrival Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="arrivalTime"
                  value={formatDateForInput(flight.arrivalTime)}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPrice" className="col-md-6">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={flight.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formOneWayPrice" className="col-md-6">
                <Form.Label>One-Way Price</Form.Label>
                <Form.Control
                  type="number"
                  name="oneWayPrice"
                  value={flight.oneWayPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formOneWayPriceEconomy" className="col-md-6">
                <Form.Label>One-Way Price Economy</Form.Label>
                <Form.Control
                  type="number"
                  name="oneWayPriceEconomy"
                  value={flight.oneWayPriceEconomy}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formOneWayPricePremium" className="col-md-6">
                <Form.Label>One-Way Price Premium</Form.Label>
                <Form.Control
                  type="number"
                  name="oneWayPricePremium"
                  value={flight.oneWayPricePremium}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formStops" className="col-md-6">
                <Form.Label>Stops</Form.Label>
                <Form.Control
                  type="number"
                  name="stops"
                  value={flight.stops}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formStopLocations" className="col-md-6">
                <Form.Label>Stop Locations</Form.Label>
                <Form.Control
                  type="text"
                  name="stopLocations"
                  value={flight.stopLocations}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formRefundableFares" className="col-md-6">
                <Form.Check
                  type="checkbox"
                  label="Refundable Fares"
                  name="refundableFares"
                  checked={flight.refundableFares}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCityName" className="col-md-6">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="cityName"
                  value={flight.cityName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAirportCode" className="col-md-6">
                <Form.Label>Airport Code</Form.Label>
                <Form.Control
                  type="text"
                  name="airportCode"
                  value={flight.airportCode}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAirportName" className="col-md-6">
                <Form.Label>Airport Name</Form.Label>
                <Form.Control
                  type="text"
                  name="airportName"
                  value={flight.airportName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAirportName" class="col-md-4">

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

              <Form.Group controlId="formClass" className="col-md-6">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  type="text"
                  name="class"
                  value={flight.class}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>
            <Form.Group className="text-center mt-3">
              <Button type="submit">Update Flight</Button>
            </Form.Group>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default UpdateFlightForm;
