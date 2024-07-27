import styled from "styled-components";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Style = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 30px;
  background-color: #f0f0f0;
  padding: 20px;

  .filters {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    height: fit-content;
    position: relative;
  }

  .allData {
    margin: 0;
    h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .maping {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      padding: 20px;
      margin-bottom: 20px;

      .div1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .one {
          display: flex;
          align-items: center;
          img {
            width: 30px;
          }
          p {
            font-size: 16px;
            font-weight: 700;
            margin-left: 10px;
          }
        }

        .two {
          display: flex;
          flex-direction: column;
          text-align: left;
          line-height: 1.2;

          h5 {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
          }
          p {
            font-size: 14px;
            font-weight: 600;
          }
        }

        .three {
          display: flex;
          flex-direction: column;
          align-items: center;

          p {
            font-size: 14px;
            font-weight: 600;
          }
          span {
            font-size: 12px;
            font-weight: 700;
          }
          div {
            width: 60px;
            height: 4px;
            border-radius: 6px;
            background-color: #e74c3c;
            margin: 5px 0;
          }
        }
      }

      button {
        width: 140px;
        height: 40px;
        border-radius: 25px;
        background: linear-gradient(to right, #8e44ad 0%, #9b59b6 100%);
        border: none;
        color: white;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s ease;
        &:hover {
          background: linear-gradient(to right, #9b59b6 0%, #8e44ad 100%);
        }
      }

      .div2 {
        background-color: #fff2e6;
        text-align: center;
        font-size: 12px;
        padding: 10px;
        border-radius: 8px;
      }

      .div3 {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 600;
        color: #555;
      }
    }
  }

  .firstFilter {
    margin-bottom: 20px;

    h3 {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
    }

    .div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      color: #333;

      p {
        margin: 0;
        line-height: 1.5;
      }
    }
  }
`;

export const Bottom = ({
  data,
  bookData,
  sorting,
  sorthigh,
  handleRefund,
  handleAirlines,
}) => {
  console.log("Data received:", data); // Log the data to the console

  const [value, setValue] = useState("");
  const [refundable, setRefundable] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleSlider = (e) => {
    setValue(e.target.value);
  };

  const handleSort = (e) => {
    sorting(e.target.checked);
  };

  const handleHigh = (e) => {
    sorthigh(e.target.checked);
  };

  const handleChangeCheckBox = (e) => {
    const { value, checked } = e.target;
    setCheckedItems((prevItems) =>
      checked
        ? [...prevItems, value]
        : prevItems.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    handleAirlines(checkedItems);
  }, [checkedItems]);

  const handleChangeRefundable = (e) => {
    setRefundable(!refundable);
    handleRefund(!refundable);
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <Style>
      <div className="filters">
        <div className="firstFilter">
          <h3>Sort by Price</h3>
          <div className="div">
            <input
              onChange={handleSort}
              type="radio"
              name="sort"
              id="low-to-high"
            />
            <label htmlFor="low-to-high">Low to High</label>
          </div>
          <div className="div">
            <input
              onChange={handleHigh}
              type="radio"
              name="sort"
              id="high-to-low"
            />
            <label htmlFor="high-to-low">High to Low</label>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Popular Filters</h3>
          <div className="div">
            <input
              type="checkbox"
              onChange={handleChangeRefundable}
              id="refundable"
            />
            <label htmlFor="refundable">Refundable Fares</label>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Alliances & Airlines</h3>
          <div className="div">
            <input
              type="checkbox"
              value="Japan Airlines"
              onChange={handleChangeCheckBox}
              id="japan-airlines"
            />
            <label htmlFor="japan-airlines">Japan Airlines</label>
          </div>
          <div className="div">
            <input
              type="checkbox"
              value="IndiGo"
              onChange={handleChangeCheckBox}
              id="indigo"
            />
            <label htmlFor="indigo">IndiGo</label>
          </div>
          <div className="div">
            <input
              type="checkbox"
              value="American Airlines"
              onChange={handleChangeCheckBox}
              id="american-airlines"
            />
            <label htmlFor="american-airlines">American Airlines</label>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Select Price Range ₹{value}</h3>
          <input type="range" min="1000" max="10000" onChange={handleSlider} />
        </div>
      </div>
      <div className="allData">
        {data.length !== 0 ? (
          data.map((e, index) => (
            <h1 key={index}>
              Flight from {e.departure} to {e.arrival}
            </h1>
          ))
        ) : (
          <h1>
            Please select proper date or no flight must be available on this day
          </h1>
        )}

        {data.map((e) => (
          <div key={nanoid(6)} className="maping">
            <div className="div1">
              <div className="one">
                <img
                  src={
                    e.airlines === "IndiGo"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                      : e.airline === "Air India"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=7"
                      : e.airline === "AirAsia"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                      : e.airline === "Vistara"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                      : e.airline === "SpiceJet"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                      : e.airline === "GoAir"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                      : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                  }
                  alt={e.airline}
                />
                <p>{e.airline}</p>
              </div>
              <div className="three">
                <p>Departure Time</p>
                <h5>{formatTime(e.departureTime)}</h5>
              </div>
              <div className="three">
                <p>Arrival Time</p>
                <h5>{formatTime(e.arrivalTime)}</h5>
              </div>
              <h7>Economy ₹{e.oneWayPriceEconomy}</h7>
              <h7>Premium ₹{e.oneWayPricePremium}</h7>
              <Link to={`/FlightBooking/${e._id}`}>
                <button onClick={() => bookData(e)}>Book</button>
              </Link>
            </div>
            <div className="div2">
              Travel to India is open for all Indian passport holders, OCI & PIO
              cardholders holding passports of any country and all foreign
              nationals who wish to visit India for any purpose (including their
              dependents on appropriate category of dependent visa) except those
              on Tourist Visa. Please read the 'Important Information' section
              on the next screen before booking your flight.
            </div>
            <div className="div3">
              <p>Easily Refundable</p>
              <p>View Flight Details</p>
            </div>
          </div>
        ))}
      </div>
    </Style>
  );
};
