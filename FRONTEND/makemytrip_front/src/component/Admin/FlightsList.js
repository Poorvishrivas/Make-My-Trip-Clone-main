import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Table, Button } from "react-bootstrap";
import NavBar from "../NavBar";
import backgroundImage from "../../Assets/flight.jpg";
import "./FlightsList.css";
import Statecontext from "../Context/Statecontext";
import { useNavigate } from "react-router-dom";

import { getToken } from "../login/loginpanel/LoginForm";

const FlightsList = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(100);
  const { apiBaseUrl } = useContext(Statecontext);
  const token = getToken();
  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const url = `${apiBaseUrl}admin/flights`;
      const response = await axios.get(url, {
        headers: {
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YTdjOTM2NjA3OGM2YWNlNmM5MWY2IiwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcyMDM3MjExNywiZXhwIjoxNzIwMzc1NzE3fQ.DwCOv2TilbrQ7VmBOnvD-_Iyj52RW35wh79MZZXsRlA'
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
      if (response.status == 200) setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
      if (error.response.status == 403) {
        alert("Log In as Admin");
        navigate("/");
      }
    }
  };

  const deleteFlight = async (flightId) => {
    try {
      const url = `${apiBaseUrl}admin/flights/${flightId}`;
      await axios.delete(url, {
        headers: {
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YTdjOTM2NjA3OGM2YWNlNmM5MWY2IiwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcyMDM3MjExNywiZXhwIjoxNzIwMzc1NzE3fQ.DwCOv2TilbrQ7VmBOnvD-_Iyj52RW35wh79MZZXsRlA'
          Authorization: "Bearer " + token,
        },
      });
      setFlights(flights.filter((flight) => flight._id !== flightId));
    } catch (error) {
      console.error("Error deleting flight:", error);
    }
  };

  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFlights = flights.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Flights List</h2>
        <div className="d-flex justify-content-end mb-3">
          <Button variant="primary" onClick={() => navigate("/add-flight")}>
            Add New Flight
          </Button>{" "}
          {/* New button */}
        </div>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="thead-fixed">
              <tr className="table-success">
                <th>#</th>
                <th>Flight Number</th>
                <th>Flight Seats</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Price</th>
                <th>One-Way Price</th>
                <th>One-Way Economy</th>
                <th>One-Way Premium</th>
                <th>Stops</th>
                <th>Stop Locations</th>
                <th>Refundable Fares</th>
                <th>City</th>
                <th>Airport Code</th>
                <th>Airport Name</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody-scroll">
              {currentFlights.map((flight, index) => (
                <tr
                  className="table-warning"
                  key={flight._id}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                >
                  <td>{index + 1}</td>
                  <td>{flight.flightNumber}</td>
                  <td>{flight.slot}</td>
                  <td>{flight.departure}</td>
                  <td>{flight.arrival}</td>
                  <td>{new Date(flight.departureTime).toLocaleString()}</td>
                  <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
                  <td>${flight.price}</td>
                  <td>${flight.oneWayPrice}</td>
                  <td>${flight.oneWayPriceEconomy}</td>
                  <td>${flight.oneWayPricePremium}</td>
                  <td>{flight.stops}</td>
                  <td>
                    {flight.stopLocations?.length > 0
                      ? flight.stopLocations.map((stop, i) => (
                          <span key={i}>
                            {stop}
                            {i < flight.stopLocations.length - 1 && ", "}
                          </span>
                        ))
                      : "NA"}
                  </td>
                  <td>{flight.refundableFares ? "Yes" : "No"}</td>
                  <td>{flight.cityName}</td>
                  <td>{flight.airportCode}</td>
                  <td>{flight.airportName}</td>
                  <td>{flight.class}</td>

                  <td>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => navigate(`/update-flight/${flight._id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteFlight(flight._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from(
              { length: Math.ceil(flights.length / itemsPerPage) },
              (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            )}
            <Pagination.Next
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(flights.length / itemsPerPage)
              }
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default FlightsList;
