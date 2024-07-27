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

const icons = [
  { path: "/Flights", icon: <FlightIcon />, label: "Flights" },
  { path: "/Hotels", icon: <HotelIcon />, label: "Hotels" },
  { path: "/Homestays", icon: <HomeWorkIcon />, label: "Homestays" },
  {
    path: "/Holidaypackages",
    icon: <HolidayVillageIcon />,
    label: "Holiday packages",
  },
  { path: "/Trains", icon: <TrainIcon />, label: "Trains" },
  { path: "/Buses", icon: <DirectionsBusFilledIcon />, label: "Buses" },
  { path: "/Cabs", icon: <LocalTaxiIcon />, label: "Cabs" },
  { path: "/Visa", icon: <CreditCardIcon />, label: "Visa" },
  {
    path: "/CharterFlights",
    icon: <FlightTakeoffIcon />,
    label: "Charter flights",
  },
  { path: "/Activities", icon: <DownhillSkiingIcon />, label: "Activities" },
];

export const Icondiv = () => {
  const navigate = useNavigate();

  const handleIconClick = (path) => {
    navigate(path);
  };

  return (
    <Icondivcss>
      <div className="icondiv">
        {icons.map(({ path, icon, label }) => (
          <div key={path} onClick={() => handleIconClick(path)}>
            <span>
              {React.cloneElement(icon, {
                style: { fontSize: 40, padding: 4 },
              })}
            </span>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </Icondivcss>
  );
};
