const countries = require('../utile/countries');
const countriesWithAirports = require('../utile/CountryCities');
const getCountries = (req, res) => {
    console.log("here")
  res.json(countries.map(country => country.country));
};
const getCountryCities = (req, res) => {
    const { countryName } = req.params;
    const country = countries.find(country => country.country.toLowerCase() === countryName.toLowerCase());

    if (!country) {
        return res.status(404).json({ message: `Country '${countryName}' not found.` });
    }

    res.json(country.cities);
};
const getCitiesWithAirports = (req, res) => {
  const citiesWithAirports = countriesWithAirports.flatMap(country => 
      country.cities.map(city => ({
          cityName: city.cityName,
          airportCode: city.airportCode,
          airportName: city.airportName
      }))
  );
  res.json(citiesWithAirports);
};

module.exports = {
  getCountries,
  getCountryCities,
  getCitiesWithAirports,
};
