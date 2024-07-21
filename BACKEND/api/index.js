const express = require("express");
const connectDB = require("../config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const hotelBookingRoutes = require("../routes/hotelBookingRoutes");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server listening on port ${port}!`));
};

start();

app.use(express.json({ extended: false }));

app.use(
  cors({
    origin: [
      "https://make-my-trip-clone-main-frontend.vercel.app", // Replace with your React app's domain

      // Local development domain
    ],
    credentials: true, // Allow cookies for authenticated requests (if applicable)
  })
);

// Define Routes
app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/auth", require("../routes/auth"));
app.use("/api/admin/flights", require("../routes/flightRoutes"));
app.use("/api/admin/hotels", require("../routes/hotelRoutes"));
app.use("/api/getallcountry", require("../routes/countryRoutes"));
app.use("/api/searchFlight", require("../routes/searchFlightRoutes"));
app.use("/api/searchHotel", require("../routes/searchHotelRoutes"));
app.use("/api", require("../routes/bookingRoutes"));
app.use("/api", hotelBookingRoutes);

module.exports = start;
