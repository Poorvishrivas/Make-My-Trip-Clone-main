const countries = require("../utile/countries");
const countriesWithAirports = require("../utile/CountryCities");

const getCountries = (req, res) => {
  try {
    console.log("Fetching countries");
    const countryList = countries.map((country) => country.country);
    res.status(200).json(countryList);
  } catch (error) {
    console.error("Error fetching countries:", error.message);
    res.status(500).json({ message: "Error fetching countries" });
  }
};

const getCountryCities = (req, res) => {
  try {
    const { countryName } = req.params;
    const country = countries.find(
      (country) => country.country.toLowerCase() === countryName.toLowerCase()
    );

    if (!country) {
      return res
        .status(404)
        .json({ message: `Country '${countryName}' not found.` });
    }

    res.status(200).json(country.cities);
  } catch (error) {
    console.error("Error fetching country cities:", error.message);
    res.status(500).json({ message: "Error fetching country cities" });
  }
};

const getCitiesWithAirports = (req, res) => {
  try {
    const citiesWithAirports = countriesWithAirports.flatMap((country) =>
      country.cities.map((city) => ({
        cityName: city.cityName,
        airportCode: city.airportCode,
        airportName: city.airportName,
      }))
    );
    res.status(200).json(citiesWithAirports);
  } catch (error) {
    console.error("Error fetching cities with airports:", error.message);
    res.status(500).json({ message: "Error fetching cities with airports" });
  }
};

module.exports = {
  getCountries,
  getCountryCities,
  getCitiesWithAirports,
};
