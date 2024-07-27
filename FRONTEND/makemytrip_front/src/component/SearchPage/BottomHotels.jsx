import styled from "styled-components";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Style = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;

  .filters {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 15px;
    height: auto;
  }

  .filters h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
  }

  .filters .div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .filters .div input[type="checkbox"] {
    margin-right: 10px;
  }

  .filters .div input[type="radio"] {
    margin-right: 10px;
  }

  .filters .div p {
    margin: 0;
    color: #555;
  }

  .filters input[type="range"] {
    width: 100%;
    margin-top: 10px;
  }

  .filters .range-label {
    font-size: 16px;
    margin-top: 10px;
  }

  .allData {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    overflow-y: auto;
    height: 700px;
  }

  .allData h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .maping {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin-bottom: 15px;
  }

  .maping .div1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .maping .div1 .one h6 {
    margin: 0;
    color: #333;
    font-size: 16px;
    font-weight: 600;
  }

  .maping .div1 .two h6 {
    margin: 0;
    color: #555;
    font-size: 14px;
  }

  .maping .div1 .three {
    text-align: right;
    color: #777;
  }

  .maping .div1 .three h6 {
    margin: 0;
    font-size: 14px;
  }

  .maping .div1 .three span {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }

  .maping .div2 {
    background-color: #e7f1ff;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    color: #555;
  }

  .maping .div3 {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #777;
  }

  .maping .div3 p {
    margin: 0;
  }

  .maping h4 {
    margin-top: 15px;
    text-align: center;
  }

  .maping h4 button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(
      to right,
      #8f92fa 0%,
      #6165f0 50%,
      #6c70eb 50%,
      #3339e9 100%
    );
    color: white;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .maping h4 button:hover {
    background: linear-gradient(
      to right,
      #6c70eb 0%,
      #3339e9 50%,
      #6165f0 50%,
      #8f92fa 100%
    );
  }
`;

export const BottomHotels = ({
  data,
  bookData,
  sorting,
  sorthigh,
  handleWifi,
  handleHousekeeping,
  HandleBreakfast,
  handleAcHeating,
}) => {
  const [value, setValue] = useState("");
  const handleSlider = (e) => {
    setValue(e.target.value);
  };

  const handleSort = (e) => {
    sorting(e.target.checked);
  };

  const handleHigh = (e) => {
    sorthigh(e.target.checked);
  };

  const handleHouse = (e) => {
    handleHousekeeping(e.target.checked);
  };

  let x = localStorage.getItem("myKey");
  let y = JSON.parse(x);

  return (
    <Style>
      <div className="filters">
        <div className="firstFilter">
          <h3>Sort by price</h3>
          <div className="div">
            <input onChange={handleSort} type="radio" name="sort" />
            <p>Low to High</p>
          </div>
          <div className="div">
            <input onChange={handleHigh} type="radio" name="sort" />
            <p>High to Low</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Amenities</h3>
          <div className="div">
            <input type="checkbox" onChange={handleWifi} />
            <p>Free Wi-Fi</p>
          </div>
          <div className="div">
            <input type="checkbox" onChange={HandleBreakfast} />
            <p>Complimentary Breakfast</p>
          </div>
          <div className="div">
            <input type="checkbox" onChange={handleHousekeeping} />
            <p>Housekeeping</p>
          </div>
          <div className="div">
            <input type="checkbox" onChange={handleAcHeating} />
            <p>Air Conditioning/Heating</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Select Range</h3>
          <p className="range-label">₹{value}</p>
          <input type="range" min="1000" max="10000" onChange={handleSlider} />
        </div>
      </div>
      <div className="allData">
        <h1>Experience unparalleled luxury and comfort.</h1>
        {data.map((hotel) => (
          <div key={nanoid(6)} className="maping">
            <div className="div1">
              <div className="one">
                <h6>{hotel.name}</h6>
              </div>
              <div className="two">
                <h6>{hotel.location}</h6>
              </div>
              <div className="three">
                <h6>Rooms: {hotel.roomsAvailable}</h6>
                <span>₹{hotel.pricePerNight}/night</span>
              </div>
              <div className="two">
                <h6>{hotel.address}</h6>
              </div>
              <h4>
                <Link to={`/HotelBooking/${hotel._id}`}>
                  <button onClick={() => bookData(hotel)}>Book</button>
                </Link>
              </h4>
            </div>
            <div className="div2">
              <h6>
                {hotel.freeWiFi && "Free Wi-Fi"}
                {hotel.complimentaryBreakfast && ", Complimentary Breakfast"}
                {hotel.housekeeping && ", Housekeeping"}
                {hotel.airConditioningHeating && ", Air Conditioning/Heating"}
              </h6>
            </div>
            <div className="div3">
              <p>Easily Refundable</p>
              <p>View Hotel Details</p>
            </div>
          </div>
        ))}
      </div>
    </Style>
  );
};
