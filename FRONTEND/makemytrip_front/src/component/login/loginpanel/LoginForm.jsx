import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Style = styled.div`
  .loginForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => (props.isAdmin ? "lightGrey" : "#ffffff")};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
  }

  .acc-type {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 7px;
    border-radius: 51px;
    background-color: ${(props) => (props.isAdmin ? "lightGrey" : "#ffffff")};
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
  }

  .acc-type > div {
    width: 50%;
  }

  .active-login {
    color: white;
    background: blue;
    padding: 5px 25px;
    border-radius: 51px;
  }

  .google-signup {
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    border: 0.2px solid grey;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }

  .g-logo {
    width: 10%;
  }

  .g-logo > img {
    width: 100%;
    border-radius: 50%;
  }

  .other-option {
    font-size: 14px;
    color: grey;
  }

  .other-option,
  .tc {
    text-align: center;
    text-decoration: none;
  }

  .tc > a {
    text-decoration: none;
  }

  .cbtn {
    width: 100%;
    margin: auto;
    padding: 2%;
    background: blue;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    cursor: pointer;
  }

  .indicate {
    color: red;
    font-size: 12px;
    margin: 0;
  }

  .hide {
    display: none;
  }

  .inp-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
  }

  .inp {
    width: 96%;
    padding: 2%;
    border: 0.5px solid blue;
    border-radius: 5px;
  }

  .inp > input {
    border: 0;
    outline: 0;
    font-size: 16px;
    width: 100%;
  }
`;

export const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({ email: "", password: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = window.location.pathname;
  console.log(pathname)

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/Login", {
        email: value.email,
        password: value.password,
      })
      .then((res) => {
     //   alert("Login Success");
        localStorage.setItem("token", res.data.token);
        // window.location.reload();
        console.log(pathname)
        console.log(res, "Response");
        getAdminRole();
        const popup = document.getElementById("popup");
    popup.classList.remove("active");
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };
  console.log(localStorage.getItem("role"), "userRole");
  const getAdminRole = () => {
    const userRole = localStorage.getItem("role");
    if (userRole == "admin") {
      if(!pathname.includes('Booking')){
        navigate('/Admin/FlightList');
      }else{
        navigate(pathname)
      }
    }else{
      navigate(pathname);
    }
  };
  const handleSignupClick = (isAdmin) => {
    console.log(isAdmin);
    const urlParams = new URLSearchParams({ isAdmin: isAdmin.toString() });
    navigate(`/signup?${urlParams.toString()}`);
  };
  return (
    <div className="">
      <Style isAdmin={isAdmin}>
        <div className="">
          <div className="acc-type">
            <div
              className={isAdmin ? "" : "active-login"}
              onClick={() => setIsAdmin(false)}
            >
              PERSONAL ACCOUNT
            </div>
            <div
              className={isAdmin ? "active-login" : ""}
              onClick={() => setIsAdmin(true)}
            >
              ADMIN ACCOUNT
            </div>
          </div>
          <h5>Login/signup</h5>
          <form onSubmit={handleSubmit}>
            <div className="inp-wrap">
              <label>Email</label>
              <div className="inp">
                <input
                  type="email"
                  onChange={handleChange("email")}
                  placeholder="user@gmail.com"
                  value={value.email}
                  required
                />
              </div>
            </div>

            <div className="inp-wrap">
              <label>Password</label>
              <div className="inp">
                <input
                  type="password"
                  onChange={handleChange("password")}
                  placeholder="*"
                  maxLength={10}
                  value={value.password}
                  required
                />
              </div>
            </div>

            <div>
              <input type="submit" className="cbtn" value="CONTINUE" />
            </div>
          </form>
          {/* <div align="center">
          <a href="/SignUp">Or Signup</a>
        </div> */}
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-primary"
              onClick={() => handleSignupClick(isAdmin)}
            >
              Or Signup
            </Button>
          </div>
          {/* New button */}
          <p className="tc">
            By proceeding, you agree to MakeMyTrip's{" "}
            <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and{" "}
            <a href="#">T&Cs</a>
          </p>
        </div>
      </Style>
    </div>
  );
};

export const getToken = () => {
  return localStorage.getItem("token");
};
