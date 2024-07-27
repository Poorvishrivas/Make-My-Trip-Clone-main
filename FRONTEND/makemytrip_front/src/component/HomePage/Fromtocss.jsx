import styled from "styled-components";

export const Fromtocss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .fromtodiv {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div {
      flex: 1;

      h3 {
        margin-bottom: 10px;
        font-size: 16px;
        color: #333;
      }

      select {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
  }

  .fromtodiv2 {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div {
      flex: 1;

      h3 {
        margin-bottom: 10px;
        font-size: 16px;
        color: #333;
      }

      input[type="date"] {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      select {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
  }

  .abc {
    color: #666;
  }
`;
