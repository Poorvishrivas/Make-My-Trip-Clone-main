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
      .first {
        width: 120px;
        padding: 0;
        margin: 0;
        line-height: 0px;
        text-align: center;
        background: rgba(104, 105, 104, 0.3);
        border-radius: 5px;
        p {
          font-size: 14px;
          font-weight: 600;
          color: #2c98f1;
        }
        select {
          border: 0px;
          //-webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          color: white;
          font-size: 17px;
          text-overflow: "";
          outline: 0px;
          width: 100%;
          text-align: center;
          background-color: transparent;
          padding: 3px;
        }
        option {
          background-color: #7e7e7e;
        }
      }
      .second {
        width: 170px;
        //line-height: 0;
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
          //-webkit-appearance: none;
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
  .fromtodiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 87%;
    p {
      font-size: 14px;
      font-weight: 600;
      margin-left: 10px;
      color: #2c98f1;
    }
  }
  .date {
    border: none;
    font-size: 16px;
    margin-left: 10px;
    color: white;
    background-color: transparent;
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

  const [text, setText] = useState([]);

  const handleSelect = (e) => {
    const { value, name } = e.target;
    console.log(value, "Value");
    setSelect({
      ...select,
      [name]: value,
    });
  };

  useEffect(() => {
    let promise = async () => {
      const data = await fetch(`${apiBaseUrl}getallcountry/countries/cities`);
      console.log(data, "Countrys data");

      const ans = await data.json();
      setText(ans);
      console.log(ans, "ans data");
    };
    promise();
  }, [apiBaseUrl]);

  const handleButton = () => {
    console.log("get Value Over here", select);
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
  console.log(select, "select");

  return (
    <Style>
      <div className={nav === true ? "hello jelo" : "jelo"}>
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
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
                padding: "3px",
              }}
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
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
                padding: "3px",
              }}
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
