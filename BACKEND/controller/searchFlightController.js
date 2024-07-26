const Flight = require("../model/Flight");

exports.searchFlights = async (req, res) => {
  const { from, to, departureDate, returnDate, flightClass } = req.query;

  let query = {
    departure: from,
    arrival: to,
  };

  if (flightClass) {
    query.class = flightClass;
  }

  console.log("Outbound flight query:------------", query);

  let flights = [];

  try {
    const outboundFlights = await Flight.find(query);
    console.log(outboundFlights);
    flights = flights.concat(outboundFlights);
    if (returnDate) {
      const returnQuery = {
        departure: to,
        arrival: from,
      };

      if (departureDate) {
        returnQuery.departureTime = { $gte: new Date(returnDate) };
      }

      if (flightClass) {
        returnQuery.class = flightClass;
      }

      console.log("Return flight query:", returnQuery);

      const returnFlights = await Flight.find(returnQuery);
      flights = flights.concat(returnFlights);
      console.log(returnFlights);
    }

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights", error });
  }
};

exports.searchFlightsByPrice = async (req, res) => {
  const {
    from,
    to,
    departureDate,
    returnDate,
    flightClass,
    sortByPrice,
    refundableFares,
    airlines,
  } = req.body;
  console.log(req.body, "here");

  let query = {
    departure: from,
    arrival: to,
  };

  if (departureDate) {
    query.departureTime = { $gte: new Date(departureDate) };
  }

  if (flightClass) {
    query.class = flightClass;
  }

  let flights = [];

  try {
    const outboundFlights = await Flight.find(query);
    console.log("hello");
    console.log(outboundFlights);
    flights = flights.concat(outboundFlights);

    if (returnDate) {
      const returnQuery = {
        departure: to,
        arrival: from,
      };

      if (departureDate) {
        returnQuery.departureTime = { $gte: new Date(returnDate) };
      }

      if (flightClass) {
        returnQuery.class = flightClass;
      }

      const returnFlights = await Flight.find(returnQuery);
      flights = flights.concat(returnFlights);
    }

    if (sortByPrice === "lowToHigh") {
      flights.sort((a, b) => a.price - b.price);
    }
    if (sortByPrice === "highToLow") {
      flights.sort((a, b) => b.price - a.price);
    }
    if (refundableFares) {
      flights = flights.filter((flight) => flight.refundableFares === true);
    }
    if (airlines && Array.isArray(airlines) && airlines.length > 0) {
      flights = flights.filter((flight) =>
        airlines.some(
          (airline) => flight.airlines.toLowerCase() === airline.toLowerCase()
        )
      );
    }

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights", error });
  }
};
