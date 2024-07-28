import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import NavBar from "../NavBar";
import backgroundImage from "../../Assets/Hotel.jpg";
import Statecontext from "../Context/Statecontext";
import { useNavigate } from "react-router-dom";
import "./AddHotelForm.css";
import { getToken } from "../login/loginpanel/LoginForm";

const AddHotelForm = () => {
  const navigate = useNavigate();
  const { apiBaseUrl } = useContext(Statecontext);
  const [hotel, setHotel] = useState({
    name: "",
    country: "",
    city: "",
    address: "",
    location: "",
    roomsAvailable: "",
    pricePerNight: "",
    imagePath: "",
    freeWiFi: false,
    complimentaryBreakfast: false,
    housekeeping: false,
    airConditioningHeating: false,
    isDelete: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHotel({
      ...hotel,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const token = getToken();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiBaseUrl}admin/Hotels`;
      await axios.post(url, hotel, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      navigate("/admin/Hotels");
    } catch (error) {
      console.error("Error adding Hotels:", error);
      if (error.response.status === 403) {
        alert("Log In as Admin");
        navigate("/");
      }
    }
  };

  return (
    <div
      className="add-hotel-form"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      <Container className="form-container">
        <h2 className="text-center mb-4">Add New Hotel</h2>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group controlId="formName" className="col-md-4">
              <Form.Label className="form-label">Name</Form.Label>
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
              <Form.Label className="form-label">Country</Form.Label>
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
              <Form.Label className="form-label">City</Form.Label>
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
              <Form.Label className="form-label">Address</Form.Label>
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
              <Form.Label className="form-label">Location</Form.Label>
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
              <Form.Label className="form-label">Rooms Available</Form.Label>
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
              <Form.Label className="form-label">Price Per Night</Form.Label>
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
              <Form.Label className="form-label">Image Path</Form.Label>
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
              <Form.Label className="form-label">Free WiFi</Form.Label>
              <Form.Check
                type="checkbox"
                name="freeWiFi"
                checked={hotel.freeWiFi}
                onChange={handleChange}
                className="form-checkbox"
              />
            </Form.Group>

            <Form.Group
              controlId="formComplimentaryBreakfast"
              className="col-md-4"
            >
              <Form.Label className="form-label">
                Complimentary Breakfast
              </Form.Label>
              <Form.Check
                type="checkbox"
                name="complimentaryBreakfast"
                checked={hotel.complimentaryBreakfast}
                onChange={handleChange}
                className="form-checkbox"
              />
            </Form.Group>

            <Form.Group controlId="formHousekeeping" className="col-md-4">
              <Form.Label className="form-label">Housekeeping</Form.Label>
              <Form.Check
                type="checkbox"
                name="housekeeping"
                checked={hotel.housekeeping}
                onChange={handleChange}
                className="form-checkbox"
              />
            </Form.Group>

            <Form.Group
              controlId="formAirConditioningHeating"
              className="col-md-4"
            >
              <Form.Label className="form-label">
                Air Conditioning & Heating
              </Form.Label>
              <Form.Check
                type="checkbox"
                name="airConditioningHeating"
                checked={hotel.airConditioningHeating}
                onChange={handleChange}
                className="form-checkbox"
              />
            </Form.Group>
          </div>
          <Form.Group className="text-center mt-4">
            <Button type="submit" className="button-primary">
              Add Hotel
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default AddHotelForm;
