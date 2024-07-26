import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useState,useEffect,useContext } from 'react';
import { Header } from '../SearchPage/Header';
import { Bottom } from '../HomePage/Bottom';
import BookingForm from './BookingForm';
import Statecontext from '../Context/Statecontext';
import axios from "axios";


import styled from 'styled-components';
const Style = styled.div`
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  color:white
  `

  const Booking = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); 
    const [Flight,SetFlight]=useState({
        // "isDelete": false,
        // "_id": "66893c4a3938ebfcef0f7c2d",
        // "flightNumber": "JL2020",
        // "departure": "Tokyo",
        // "arrival": "San Francisco",
        // "departureTime": "2024-08-19T12:00:00.000Z",
        // "arrivalTime": "2024-08-19T05:00:00.000Z",
        // "price": 900,
        // "oneWayPrice": 450,
        // "oneWayPriceEconomy": 430,
        // "oneWayPricePremium": 470,
        // "stops": 0,
        // "stopLocations": [],
        // "refundableFares": true,
        // "airlines": "Japan Airlines",
        // "cityName": "San Francisco",
        // "airportCode": "SFO",
        // "airportName": "San Francisco International Airport",
        // "class": "Business",
        // "__v": 0
    });

    useEffect(()=>{
    if(!localStorage.getItem('token')){
      //navigate("/")
     
        const popup = document.getElementById("popup");
        popup.classList.add("active");

     
    }
  },[])

    const {Id} = useParams();
    const {apiBaseUrl}=useContext(Statecontext);
    useEffect(()=>{
     const fetchFlight = async()=>{
        const url=`${apiBaseUrl}admin/flights/${Id}`
         try{
             const response = await axios.get(url, {
                headers: {
                  'Authorization': 'Bearer ' + token
                }
              });
             SetFlight(response.data);
             console.log(response);

         }
         catch(error){
            console.log(error)
         }
     };
     fetchFlight();
    }, [Id]);



  
    return (
      
      <>
          <Header/>
          <Style>
           <BookingForm 
            flightNumber = {Flight.flightNumber}
            arrival = {Flight.arrival}
            departure = {Flight.departure}
            _id = {Flight._id}
            class ={Flight.class}
            price = {Flight.price}
           />
         </Style>
        <Bottom/>
      </>
    );
  };
  
  export default Booking;