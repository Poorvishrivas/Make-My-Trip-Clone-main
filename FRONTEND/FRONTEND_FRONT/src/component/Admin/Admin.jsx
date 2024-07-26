// frontend/src/components/MyTrips.js
import React, { useEffect ,useContext, useState} from "react";
import axios from 'axios'
import {  Alert} from '@mui/material'
import "./Admin.css";
import { Nav, Tab, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Statecontext from '../Context/Statecontext';


const Admin = () => {
  const navigate = useNavigate();

  console.log('asda')
  const [flight,setFlight] = useState([]);
  const [hotel,setHotel] = useState([]);
  const { apiBaseUrl } = useContext(Statecontext);
  const [count,setCount] = useState(0);
  const token = localStorage.getItem('token'); 
  const [errorMessage, setErrorMessage] = useState(null);
   const [successMessage, setSuccessMessage] = useState(null);
  useEffect(()=>{
      if(!token){
        navigate('/')
      }
  },[])
  useEffect(()=>{
   
    const fetch = async ()=>{
      try {
        const flight = await axios.get(`${apiBaseUrl}book/flightshistory`, {
          headers: {
              'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
          },
      });
      const hotel = await axios.get(`${apiBaseUrl}book/hotelshistory`, {
        headers: {
            'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
        },
    });
    setFlight(flight.data);
    setHotel(hotel.data);
    console.log(flight.data,hotel.data)
      } catch (error) {
        console.error('Error fetching history:', error);
            alert('Failed to book hotel. Please try again.');
      }
      
    }
    fetch();
  },[count]);

  const handleFlight = async(id) =>{
    try {
      await axios.post(`${apiBaseUrl}cancel/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
        },
    });
    setCount(prev=>prev+1)
    setSuccessMessage('Canceled !!')
    } catch (error) {
      console.error('Error fetching history:', error);
      setErrorMessage('Failed to cancel flight. Please try again.');
      
    }
      
  }
  const handleHotel = async(id) =>{
    try {
        await axios.post(`${apiBaseUrl}cancelHotel/${id}`, {
          headers: {
              'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
          },
      });
      setCount(prev=>prev+1)
      setSuccessMessage('Canceled !!')
      } catch (error) {
        console.error('Error fetching history:', error);
        setErrorMessage('Failed to cancel hotel. Please try again.');
      }
}
const handleCloseAlert = () => {
  setErrorMessage(null);
};
  return (
    <Container className="container-background mt-5">
       {errorMessage && (
        <Alert severity="error" onClose={handleCloseAlert}>
          {errorMessage}
        </Alert>)}
        {successMessage && (
        <Alert severity="success" onClose={()=>setSuccessMessage(null)}>
          {successMessage}
        </Alert>)}
      <Tab.Container defaultActiveKey="FlightBookings">
        <Row className="justify-content-center">
          <Col md={8}>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="FlightBookings">
                  <i className="bi bi-briefcase"></i> Flight Bookings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="HotelBookings">
                  <i className="bi bi-x-circle"></i> Hotel Bookings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={8} className="text-center">
            <Tab.Content>
              <Tab.Pane eventKey="FlightBookings">
                <div className="empty-state">
                  <h5>Flights Booking Management</h5>
                  {flight.map(booking => (
                    <div style={{marginBottom:30,padding: 25,border: "2px solid white",display:'flex',gap:20,justifyContent:'space-around'}} key={booking._id}>

        <div    >
          <div>Booking Date: {new Date(booking.bookingDate).toLocaleString()}</div>
          <div>Flight ID: {booking.flightId}</div>
          <div>Number of Tickets: {booking.numberOfTickets}</div>
          <div>Passenger Email: {booking.passengerEmail}</div>
          <div>Status: {booking.status}</div>
          <div>Total Price: {booking.totalPrice}</div>
          <div>User ID: {booking.userid}</div>
          <div>
            Passenger Details:
            <ul>
              {booking.passengerDetails.map(passenger => (
                <li key={passenger._id}>
                  <div>Name: {passenger.name}</div>
                  <div>Age: {passenger.age}</div>
                  <div>Gender: {passenger.gender}</div>
                  <div>Amount: {passenger.amount}</div>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
        <div>
           <Button
          variant="primary"
          onClick={()=>handleFlight(booking._id)}
          >
          Cancel Booking
        </Button>
        </div>
          </div>
      ))}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="HotelBookings">
                <div className="empty-state">
                  <h5>Hotels Booking Management</h5>
                  {hotel.map(item => {
                  return (
                    <div style={{marginBottom:30,padding: 25,border: "2px solid white",display:'flex',justifyContent:'space-around'}}key={item._id}>
                     
                    <div >
                      <div>Booking Date: {new Date(item.bookingDate).toLocaleString}</div>
                      <div>Customer Email: {item.customerEmail}</div>
                      <div>Customer Name: {item.customerName}</div>
                      <div>Hotel ID: {item.hotelId}</div>
                      <div>Number of Rooms: {item.numberOfRooms}</div>
                      <div>Total Price: {item.totalPrice}</div>
                      </div>
                      <div>
                      <Button
                  variant="primary"
                  onClick={()=>handleHotel(item._id)}
                  >
                  Cancel Booking
                </Button>
                    </div>
                  </div>
                  );
                })}

                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="completed">
                <div className="empty-state">
                  <h5>No completed bookings.</h5>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Admin;
