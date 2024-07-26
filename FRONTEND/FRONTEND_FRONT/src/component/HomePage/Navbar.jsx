import styled from "styled-components";
export const Navbar = styled.div`
  height: 500px;

  background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg6.jpg");

  .laltain {
    position: absolute;
    left: 0pf-17x;
    top: 0px;
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
  .button {
    width: 200px;
    margin: auto;

    button {
      width: 200px;
      height: 50px;
      color: white;
      font-weight: 600;
      border: none;
      cursor: pointer;
      position: relative;
      top: -27px;
      font-size: 24px;
      border-radius: 25px;
      background: linear-gradient(
        to right,
        #8fdcfa 0%,
        #619ff0 50%,
        #6c9feb 50%,
        #3339e9 100%
      );
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
