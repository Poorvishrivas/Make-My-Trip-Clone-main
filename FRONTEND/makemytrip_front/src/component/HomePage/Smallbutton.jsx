import styled from "styled-components";

export const Smallbutton = styled.div`
  border: 1px dashed darkblue; /* Simplified border style */
  width: 180px;
  height: 50px;
  display: grid;
  grid-template-columns: 20% auto;
  align-items: center; /* Center items vertically */
  color: grey;
  grid-gap: 10px;
  position: relative;
  right: 80px;
  top: -5px;

  h4 {
    font-size: 12px;
    padding-left: 3px;
  }

  .white-text {
    color: white;
  }

  p {
    font-size: 9px;
    padding-left: 3px;
  }

  img {
    width: 90%;
    height: auto; /* Maintain aspect ratio */
    padding-left: 3px;
  }
`;
