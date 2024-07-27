import styled from "styled-components";

export const Navbar = styled.div`
  height: 500px;
  background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg6.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;

  .laltain {
    position: absolute;
    left: 0;
    top: 0;
  }

  .mmtlogo {
    position: absolute;
    left: 70px;
    top: 10px;
    width: 8%;
  }

  .topdiv {
    padding-top: 20px;
    height: 70px;
    display: flex;
    gap: 10px;
    flex-direction: row-reverse;
  }

  .button-wrapper {
    position: absolute;
    bottom: 20px; /* Adjust as needed */
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .button {
    width: 200px;
    height: 50px;
    background: linear-gradient(
      to right,
      #8fdcfa 0%,
      #619ff0 50%,
      #6c9feb 50%,
      #3339e9 100%
    );
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
