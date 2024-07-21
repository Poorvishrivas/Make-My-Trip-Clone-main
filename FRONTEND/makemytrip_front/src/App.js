import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Statecontext from "./component/Context/Statecontext";
import { Main } from "./component/HomePage/Main";
import { Search } from "./component/SearchPage/Search";
import FlightsList from "./component/Admin/FlightsList";
import { UnderConstruction } from "./component/SearchPage/Underconstruction";
import { HotelSearch } from "./component/SearchPage/HotelSearch";

import AddFlightForm from "./component/Admin/AddFlightForm";
import HotelsList from "./component/Admin/HotelsList";
import { useState } from "react";
import AddHotelForm from "./component/Admin/AddHotelForm";
import BookingPage from "./component/HotelBooking/BookingPage";

import UpdateFlightForm from "./component/Admin/UpdateFlightForm";
import UpdateHotelForm from "./component/Admin/UpdateHotelForm";
import FlightBookingPage from "./component/FlightBooking/FlightBookingPage";

import UserForm from "./component/login/UserForm";
import Booking from "./component/FlightBooking/Booking";
import Bookings from "./component/HotelBooking/Booking";
import MyTrips from "./component/MyTrips/MyTrips";
import FlightBookingDetails from "./component/MyTrips/FlightBookingDetails";
import HotelBookingDetails from "./component/MyTrips/HotelBookingDetails";
import Admin from "./component/Admin/Admin";

function App() {
  let apiBaseUrl = "http://localhost:5000/api/";
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellerClass, setTravellerClass] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="App">
      <Statecontext.Provider
        value={{
          apiBaseUrl,
          from,
          location,
          setLocation,
          setFrom,
          to,
          setTo,
          departureDate,
          setDepartureDate,
          returnDate,
          setReturnDate,
          travellerClass,
          setTravellerClass,
        }}
      >
        {/* <RouterProvider router={router}/> */}

        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Flights" element={<Search />} />
              <Route path="/Hotels" element={<HotelSearch />} />
              <Route path="/Homestays" element={<UnderConstruction />} />
              <Route path="/Holidaypackages" element={<UnderConstruction />} />
              <Route path="/Trains" element={<UnderConstruction />} />
              <Route path="/Buses" element={<UnderConstruction />} />
              <Route path="/Cabs" element={<UnderConstruction />} />
              <Route path="/Visa" element={<UnderConstruction />} />
              <Route path="/CahrterFlights" element={<UnderConstruction />} />
              <Route path="/Activities" element={<UnderConstruction />} />
              <Route path="/Admin/FlightList" element={<FlightsList />} />
              <Route path="/admin/flight" element={<FlightsList />} />
              <Route path="/admin/hotel" element={<HotelsList />} />
              <Route path="/add-flight" element={<AddFlightForm />} />
              <Route path="/add-hotel" element={<AddHotelForm />} />
              <Route path="/Hotelbooking" element={<BookingPage />} />
              <Route path="/SignUp" element={<UserForm />} />
              <Route path="/FlightBooking/:Id" element={<Booking />} />
              <Route path="/HotelBooking/:Id" element={<Bookings />} />
              {/* <Route path="/booking" element={<BookingPage />} /> */}
              <Route path="/MyTrips" element={<MyTrips />} />
              <Route path="/booking" element={<Admin />} />
              <Route
                path="/FlightBookingDetails"
                element={<FlightBookingDetails />}
              />{" "}
              <Route
                path="/HotelBookingDetails"
                element={<HotelBookingDetails />}
              />
              <Route path="/update-flight/:id" element={<UpdateFlightForm />} />
              <Route
                path="/admin/update-hotel/:id"
                element={<UpdateHotelForm />}
              />
              <Route
                path="/flight-booking/:id"
                element={<FlightBookingPage />}
              />
              <Route path="/BookingPage" element={<BookingPage />} />
              <Route path="/SignUp" element={<UserForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Statecontext.Provider>
    </div>
  );
}

export default App;
