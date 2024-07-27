import React, { useContext, useEffect, useState } from "react";
import { Fromtocss } from "./Fromtocss";
import Statecontext from "../Context/Statecontext";

export const Fromto = () => {
  const {
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    travellerClass,
    setTravellerClass,
    apiBaseUrl,
  } = useContext(Statecontext);

  const [text, setText] = useState([]);

  useEffect(() => {
    // Reset the form values when the component mounts
    setFrom("");
    setDepartureDate("");
    setReturnDate("");
    setTravellerClass("");
  }, [setFrom, setDepartureDate, setReturnDate, setTravellerClass]);

  useEffect(() => {
    // Fetch the cities data
    const fetchCities = async () => {
      try {
        const url = `${apiBaseUrl}getallcountry/countries/cities`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setText(data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    fetchCities();
  }, [apiBaseUrl]);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    console.log("From value set to:", e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    console.log("To value set to:", e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
    console.log("Departure Date set to:", e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
    console.log("Return Date set to:", e.target.value);
  };

  const handleTravellerClassChange = (e) => {
    setTravellerClass(e.target.value);
    console.log("Traveller Class set to:", e.target.value);
  };

  return (
    <Fromtocss>
      <div className="fromtodiv">
        <div>
          <h3>FROM</h3>
          <select onChange={handleFromChange} name="from" value={from}>
            {text.map((e) => (
              <option value={e.cityName} key={e.cityName}>
                {e.cityName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>TO</h3>
          <select onChange={handleToChange} name="to" value={to}>
            {text.map((e) => (
              <option value={e.cityName} key={e.cityName}>
                {e.cityName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="fromtodiv2">
        <div>
          <h3 className="abc">DEPARTURE</h3>
          <input
            type="date"
            className="date"
            name="departureDate"
            onChange={handleDepartureDateChange}
            value={departureDate}
          />
        </div>
        <div>
          <h3>RETURN</h3>
          <input
            type="date"
            className="date"
            name="returnDate"
            onChange={handleReturnDateChange}
            value={returnDate}
          />
        </div>
        <div>
          <h3>TRAVELLER & CLASS</h3>
          <select
            name="travellerClass"
            onChange={handleTravellerClassChange}
            value={travellerClass}
          >
            <option value="">Select</option>
            <option value="Economy">Economy</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
      </div>
    </Fromtocss>
  );
};
