import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/Hotel.jpg';
import Statecontext from '../Context/Statecontext';
import { useNavigate, useParams } from "react-router-dom";
import './HotelList.css';
import { getToken } from '../login/loginpanel/LoginForm';

const UpdateHotelForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get hotel ID from URL parameters
  const { apiBaseUrl } = useContext(Statecontext);
  const [hotel, setHotel] = useState({
    name: '',
    country: '',
    city: '',
    address: '',
    location: '',
    roomsAvailable: '',
    pricePerNight: '',
    imagePath: '',
    freeWiFi: false,
    complimentaryBreakfast: false,
    housekeeping: false,
    airConditioningHeating: false
  });

  useEffect(() => {
    fetchHotelDetails();
  }, []);

  const fetchHotelDetails = async () => {
    try {
      const url = `${apiBaseUrl}admin/hotels/${id}`;
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + getToken()
        }
      });
      setHotel(response.data);
    } catch (error) {
      console.error('Error fetching hotel details:', error);
      if (error.response.status === 403) {
        alert('Log In as Admin');
        navigate('/');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHotel({
      ...hotel,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiBaseUrl}admin/hotels/${id}`;
      await axios.put(url, hotel, {
        headers: {
          'Authorization': 'Bearer ' + getToken()
        }
      });
      navigate('/admin/hotel');
    } catch (error) {
      console.error('Error updating hotel:', error);
      if (error.response.status === 403) {
        alert('Log In as Admin');
        navigate('/');
      }
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Update Hotel</h2>
        <Form onSubmit={handleSubmit}>
          <div className="col-md-12">
            <div className="row">
              <Form.Group controlId="formName" className="col-md-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Hotel Name"
                  name="name"
                  value={hotel.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCountry" className="col-md-4">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Country"
                  name="country"
                  value={hotel.country}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCity" className="col-md-4">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={hotel.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAddress" className="col-md-4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  value={hotel.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLocation" className="col-md-4">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  value={hotel.location}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formRoomsAvailable" className="col-md-4">
                <Form.Label>Rooms Available</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Rooms Available"
                  name="roomsAvailable"
                  value={hotel.roomsAvailable}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPricePerNight" className="col-md-4">
                <Form.Label>Price Per Night</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price Per Night"
                  name="pricePerNight"
                  value={hotel.pricePerNight}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formImagePath" className="col-md-4">
                <Form.Label>Image Path</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image Path"
                  name="imagePath"
                  value={hotel.imagePath}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formFreeWiFi" className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="Free WiFi"
                  name="freeWiFi"
                  checked={hotel.freeWiFi}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formComplimentaryBreakfast" className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="Complimentary Breakfast"
                  name="complimentaryBreakfast"
                  checked={hotel.complimentaryBreakfast}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formHousekeeping" className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="Housekeeping"
                  name="housekeeping"
                  checked={hotel.housekeeping}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formAirConditioningHeating" className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="Air Conditioning & Heating"
                  name="airConditioningHeating"
                  checked={hotel.airConditioningHeating}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group className="text-center mt-3">
            <Button type="submit">Update Hotel</Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateHotelForm;
