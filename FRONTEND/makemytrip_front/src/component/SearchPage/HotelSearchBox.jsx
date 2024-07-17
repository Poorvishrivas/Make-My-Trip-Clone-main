import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Statecontext from "../Context/Statecontext";

const Style = styled.div`
  height: 250px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  .jelo {
    width: 100%;
    background-color: #03032c;
    .topdiv {
      width: 90%;
      height: 100px;
      padding-bottom: 10px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      padding-top: 8px;
      align-items: center;
      .second {
        width: 170px;
        background: rgba(104, 105, 104, 0.3);
        border-radius: 5px;
        p {
          font-size: 14px;
          font-weight: 600;
          margin-left: 10px;
          color: #2c98f1;
        }
        select {
          border: 0px;
          -moz-appearance: none;
          text-indent: 8px;
          color: white;
          font-size: 17px;
          text-overflow: "";
          outline: 0px;
          width: 100%;
          background-color: #21233e;
          padding: 3px;
        }
        option {
          background-color: #494949;
        }
      }
      button {
        width: 170px;
        height: 45px;
        border-radius: 25px;
        background: linear-gradient(
          to right,
          #8f92fa 0%,
          #6165f0 50%,
          #6c70eb 50%,
          #3339e9 100%
        );
        border: none;
        color: white;
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
  .hello {
    position: fixed;
    z-index: 100;
    top: 0;
  }
  .date {
    border: none;
    font-size: 16px;
    margin-left: 10px;
    color: white;
    background-color: transparent;
  }
`;

export const HotelSearchBox = ({ handle }) => {
  const [select, setSelect] = useState([]);
  const { apiBaseUrl } = useContext(Statecontext);
  const [text, setText] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiBaseUrl}getallcountry/countries/cities`
        );
        if (response.ok) {
          const data = await response.json();
          setText(data);
        } else {
          console.error("Failed to fetch cities");
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchData();
  }, [apiBaseUrl]);

  const handleSelect = (e) => {
    const { value, name } = e.target;
    setSelect({
      ...select,
      [name]: value,
    });
  };

  const handleButton = () => {
    console.log("Get Value Over here", select);
    handle(select);
  };

  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);

  return (
    <Style>
      <div className={nav ? "hello jelo" : "jelo"}>
        <div className="topdiv">
          <div className="second">
            <p>Location</p>

            <select
              onChange={handleSelect}
              name="location"
              id="location"
              value={select.location}
            >
              <option value="">Select</option>
              {text.map((e) => (
                <option
                  key={e.cityName}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: "17px",
                    padding: "3px",
                  }}
                  value={e.cityName}
                >
                  {e.cityName}
                </option>
              ))}
            </select>
          </div>
          <div className="second">
            <p>Check-in</p>
            <input
              type="date"
              id="checkin"
              className="date"
              name="checkin"
              value={select.checkIn}
              onChange={handleSelect}
            />
          </div>
          <div className="second">
            <p>Check-out</p>
            <input
              type="date"
              id="checkout"
              className="date"
              name="checkout"
              value={select.checkout}
              onChange={handleSelect}
            />
          </div>
          <button onClick={handleButton}>SEARCH</button>
        </div>
      </div>
    </Style>
  );
};

export default HotelSearchBox;
