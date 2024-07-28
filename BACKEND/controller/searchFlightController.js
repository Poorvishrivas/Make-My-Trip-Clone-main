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
    flights = flights.concat(outboundFlights);

    if (returnDate) {
      const returnQuery = {
        departure: to,
        arrival: from,
      };

      if (returnDate) {
        returnQuery.departureTime = { $gte: new Date(returnDate) };
      }

      if (flightClass) {
        returnQuery.class = flightClass;
      }

      const returnFlights = await Flight.find(returnQuery);
      flights = flights.concat(returnFlights);
    }

    if (sortByPrice) {
      flights.sort((a, b) =>
        sortByPrice === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
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
