import styled from "styled-components";
export const Fromtocss = styled.div`
  height: 85px;
  width: 95%;
  margin: auto;
  border: 0.06em solid #d4d0d0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .fromtodiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 87%;
  }
  h3 {
    position: relative;
    top: -15px;
    left: 1px;
    font-size: 13px;
    font-weight: 500;
  }
  .fromtodiv div {
    padding: 20px;
    border-right: 0.01em solid #d4d0d0;
    height: 82%;
  }
  .fromtodiv select {
    padding: 4%;
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    border: none;
    position: relative;
    top: -25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }
  .fromtodiv2 {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80%;
  }
  .date {
    border: none;
    font-size: 16px;
    margin-left: 10px;
  }
  .fromtodiv2 div {
    border-right: 0.01em solid #d4d0d0;
    height: 8%;
  }
  .fromtodiv2 select {
    padding: 4%;
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    border: none;
    position: relative;
    top: -19px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }
`;
