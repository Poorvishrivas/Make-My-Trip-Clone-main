import React from "react";
import { useNavigate } from "react-router-dom";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Icondivcss } from "./Icondivcss";

export const Icondiv = () => {
  const navigate = useNavigate();

  const handleIconClick = (path) => {
    navigate(path);
  };

  return (
    <Icondivcss>
      <div className="icondiv">
        <div onClick={() => handleIconClick("/Flights")}>
          <span>
            <FlightIcon style={{ fontSize: 40, padding: 4 }}></FlightIcon>
          </span>
          <p>Flights</p>
        </div>
        <div onClick={() => handleIconClick("/Hotels")}>
          <span>
            <HotelIcon style={{ fontSize: 40, padding: 4 }}></HotelIcon>
          </span>
          <p>Hotels</p>
        </div>
        <div onClick={() => handleIconClick("/Homestays")}>
          <span>
            <HomeWorkIcon style={{ fontSize: 40, padding: 4 }}></HomeWorkIcon>
          </span>
          <p>Homestays</p>
        </div>
        <div onClick={() => handleIconClick("/Holidaypackages")}>
          <span>
            <HolidayVillageIcon
              style={{ fontSize: 40, padding: 4 }}
            ></HolidayVillageIcon>
          </span>
          <p>Holiday packages</p>
        </div>
        <div onClick={() => handleIconClick("/Trains")}>
          <span>
            <TrainIcon style={{ fontSize: 40, padding: 4 }}></TrainIcon>
          </span>
          <p>Trains</p>
        </div>
        <div onClick={() => handleIconClick("/Buses")}>
          <span>
            <DirectionsBusFilledIcon
              style={{ fontSize: 40, padding: 4 }}
            ></DirectionsBusFilledIcon>
          </span>
          <p>Buses</p>
        </div>
        <div onClick={() => handleIconClick("/Cabs")}>
          <span>
            <LocalTaxiIcon style={{ fontSize: 40, padding: 4 }}></LocalTaxiIcon>
          </span>
          <p>Cabs</p>
        </div>
        <div onClick={() => handleIconClick("/Visa")}>
          <span>
            <CreditCardIcon
              style={{ fontSize: 40, padding: 4 }}
            ></CreditCardIcon>
          </span>
          <p>Visa</p>
        </div>
        <div onClick={() => handleIconClick("/CahrterFlights")}>
          <span>
            <FlightTakeoffIcon
              style={{ fontSize: 40, padding: 4 }}
            ></FlightTakeoffIcon>
          </span>
          <p>Charter flights</p>
        </div>
        <div onClick={() => handleIconClick("/Activities")}>
          <span>
            <DownhillSkiingIcon
              style={{ fontSize: 40, padding: 4 }}
            ></DownhillSkiingIcon>
          </span>
          <p>Activities</p>
        </div>
      </div>
    </Icondivcss>
  );
};
