import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useAuth } from "./loginpanel/AuthContext"; // Adjust the import path as necessary
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../SearchPage/Header";

const Style = styled.div`
  form {
    width: 70%;
    padding-top: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    input {
      height: 30px;
      padding: 2%;
      border-radius: 6px;
      border: 1px solid blue;
    }
    label {
      font-size: 16px;
    }
    p {
      line-height: 15px;
      color: red;
    }
    button {
      border: none;
      margin: auto;
      font-size: 13px;
      background: linear-gradient(
        to right,
        #8f92fa 0%,
        #6165f0 50%,
        #6c70eb 50%,
        #3339e9 100%
      );
      font-weight: 600;
      border-radius: 8px;
      color: white;
      width: 150px;
      height: 40px;
    }
  }
`;

export default function UserForm() {
  //const { setAuthToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const isAdminParam = searchParams.get("isAdmin");
    if (isAdminParam) {
      setIsAdmin(isAdminParam === "true");
    }
  }, [location.search]);
  console.log(isAdmin, "From Signup page from Admin");
  useEffect(() => {
    setNewUser((prevUser) => ({
      ...prevUser,
      role: isAdmin ? "admin" : "user",
    }));
  }, [isAdmin]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    axios
      .post("https://make-my-trip-clone-backend.vercel.app/api/auth/Register", newUser)
      .then((res) => {
        alert("Signup Success");
        localStorage.setItem("token", res.data.token);
        // handleClick();
        //navigate('/')
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.msg);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <Style>
        <form onSubmit={handleSubmit} className="userform">
          <label>Enter full name</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label>Enter Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="email"
            required
          />

          <label>Enter password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="password"
            required
          />

          <p>
            Must be At least 8 characters in length and should contain at least
            one alphabet, one number, and one special character @$!%*#?&
          </p>

          <button className="cbtn" type="submit">
            Submit
          </button>
        </form>
      </Style>
    </>
  );
}
