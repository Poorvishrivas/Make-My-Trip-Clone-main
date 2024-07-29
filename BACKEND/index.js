const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// Connect to the database
const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server running on port ${port}!`));
};
start();

// Middleware
app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: "https://make-my-trip-clone-main-frontend.vercel.app", // Replace with your React app's domain
    credentials: true, // Allow cookies for authenticated requests (if applicable)
  })
);

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
app.use("/api", require("./routes/bookingRoutes")); // Make sure this matches with bookingRoutes
app.use("/api", require("./routes/hotelBookingRoutes")); // Check for potential conflicts with other routes
