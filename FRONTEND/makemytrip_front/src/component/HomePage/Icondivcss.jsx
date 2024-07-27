import styled from "styled-components";

export const Icondivcss = styled.div`
  .icondiv {
    height: 74px;
    width: 74%;
    padding-top: 5px;
    margin: auto;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    box-shadow: 1px 3px 5px #c0c0c0;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    p {
      padding: 0;
      margin: -6px 0 0;
      color: #555454;
      font-size: 13px;
    }

    span {
      color: #a3a3a3;
    }

    span:hover,
    div:hover {
      color: #2db0fc;
    }
  }
`;
