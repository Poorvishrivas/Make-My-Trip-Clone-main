import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Statecontext from "../Context/Statecontext";

const Style = styled.div`
  height: 300px;
  background: linear-gradient(to top, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  .jelo {
    width: 100%;
    background-color: #0f3460;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    .topdiv {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px;
      .first,
      .second {
        background: #1f406d;
        border-radius: 10px;
        padding: 10px;
        color: #f5f5f5;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        flex: 1;
        min-width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        select,
        input {
          width: 100%;
          border: none;
          border-radius: 5px;
          padding: 8px;
          font-size: 16px;
          color: #fff;
          background-color: #16213e;
        }
        input {
          background-color: #1a1a2e;
        }
        option {
          background-color: #1f406d;
        }
      }
      button {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background: linear-gradient(to right, #9d4edd 0%, #6a2c77 100%);
        border: none;
        color: white;
        font-weight: 700;
        font-size: 18px;
        cursor: pointer;
        transition: background 0.3s ease;
        &:hover {
          background: linear-gradient(to right, #7b2cbf 0%, #4a006e 100%);
        }
      }
    }
  }
  .hello {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
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
    DepartDate: "", // Set default value here if needed, e.g., "2024-08-15"
    ReturnDate: returnDate,
  });

  const [text, setText] = useState([]);

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
        setText(data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    fetchCities();
  }, [apiBaseUrl]);

  const handleButton = () => {
    handle(select);
  };

  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(window.scrollY >= 10);
  };
  window.addEventListener("scroll", handleChange);

  return (
    <Style>
      <div className={nav ? "hello jelo" : "jelo"}>
        <div className="topdiv">
          <div className="first">
            <p>Trip Type</p>
            <select
              name="trip"
              id="trip"
              onChange={handleSelect}
              value={select.trip}
            >
              <option value="">Select</option>
              <option value="oneway">Oneway</option>
              <option value="twoway">Twoway</option>
            </select>
          </div>
          <div className="second">
            <p>From</p>
            <select
              onChange={handleSelect}
              name="from"
              id="from"
              value={select.from}
            >
              <option value="">Select</option>
              {text.map((e) => (
                <option value={e.cityName} key={e.cityName}>
                  {e.cityName}
                </option>
              ))}
            </select>
          </div>
          <div className="second">
            <p>To</p>
            <select onChange={handleSelect} name="to" id="to" value={select.to}>
              <option value="">Select</option>
              {text.map((e) => (
                <option value={e.cityName} key={e.cityName}>
                  {e.cityName}
                </option>
              ))}
            </select>
          </div>
          <div className="second">
            <p>Depart</p>
            <input
              name="DepartDate"
              type="date"
              id="DepartDate"
              className="date"
              value={select.DepartDate}
              onChange={handleSelect}
            />
          </div>
          <div className="second">
            <p>Return</p>
            <input
              name="ReturnDate"
              type="date"
              id="returndate"
              className="date"
              onChange={handleSelect}
              value={select.ReturnDate}
            />
          </div>
          <div className="second">
            <p>Traveller and Class</p>
            <select
              onChange={handleSelect}
              name="TravellerClass"
              id="TravellerClass"
              value={select.TravellerClass}
            >
              <option value="">Select</option>
              <option value="Economy">Economy</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <button onClick={handleButton}>SEARCH</button>
        </div>
      </div>
    </Style>
  );
};
