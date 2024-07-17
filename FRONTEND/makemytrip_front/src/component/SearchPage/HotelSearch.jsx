import { Header } from "./Header";
import { HotelSearchBox } from "./HotelSearchBox";
import { BottomHotels } from "./BottomHotels";
import { useState, useEffect,useContext } from "react";
import Statecontext from '../Context/Statecontext';
import axios from "axios";

export const HotelSearch = () => {
  const [data, setData] = useState([]);
  const [wifi, setWifi] = useState();
  const [housekeeping, setHousekeeping] = useState();
  const [acHeating, setAcHeating] = useState();
  const [breakfast, setBreakfast] = useState();
  const [range, setRange] = useState();
  const { location, setLocation, checkIn, setCheckIn, checkOut, setcheckOut, apiBaseUrl } = useContext(Statecontext);
  
  const [select, setSelect] = useState({ location: "", checkin: "", checkout: "" });
  const [arrOfHotels,setarrOfHotels]=useState([]);
  const handleSelect = async (select) => {

    setSelect(select); // Update state with selected location, checkin, checkout
    fetchHotels(select.location); // Fetch hotels based on selected location
  };


  const handleSort = (e) => {
 
    if (e === true) {
      const sortedList = [...data].sort(
        (a, b) => a.pricePerNight - b.pricePerNight
      );
    
      setData(sortedList);
    }
  };

  const handleHigh = (e) => {
 
    if (e === true) {
      const sortedList = [...data].sort(
        (a, b) => b.pricePerNight - a.pricePerNight
      );
    
     
      setData(sortedList);
    }
  };

  const fetchHotels = async (city) => {
    setLocation(city)
    try {
      const response = await fetch(`https://make-my-trip-clone-backend.vercel.app/api/searchHotel?city=${city}`);
      if (response.ok) {
        const result = await response.json();
        setData(result); // Update state with fetched hotel data
      } else {
        console.error("Failed to fetch hotels");
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };
 

  const handleHousekeeping = (e) => {
    console.log('handleHousekeeping',e.target.checked)
    setHousekeeping(e.target.checked);
   
  };

  const handleAcHeating = (e) => {
    setAcHeating(e.target.checked);
   
  };

  const HandleBreakfast = (e) => {
    if (e === true) {
      setBreakfast(e);
      fetchDataByFilter()
    }else{
      fetchData();
    }
  };

  const handleRange = (e) => {
    setRange(e)
    if (e != 0) {
      const sortedList = [...data].map(
        (a) => a.pricePerNight < e
      );
      setData(sortedList);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}searchHotel`, {
        params: {
          city: location,
          checkIn: checkIn,
          checkOut: checkOut,//"2024-07-15",
        }
      });
      const ans = response.data;
        setData(ans);

    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  const fetchDataByFilter = async () => {
  try {
   
    const requestBody = {
      city: location,
      checkIn: checkIn,
      checkOut: checkOut,
      freeWiFi: wifi,
      complimentaryBreakfast : breakfast,
      housekeeping : housekeeping,
      airConditioningHeating : acHeating,
      Range : range

    };
    console.log(requestBody,"requestBody")
    const response = await axios.post(`${apiBaseUrl}searchFlight/searchFlightsByPrice`, requestBody);

    const ans = response.data;

      setData(ans);
      console.log(ans, "check");
    // }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching data");
  }
}
const fetchFilteredHotels = async () => {
  try {
    const params = {
      city: location,
      freeWiFi: wifi,
      complimentaryBreakfast: breakfast,
      housekeeping: housekeeping,
      airConditioningHeating: acHeating,
      sortPrice: range > 0 ? range : undefined
    };
    console.log(params)
    const response = await axios.get(`${apiBaseUrl}searchHotel/searchHotelsByAmenities`, { params });
    if (response.status === 200) {
      setData(response.data); // Update state with filtered hotel data
    } else {
      console.error("Failed to fetch filtered hotels");
    }
  } catch (error) {
    console.error("Error fetching filtered hotels:", error);
  }
};
const handleWifi = (e) => {
  console.log("check value",e.target.checked)
  setWifi(e.target.checked);
  
};
const handleBreakfast = (e) => {
  setBreakfast(e.target.checked);
}
useEffect(()=>{
  fetchFilteredHotels();
},[wifi,housekeeping,breakfast,acHeating])
const bookData = (e) => {
  localStorage.setItem("buy", JSON.stringify(e));
};
  return (
    <>
      <Header />
      <HotelSearchBox handle={handleSelect} />
      <BottomHotels
        data={data}
        bookData={bookData}
        sorting={handleSort}
        sorthigh={handleHigh}
        handleWifi={handleWifi}
        handleHousekeeping={handleHousekeeping}
        handleAcHeating={handleAcHeating}
        HandleBreakfast={handleBreakfast}
        // handleRange={handleRange}
        // handleHotels={handleHotels}

      />
    </>
  );
};
