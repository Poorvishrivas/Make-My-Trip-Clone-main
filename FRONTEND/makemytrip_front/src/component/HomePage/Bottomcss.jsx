import styled from "styled-components";

export const Bottomcss = styled.div`
  background: #f8f8f8;
  padding: 20px;
  font-family: Arial, sans-serif;

  .section {
    margin-bottom: 20px;
  }

  .div1,
  .div2,
  .div3,
  .div4 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .div1 > div,
  .div3 > div {
    flex: 1;
    margin: 10px;
    min-width: 200px;
  }

  .div2 {
    flex-direction: column;
    h3 {
      margin-top: 10px;
    }
    p {
      margin-top: 10px;
      line-height: 1.6;
    }
  }

  .div4 {
    text-align: center;
    .fb {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .social-icons {
      display: flex;
      justify-content: space-between;
      width: 100px;
      margin: 0 auto;
    }
    .copy {
      margin-top: 10px;
      p {
        margin: 5px 0;
      }
    }
  }

  h3 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin: 5px 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
