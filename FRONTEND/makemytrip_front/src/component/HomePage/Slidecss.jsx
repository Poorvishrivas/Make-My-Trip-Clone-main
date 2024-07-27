import styled from "styled-components";

// Updated Smallslide styles
export const Slidecss = styled.div`
  height: 120px; /* Increased height for better visibility */
  width: 100%; /* Full width for better responsiveness */
  max-width: 400px; /* Max width to limit size on large screens */
  background-color: #ffffff;
  margin: 10px auto; /* Added margin for spacing */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Softer shadow */
  display: flex;
  flex-direction: row;
  gap: 15px; /* Adjusted gap */
  padding: 8px; /* Increased padding */
  box-sizing: border-box; /* Include padding in width/height calculation */

  img {
    max-width: 80px; /* Fixed width for better alignment */
    border-radius: 8px;
    object-fit: cover; /* Ensures image covers the box */
  }
`;

// Updated Bigslide styles
export const Bigslide = styled.div`
  height: auto; /* Adjust height to auto for better content fitting */
  max-width: 90%; /* Limit width for better responsiveness */
  background-color: #ffffff;
  border-radius: 8px;
  margin: 20px auto; /* Adjusted margin */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Softer shadow */
  padding: 20px; /* Increased padding */
  box-sizing: border-box; /* Include padding in width/height calculation */

  .supreoffers {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between; /* Adjusted for better alignment */
    gap: 20px; /* Adjusted gap */
    background-color: #ffffff;
    margin-bottom: 20px;

    h1 {
      font-size: 32px; /* Adjusted font size */
      color: #333333; /* Darker color for better contrast */
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 20px; /* Adjusted gap */
      align-items: center; /* Center aligned */
      color: #333333;
    }
  }

  .parentbigslide {
    margin-bottom: 20px; /* Added margin for spacing */
  }

  .bigslideDiv {
    display: flex; /* Changed to flex for better layout */
    cursor: pointer;
    width: 100%; /* Full width for responsiveness */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Softer shadow */
    border-radius: 8px;
    height: auto; /* Adjust height to auto for better content fitting */
    gap: 15px; /* Adjusted gap */
    padding: 10px; /* Increased padding */
    box-sizing: border-box; /* Include padding in width/height calculation */
    background-color: #f9f9f9; /* Light background for better readability */

    div {
      padding: 0;
      margin: 0;
    }

    h3 {
      color: #666666; /* Adjusted color */
      font-size: 16px; /* Adjusted font size */
      margin: 0 0 5px 0; /* Adjusted margin */
    }

    h2 {
      font-size: 20px; /* Adjusted font size */
      padding: 5px 0; /* Adjusted padding */
    }

    img {
      border-radius: 8px;
    }

    p {
      font-size: 14px; /* Adjusted font size */
      color: #666666; /* Adjusted color */
    }

    span {
      color: #999999; /* Adjusted color */
      font-size: 12px; /* Adjusted font size */
    }

    h4 {
      font-size: 20px; /* Adjusted font size */
      color: #1a73e8; /* Adjusted color */
      text-align: right;
    }

    .reddiv {
      width: 60px; /* Adjusted width */
      background-color: #e53935; /* Adjusted color */
      height: 3px; /* Adjusted height */
      margin-top: 10px; /* Adjusted margin */
    }
  }
`;

// Updated TripMoney styles
export const TripMoney = styled.div`
  width: 90%; /* Full width for responsiveness */
  max-width: 1200px; /* Max width to limit size */
  margin: 30px auto; /* Adjusted margin */
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px; /* Increased padding */
  box-sizing: border-box; /* Include padding in width/height calculation */

  .maindiv {
    height: auto; /* Adjust height to auto for better content fitting */
    display: flex;
    flex-direction: column;
    gap: 20px; /* Adjusted gap */
    color: #333333;
    font-size: 16px; /* Adjusted font size */

    #div2 {
      align-items: center;
      background-color: #f4f4f4; /* Light background for better readability */
      border-radius: 8px; /* Adjusted border radius */
      border: 2px solid #dddddd; /* Light border */
      display: flex;
      padding: 15px; /* Increased padding */
      box-sizing: border-box; /* Include padding in width/height calculation */

      img {
        width: 70px; /* Adjusted width */
        height: 70px; /* Adjusted height */
        margin-right: 15px; /* Adjusted margin */
      }

      p {
        color: #333333; /* Darker color for better contrast */
        font-size: 16px; /* Adjusted font size */
        line-height: 24px; /* Increased line height */
      }

      h3 {
        font-size: 22px; /* Adjusted font size */
        font-weight: 700; /* Adjusted font weight */
        margin: 0 0 5px 0; /* Adjusted margin */
      }
    }

    .spa1n,
    .span2 {
      background-size: 200px 600px; /* Adjusted background size */
      color: #333333; /* Adjusted color */
      display: inline-block;
      font-size: 16px; /* Adjusted font size */
      line-height: 20px; /* Adjusted line height */
    }

    .spa1n {
      background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@13x.webp");
      background-position: -106px -559px;
      width: 100px; /* Adjusted width */
      height: 30px; /* Adjusted height */
    }

    .span2 {
      background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@13x.webp");
      background-position: -174px -86px;
      width: 50px; /* Adjusted width */
      height: 20px; /* Adjusted height */
      color: #0077ff; /* Adjusted color */
      font-weight: 700; /* Adjusted font weight */
      text-transform: uppercase;
    }
  }
`;
