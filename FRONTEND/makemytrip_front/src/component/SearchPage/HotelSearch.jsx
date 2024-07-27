import { Header } from "./Header";
import { HotelSearchBox } from "./HotelSearchBox";
import { BottomHotels } from "./BottomHotels";
import { useState, useEffect, useContext } from "react";
import Statecontext from "../Context/Statecontext";
import axios from "axios";

export const HotelSearch = () => {
  const [data, setData] = useState([]);
  const [wifi, setWifi] = useState(false);
  const [housekeeping, setHousekeeping] = useState(false);
  const [acHeating, setAcHeating] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [range, setRange] = useState(0);
  const {
    location,
    setLocation,
    checkIn,
    setCheckIn,
    checkOut,
    setcheckOut,
    apiBaseUrl,
  } = useContext(Statecontext);

  const [select, setSelect] = useState({
    location: "",
    checkin: "",
    checkout: "",
  });

  const handleSelect = async (select) => {
    setSelect(select);
    fetchHotels(select.location);
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
    setLocation(city);
    try {
      const response = await fetch(
        `https://make-my-trip-clone-main-backend.vercel.app/api/searchHotel?city=${city}`
      );
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("Failed to fetch hotels");
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const fetchDataByFilter = async () => {
    try {
      const requestBody = {
        city: location,
        checkIn: checkIn,
        checkOut: checkOut,
        freeWiFi: wifi,
        complimentaryBreakfast: breakfast,
        housekeeping: housekeeping,
        airConditioningHeating: acHeating,
        Range: range,
      };
      const response = await axios.post(
        `${apiBaseUrl}searchFlight/searchFlightsByPrice`,
        requestBody
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    fetchDataByFilter();
  }, [wifi, housekeeping, breakfast, acHeating]);

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
        handleWifi={(e) => setWifi(e.target.checked)}
        handleHousekeeping={(e) => setHousekeeping(e.target.checked)}
        handleAcHeating={(e) => setAcHeating(e.target.checked)}
        HandleBreakfast={(e) => setBreakfast(e.target.checked)}
      />
    </>
  );
};
