import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Statecontext from "../Context/Statecontext";

const Style = styled.div`
  height: auto;
  background: linear-gradient(
      to bottom,
      rgba(240, 244, 248, 0.8),
      rgba(230, 233, 240, 0.8)
    ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimr82v6dxQ1KJ9J2YYg4VC9stqIa1m0UY_A&usqp=CAU")
      no-repeat center center;
  background-size: cover;
  padding: 20px;

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: auto;
    background: rgba(255, 255, 255, 0.8); /* Optional: for better readability */
    padding: 20px;
    border-radius: 10px;
  }

  .search-box {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }

  .search-box > div {
    flex: 1 1 30%;
    min-width: 150px;
  }

  .search-box select,
  .search-box input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
    color: #333;
    background-color: #ffffff;
  }

  .search-box button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .search-box button:hover {
    background-color: #0056b3;
  }
`;

export const SearchBox = ({ handle }) => {
  const {
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    travellerClass,
    setTravellerClass,
    apiBaseUrl,
  } = useContext(Statecontext);

  const [select, setSelect] = useState({
    from: from,
    to: to,
    TravellerClass: travellerClass,
    trip: "",
    DepartDate: departureDate,
    ReturnDate: returnDate,
  });

  const [cities, setCities] = useState([]);

  const handleSelect = (e) => {
    const { value, name } = e.target;
    setSelect({
      ...select,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `${apiBaseUrl}getallcountry/countries/cities`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    fetchCities();
  }, [apiBaseUrl]);

  const handleButtonClick = () => {
    handle(select);
  };

  return (
    <Style>
      <div className="search-container">
        <div className="search-box">
          <div>
            <p>Trip Type</p>
            <select name="trip" onChange={handleSelect} value={select.trip}>
              <option value="">Select</option>
              <option value="oneway">Oneway</option>
              <option value="twoway">Twoway</option>
            </select>
          </div>
          <div>
            <p>From</p>
            <select name="from" onChange={handleSelect} value={select.from}>
              <option value="">Select</option>
              {cities.map((city) => (
                <option key={city.cityName} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>To</p>
            <select name="to" onChange={handleSelect} value={select.to}>
              <option value="">Select</option>
              {cities.map((city) => (
                <option key={city.cityName} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Depart</p>
            <input
              name="DepartDate"
              type="date"
              value={select.DepartDate}
              onChange={handleSelect}
            />
          </div>
          <div>
            <p>Return</p>
            <input
              name="ReturnDate"
              type="date"
              value={select.ReturnDate}
              onChange={handleSelect}
            />
          </div>
          <div>
            <p>Traveller and Class</p>
            <select
              name="TravellerClass"
              onChange={handleSelect}
              value={select.TravellerClass}
            >
              <option value="">Select</option>
              <option value="Economy">Economy</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <button onClick={handleButtonClick}>SEARCH</button>
        </div>
      </div>
    </Style>
  );
};

export default SearchBox;
