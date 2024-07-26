import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/Hotel.jpg';
import Statecontext from '../Context/Statecontext';
import { useNavigate } from "react-router-dom";
import './HotelList.css';
import { getToken } from '../login/loginpanel/LoginForm';

const AddHotelForm = () => {
  const navigate = useNavigate();
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
    airConditioningHeating: false,
    isDelete:false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHotel({
      ...hotel,
       [name]: type === 'checkbox' ? checked : value
    });
  };
const token = getToken();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiBaseUrl}admin/Hotels`;
      await axios.post(url, hotel, {
        method:"POST",
        headers: {
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YTdjOTM2NjA3OGM2YWNlNmM5MWY2IiwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcyMDM3MjExNywiZXhwIjoxNzIwMzc1NzE3fQ.DwCOv2TilbrQ7VmBOnvD-_Iyj52RW35wh79MZZXsRlA'
          'Authorization': 'Bearer ' + token
        }
      });
      navigate('/admin/Hotels');
    } catch (error) {
      console.error('Error adding Hotels:', error);
      if(error.response.status==403){
        alert('Log In as Admin')
        navigate('/')
      }
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Add New Hotel</h2>
        <Form onSubmit={handleSubmit}>
          <div class="col-md-12">
            <div class="row">
          <Form.Group controlId="formName" class="col-md-4">
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

          <Form.Group controlId="formcountry" class="col-md-4">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              name="country"
              value={hotel.country}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formcity" class="col-md-4">
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

          <Form.Group controlId="formAddress" class="col-md-4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={hotel.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formLocation" class="col-md-4">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={hotel.location}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formRoomsAvailable" class="col-md-4">
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

          <Form.Group controlId="formPricePerNight" class="col-md-4">
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

          <Form.Group controlId="formImagePath" class="col-md-4">
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

          <Form.Group controlId="formFreeWiFi" class="col-md-4">
            <Form.Label>Free WiFi</Form.Label>
            <Form.Check
              type="checkbox"
              name="freeWiFi"
              value={hotel.freeWiFi}
              onChange={handleChange}
              class="form-checkbox"
              />
          </Form.Group>
          <Form.Group controlId="formComplimentaryBreakfast" class="col-md-4">
            <Form.Label>Complimentary Breakfast</Form.Label>
            <Form.Check
              type="checkbox"
              name="complimentaryBreakfast"
              value={hotel.complimentaryBreakfast}
              onChange={handleChange}
              class="form-checkbox"
              />
          </Form.Group>
          <Form.Group controlId="formHousekeeping" class="col-md-4">
            <Form.Label>Housekeeping</Form.Label>
            <Form.Check
              type="checkbox"
              name="housekeeping"
              value={hotel.housekeeping}
              onChange={handleChange}
              class="form-checkbox"
              />
          </Form.Group>
          <Form.Group controlId="formAirConditioningHeating" class="col-md-4">
            <Form.Label>Air Conditioning & Heating</Form.Label>
            <Form.Check
              type="checkbox"
              name="airConditioningHeating"
              value={hotel.airConditioningHeating}
              onChange={handleChange}
              class="form-checkbox"
              />
          </Form.Group>
      
          </div>
          </div>
          <Form.Group>
          <Button type="submit" class='button-primary' onclick="handleSubmit">Add Hotel</Button>
          </Form.Group>
</Form>
</Container>
</div>
  )}

  export default AddHotelForm