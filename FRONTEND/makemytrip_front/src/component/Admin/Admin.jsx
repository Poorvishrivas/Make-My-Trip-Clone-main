// frontend/src/components/MyTrips.js
import React from "react";
import "./Admin.css";
import { Nav, Tab, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Container className="container-background mt-5">
      <Tab.Container defaultActiveKey="FlightBookings">
        <Row className="justify-content-center">
          <Col md={8}>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="FlightBookings">
                  <i className="bi bi-briefcase"></i> Flight Bookings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="HotelBookings">
                  <i className="bi bi-x-circle"></i> Hotel Bookings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={8} className="text-center">
            <Tab.Content>
              <Tab.Pane eventKey="FlightBookings">
                <div className="empty-state">
                  <h5>Flights Booking Management</h5>
                  {/* <p>When you book a trip, you will see your itinerary here.</p> */}
                  {/* <Button variant="primary">PLAN A TRIP</Button> */}
                  <Button
                    variant="primary"
                    onClick={() => navigate("/Admin/FlightList")}
                  >
                    Flight Tickets
                  </Button>{" "}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="HotelBookings">
                <div className="empty-state">
                  <h5>Hotels Booking Management</h5>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/admin/hotel")}
                  >
                    Hotels Booking
                  </Button>{" "}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="completed">
                <div className="empty-state">
                  <h5>No completed bookings.</h5>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Admin;
