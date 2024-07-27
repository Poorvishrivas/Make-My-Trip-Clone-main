import styled from "styled-components";

const Style = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 1px 3px rgba(202, 202, 202, 0.5); /* Updated shadow for better visibility */
  color: #4a4a4a;
  font-size: 14px;
  width: 80%; /* Increased width for better fit */
  max-width: 1200px; /* Added max-width for responsiveness */
  margin: 20px auto; /* Added margin for spacing */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  position: relative;
  top: -80px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #4a4a4a;
    text-align: center;
    height: 100%;
    font-size: 14px;
    border-left: 1px solid #cacaca;
    padding: 0 20px; /* Added padding for better spacing */

    &:first-child {
      border-left: none; /* Remove border for the first child */
    }

    img {
      width: 40px; /* Consistent image width */
      margin: 0 10px; /* Adjusted margin */
    }

    p {
      color: #4a4a4a;
      font-size: 14px;
      line-height: 14px;
      text-align: left;
      margin: 0;
    }
  }
`;

export const SmallBottom = () => {
  return (
    <Style>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ti2.png"
          alt="Trip ideas"
        />
        <p>Trip ideas</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_tm1.png"
          alt="Trip Money"
        />
        <p>Trip Money</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"
          alt="Explore International Flights"
        />
        <p>Explore International Flights</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ng1.png"
          alt="Nearby Getaways"
        />
        <p>Nearby Getaways</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_gc1.png"
          alt="Gift Cards"
        />
        <p>Gift Cards</p>
      </div>
    </Style>
  );
};
