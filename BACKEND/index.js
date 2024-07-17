const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const hotelBookingRoutes = require("./routes/hotelBookingRoutes");

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// Database connection
const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server running on port ${port}!`));
};

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust to your React app's URL
    credentials: true, // Allow cookies if necessary
  })
);

app.use(express.json({ extended: false }));

// Define Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin/flights", require("./routes/flightRoutes"));
app.use("/api/admin/hotels", require("./routes/hotelRoutes"));
app.use("/api/getallcountry", require("./routes/countryRoutes"));
app.use("/api/searchFlight", require("./routes/searchFlightRoutes"));
app.use("/api/searchHotel", require("./routes/searchHotelRoutes"));
app.use("/api", require("./routes/bookingRoutes"));
app.use("/api", hotelBookingRoutes);

// Start the server
start();
