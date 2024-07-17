import styled from "styled-components";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router-dom";
const Style = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 30px;
  background-color: #e4e4e4;
  .filters {
    background-color: white;
    margin-left: 100px;
    height: 700px;
    box-shadow: 0px 0px 4px #c9c8c8;
    position: relative;
    top: -140px;
  }
  .allData {
    margin-right: 100px;
    position: relative;
    top: -100px;
    h1 {
      color: white;
      position: relative;
      top: -60px;
      font-size: 26px;
    }
    .maping {
      background-color: white;
      position: relative;
      padding: 1%;
      top: -60px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 4px #c9c8c8;
      //start
      .div1 {
        display: flex;
        justify-content: space-around;
        height: 40px;
        padding: 5px;
        .one {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
          gap: 6px;
          p {
            font-size: 14px;
            font-weight: 700;
          }
        }
        a{
          text-decoration: none;
          color: white;
        }
        .two {
          display: flex;
          text-align: center;
          flex-direction: column;
          line-height: 10px;
          /* align-items: center; */
          h5 {
            padding-top: 12px;
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            text-align: left;
          }
          p {
            font-size: 12px;
            font-weight: 600;
          }
        }
        .three {
          line-height: 0px;
          align-items: center;
          text-align: center;
          display: flex;
          flex-direction: column;
          p {
            font-size: 12px;
            font-weight: 600;
          }
          span {
            font-size: 11px;
            font-weight: 700;
          }
          div {
            width: 50px;
            height: 3px;
            position: relative;
            top: -5px;
            border-radius: 6px;
            background-color: red;
            margin: auto;
          }
        }
        h4 {
          align-items: center;
          font-size: 22px;
          position: relative;
          top: -20px;
        }
          
        button {
          width: 130px;
          height: 38px;
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
          font-weight: 600;
          font-size: 15px;
        }
      }
      .div2 {
        /* height: 60px; */
        background-color: #fff2dc;
        margin-top: 20px;
        text-align: center;
        font-size: 11px;
        padding: 1%;
      }
    }
    .div3 {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
      p:nth-child(1) {
        font-size: 13px;
        font-weight: 600;
        color: green;
      }
      p:nth-child(2) {
        font-size: 13px;
        font-weight: 400;
        color: blue;
      }
    }
  }
  .firstFilter {
    padding: 12px 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
      color: #000000;
      font-size: 17px;
      line-height: 0px;
      text-align: left;
    }
    .div {
      padding: 0;
      align-items: center;
      color: #000000;
      display: flex;
      font-size: 14px;
      p {
        color: #000000;
        font-size: 14px;
        padding: 0;
        margin: 0;
        line-height: 21px;
        font-weight: 500;
        margin-left: 10px;
        align-items: center;
      }
    }
  }
`;
export const BottomHotels = ({ data, bookData,sorting ,sorthigh,handleWifi,handleHousekeeping,HandleBreakfast,handleAcHeating}) => {
  const [value, setValue] = useState("");
  const handleSlider = (e) => {
    setValue(e.target.value);
  };
  const handleSort = (e)=>{
    console.log("handle sort 1st",e)
      sorting(e.target.checked)
  }
  const handleHigh = (e)=>{
    console.log("handle sort 1st high",e)
    sorthigh(e.target.checked)
  }
  const handleHouse = (e)=>{
    console.log("handle handleHouse",e)
    handleHousekeeping(e.target.checked)
  }
  let x = localStorage.getItem("myKey");
  let y = JSON.parse(x);
  return (
    <Style>
      <div className="filters">
        <div className="firstFilter">
          <h3>Sort by price</h3>
          <div className="div">
            <input onChange={handleSort} type="radio" name="sort"/>
            <p>Low to High</p>
          </div>
          <div className="div">
            <input onChange={handleHigh} type="radio" name="sort"/>
            <p>High to Low</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Amenities</h3>
          <div className="div">
            <input type="checkbox" onChange={handleWifi}/>
            <p>Free Wi-Fi</p>
          </div>
          <div className="div">
            <input type="checkbox" onChange={HandleBreakfast}/>
            <p>Complimentary Breakfast</p>
          </div>
          <div className="div">
            <input type="checkbox" onChange={handleHousekeeping}/>
            <p>Housekeeping</p>
          </div>
          <div className="div">
            <input type="checkbox" onChange={handleAcHeating} />
            <p>Air Conditioning/Heating</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Select Range ₹{value}</h3>
          <input type="range" min="1000" max="10000" onChange={handleSlider} />
        </div>
      </div>
      <div className="allData">
        <h1>
        Experience unparalleled luxury and comfort.
        </h1>
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
