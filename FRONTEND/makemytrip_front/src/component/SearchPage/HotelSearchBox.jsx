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
      /* Ensure this URL is correct */ no-repeat center center;
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

export const HotelSearchBox = ({ handle }) => {
  const [select, setSelect] = useState({});
  const { apiBaseUrl } = useContext(Statecontext);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `${apiBaseUrl}getallcountry/countries/cities`
        );
        if (response.ok) {
          const data = await response.json();
          setCities(data);
        } else {
          console.error("Failed to fetch cities");
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, [apiBaseUrl]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSelect((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    handle(select);
  };

  return (
    <Style>
      <div className="search-container">
        <div className="search-box">
          <div>
            <p>Location</p>
            <select
              name="location"
              value={select.location || ""}
              onChange={handleSelect}
            >
              <option value="">Select</option>
              {cities.map((city) => (
                <option key={city.cityName} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Check-in</p>
            <input
              type="date"
              name="checkin"
              value={select.checkin || ""}
              onChange={handleSelect}
            />
          </div>
          <div>
            <p>Check-out</p>
            <input
              type="date"
              name="checkout"
              value={select.checkout || ""}
              onChange={handleSelect}
            />
          </div>
          <button onClick={handleButtonClick}>SEARCH</button>
        </div>
      </div>
    </Style>
  );
};

export default HotelSearchBox;
