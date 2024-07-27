import React from "react";
import Style from "./FareTypescss";

export const FareTypes = () => {
  return (
    <Style>
      <div className="div">
        <div className="first">Select a fare type:</div>
        <div className="selectBox">
          <input type="radio" name="FareTypeRadio" value="1" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" name="FareTypeRadio" value="2" />
          <p>Armed Forces</p>
        </div>
        <div className="selectBox">
          <input type="radio" name="FareTypeRadio" value="3" />
          <p>Student fares</p>
        </div>
        <div className="selectBox">
          <input type="radio" name="FareTypeRadio" value="4" />
          <p>Senior Citizen</p>
        </div>
      </div>
      <div className="div2">
        <div className="second">Trending Searches:</div>
        <div className="selectBox1">
          <p>Delhi to Mumbai</p>
        </div>
        <div className="selectBox1">
          <p>Bangalore to Kolkata</p>
        </div>
      </div>
    </Style>
  );
};
