import React, { useState, useEffect,useRef, useContext  } from 'react';
import FlightIcon from "@mui/icons-material/Flight";
import './FlightBooking.css';
import axios from 'axios';
import Statecontext from '../Context/Statecontext';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const BookingForm = (props) => {
    const [numPassengers, setNumPassengers] = useState(0);
    const [amount, setAmount] = useState(props.price);
    const [totalAmount, setTotalAmount] = useState(props.price*1.18);
    const [passengerDetails, setPassengerDetails] = useState([]);
    const emailRef = useRef(null);
    const token = localStorage.getItem('token'); 
    const {apiBaseUrl}=useContext(Statecontext);
    const navigate = useNavigate(); 
    useEffect(() => {
    
        
        // Initialize passenger details based on the number of passengers
        const initialPassengerDetails = Array.from({ length: numPassengers }, (_, index) => ({
            name: '',
            age: '',
            gender: '',
            amount: props.price,
        }));
        setPassengerDetails(initialPassengerDetails);
    }, [numPassengers, props.price]);

    const handlePassengersChange = (e) => {
        const newNumPassengers = parseInt(e.target.value, 10) || 0;
        setNumPassengers(newNumPassengers); 
        setAmount(newNumPassengers * props.price);
        setTotalAmount(newNumPassengers * props.price*1.18)
    };

    const handlePassengerDetailChange = (index, field, value) => {
        const updatedDetails = passengerDetails.map((detail, i) => {
            if (i === index) {
                return { ...detail, [field]: value };
            }
            return detail;
        });
        setPassengerDetails(updatedDetails);
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

              // decoded contains the decoded JWT payload
           
        const payload = {
            flightId: props._id,
          //  passengerName:localStorage.getItem("username"),
            passengerEmail: emailRef.current.value,
            numberOfTickets: numPassengers,
            bookingDate: currentdate,
            totalPrice: totalAmount,
            passengerDetails, 
            userid:decoded.user.id
        };

        console.log(payload, "payload");

        try {
            const response = await axios.post(`${apiBaseUrl}book`, payload, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the bearer token in the headers
                },
            });
            
            navigate('/booking');
        } catch (error) {
            console.error('Error booking flight:', error);
            alert('Failed to book flight. Please try again.');
        }
    };
    return (
        <div className="main-content-wrap">
            <div className="page-title-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                            <div className="page-title">
                                <h3><FlightIcon style={{ fontSize: 30, padding: 4 }} /> Flight Booking</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-box-style light-pink-background">
                <div className="others-title">
                    <h3>Booking for Flight {props.flightNumber}</h3>
                </div>

                <form className="row g-4">
                    <div className="col-md-4">
                        <label htmlFor="FlightNo" className="form-label FlightNo">Flight NO</label>
                        <input type="input" className="form-control" id="FlightNo" placeholder="Flight111" value={props.flightNumber} readOnly />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="From" className="form-label">From</label>
                        <input type="input" className="form-control" id="From" placeholder="From Location" value={props.departure} readOnly />
                    </div>
                    <div className="col-4">
                        <label htmlFor="To" className="form-label">TO</label>
                        <input type="input" className="form-control" id="To" placeholder="Destination" value={props.arrival} readOnly />
                    </div>
                    <div className="col-md-3 dnone">
                        <label htmlFor="FightId" className="form-label">Flight Id</label>
                        <input type="input" className="form-control" id="FightId" value={props._id} readOnly />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Class" className="form-label">Class</label>
                        <input type="text" className="form-control" id="Class" value={props.class} readOnly />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="Price" value={props.price} readOnly />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="NoofPassanger" className="form-label">No of Passanger</label>
                        <input type="number" className="form-control" id="NoofPassanger" value={numPassengers} onChange={handlePassengersChange} required/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input type="text" className="form-control" id="Amount" value={amount} readOnly />
                    </div>
                    <div className="col-12">
                        <label htmlFor="Passanger1" className="form-label" Sty>Passenger Details</label>
                        <table id="#PassengerTable" className="col-12">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: numPassengers }, (_, index) => (
                                    <tr key={index} className={`Passenger${index + 1}`}>
                                        <td>
                                            <input type="text" className="form-control PassangerName" placeholder="Passenger Name" value={passengerDetails[index]?.name || ''} onChange={(e) => handlePassengerDetailChange(index, 'name', e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="number" className="form-control" placeholder="Passenger Age" value={passengerDetails[index]?.age || ''} onChange={(e) => handlePassengerDetailChange(index, 'age', e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" placeholder="Male/Female" value={passengerDetails[index]?.gender || ''} onChange={(e) => handlePassengerDetailChange(index, 'gender', e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control Price" value={props.price} readOnly />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12">
                        <label htmlFor="Address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" ref={emailRef} required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="totalAmount" className="form-label">Total Amount with Tax</label>
                        <input type="number" className="form-control" readOnly id="totalAmount" value={totalAmount} required/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
