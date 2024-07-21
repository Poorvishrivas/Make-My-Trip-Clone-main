import React, { useState, useEffect, useRef, useContext } from 'react';
import './Bookingform.css';
import axios from 'axios';
import Statecontext from '../Context/Statecontext';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';


const HotelBookingForm = (props) => {
    const [numRooms, setNumRooms] = useState(0);
    const [amount, setAmount] = useState(props.pricePerNight);
    const [totalAmount, setTotalAmount] = useState(props.pricePerNight * 1.18);
    const emailRef = useRef(null);
    const token = localStorage.getItem('token'); 
    const { apiBaseUrl } = useContext(Statecontext);
    const navigate = useNavigate(); 

    useEffect(() => {
        setAmount(numRooms * props.pricePerNight);
        setTotalAmount(amount * 1.18);
    }, [numRooms, props.pricePerNight]);

    const handleRoomsChange = (e) => {
        const newNumRooms = parseInt(e.target.value, 10) || 0;
        setNumRooms(newNumRooms);
        setAmount(newNumRooms * props.pricePerNight);
        setTotalAmount(newNumRooms * props.pricePerNight * 1.18);
    };

    const getCurrentDate = () => {
        const date = new Date();
        return date.toDateString();
    };

    const handleSubmit = async (e) => {
        var currentdate = getCurrentDate();
        e.preventDefault();
        const decoded = jwtDecode(token);
        console.log(decoded.user.id);
        const payload = {
            userid:decoded.user.id,
            hotelId: props._id,
            customerName: localStorage.getItem("username"),
            customerEmail: emailRef.current.value,
            numberOfRooms: numRooms,
            bookingDate: currentdate,
            totalPrice: totalAmount,
        };

        console.log(payload, "payload");

        try {
            const response = await axios.post(`${apiBaseUrl}bookHotel`, payload, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
                },
            });
            
            navigate('/booking');
        } catch (error) {
            console.error('Error booking hotel:', error);
            alert('Failed to book hotel. Please try again.');
        }
    };

    return (
        <div className="main-content-wrap">
            <div className="page-title-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                            <div className="page-title">
                                <h3>Hotel Booking</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-box-style light-pink-background">
                <div className="others-title">
                    <h3>Booking for Hotel {props.name}</h3>
                </div>

                <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-md-4">
                        <label htmlFor="HotelName" className="form-label">Hotel Name</label>
                        <input type="text" className="form-control" id="HotelName" value={props.name} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="Location" value={props.location} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" value={props.address} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="PricePerNight" className="form-label">Price per Night</label>
                        <input type="text" className="form-control" id="PricePerNight" value={props.pricePerNight} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="NumRooms" className="form-label">Number of Rooms</label>
                        <input type="number" className="form-control" id="NumRooms" value={numRooms} onChange={handleRoomsChange} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input type="text" className="form-control" id="Amount" value={amount} readOnly />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="Email" ref={emailRef} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="TotalAmount" className="form-label">Total Amount with Tax</label>
                        <input type="number" className="form-control" readOnly id="TotalAmount" value={totalAmount} required />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HotelBookingForm;
