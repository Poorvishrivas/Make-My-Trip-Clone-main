// src/Context/Statecontext.js
import React, { createContext, useState } from "react";

const Statecontext = createContext();

export const StateProvider = ({ children }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellerClass, setTravellerClass] = useState("");
  const apiBaseUrl = "http://your-api-url";

  return (
    <Statecontext.Provider
      value={{
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
      }}
    >
      {children}
    </Statecontext.Provider>
  );
};

export default Statecontext;
