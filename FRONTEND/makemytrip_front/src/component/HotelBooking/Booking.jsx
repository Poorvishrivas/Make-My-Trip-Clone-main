import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react';
import { Header } from '../SearchPage/Header';
import { Bottom } from '../HomePage/Bottom';
import HotelBookingForm from './HotelBookingForm';
import Statecontext from '../Context/Statecontext';
import axios from 'axios';

import styled from 'styled-components';
const Style = styled.div`
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  color: white;
`;

const Booking = () => {
    const token = localStorage.getItem('token'); 
    const [hotel, setHotel] = useState({});
    const { Id } = useParams();
    const { apiBaseUrl } = useContext(Statecontext);

    useEffect(()=>{
      if(!localStorage.getItem('token')){
        //navigate("/")
       
          const popup = document.getElementById("popup");
          popup.classList.add("active");
  
       
      }
    },[])
    useEffect(() => {
      const fetchHotel = async () => {
        const url = `${apiBaseUrl}admin/hotels/${Id}`;
        try {
          const response = await axios.get(url, {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          setHotel(response.data);
          console.log(response.data, 'hotel');
        } catch (error) {
          console.log(error);
        }
      };
      fetchHotel();
    }, [Id]);

    return (
      <>
          <Header/>
          <Style>
           <HotelBookingForm 
            name={hotel.name}
            location={hotel.location}
            address={hotel.address}
            _id={hotel._id}
            pricePerNight={hotel.pricePerNight}
           />
         </Style>
        <Bottom/>
      </>
    );
};

export default Booking;
