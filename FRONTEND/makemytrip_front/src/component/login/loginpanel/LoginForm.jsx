import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: url("https://source.unsplash.com/random/1600x900") no-repeat
    center center fixed;
  background-size: cover;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease;

  ${({ isAdmin }) =>
    isAdmin &&
    `
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);

    .acc-type > div {
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
    }

    .acc-type > div.active-login {
      background: #007bff;
      color: #fff;
    }

    input {
      background: #fff;
      color: #000;
    }

    .cbtn {
      background: #007bff;
      color: #fff;
    }

    .cbtn:hover {
      background: #0056b3;
    }
  `}
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;

  ${({ isAdmin }) =>
    isAdmin &&
    `
    color: #fff;
  `}
`;

const AccountTypeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  div {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    border-radius: 25px;
    font-weight: bold;
    transition: background 0.3s, color 0.3s;
    background: ${({ isAdmin, selected }) =>
      selected ? (isAdmin ? "#007bff" : "#ddd") : isAdmin ? "#333" : "#f0f0f0"};
    color: ${({ isAdmin, selected }) =>
      selected ? "#fff" : isAdmin ? "#ccc" : "#007bff"};

    &:hover {
      background: ${({ isAdmin, selected }) =>
        selected
          ? isAdmin
            ? "#0056b3"
            : "#bbb"
          : isAdmin
          ? "#444"
          : "#e0e0e0"};
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-weight: 500;

    ${({ isAdmin }) =>
      isAdmin &&
      `
      color: #ccc;
    `}
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;

    ${({ isAdmin }) =>
      isAdmin &&
      `
      background: #333;
      color: #fff;
    `}
  }
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 15px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }

  ${({ isAdmin }) =>
    isAdmin &&
    `
    background: #0056b3;
    &:hover {
      background: #003d79;
    }
  `}
`;

export const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({ email: "", password: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = window.location.pathname;

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://make-my-trip-clone-backend.vercel.app/api/auth/Login", {
        email: value.email,
        password: value.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        getAdminRole();
        const popup = document.getElementById("popup");
        popup.classList.remove("active");
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const getAdminRole = () => {
    const userRole = localStorage.getItem("role");
    if (userRole === "admin") {
      if (!pathname.includes("Booking")) {
        navigate("/Admin/FlightList");
      } else {
        navigate(pathname);
      }
    } else {
      navigate(pathname);
    }
  };

  const handleSignupClick = (isAdmin) => {
    const urlParams = new URLSearchParams({ isAdmin: isAdmin.toString() });
    navigate(`/signup?${urlParams.toString()}`);
  };

  return (
    <Container>
      <FormWrapper>
        <LoginBox isAdmin={isAdmin}>
          <Title isAdmin={isAdmin}>Login/Signup</Title>
          <AccountTypeSelector isAdmin={isAdmin}>
            <div
              className={!isAdmin ? "active-login" : ""}
              onClick={() => setIsAdmin(false)}
            >
              Personal Account
            </div>
            <div
              className={isAdmin ? "active-login" : ""}
              onClick={() => setIsAdmin(true)}
            >
              Admin Account
            </div>
          </AccountTypeSelector>
          <form onSubmit={handleSubmit}>
            <FormGroup isAdmin={isAdmin}>
              <label>Email</label>
              <input
                type="email"
                onChange={handleChange("email")}
                placeholder="user@gmail.com"
                value={value.email}
                required
              />
            </FormGroup>
            <FormGroup isAdmin={isAdmin}>
              <label>Password</label>
              <input
                type="password"
                onChange={handleChange("password")}
                placeholder="*"
                maxLength={10}
                value={value.password}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              className="cbtn"
              value="CONTINUE"
              isAdmin={isAdmin}
            />
          </form>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-primary"
              onClick={() => handleSignupClick(isAdmin)}
            >
              Or Signup
            </Button>
          </div>
          <p className="tc">
            By proceeding, you agree to MakeMyTrip's{" "}
            <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and{" "}
            <a href="#">T&Cs</a>
          </p>
        </LoginBox>
      </FormWrapper>
    </Container>
  );
};

export const getToken = () => {
  return localStorage.getItem("token");
};
