import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";
import Auth from "../../../auth";

const Style = styled.div`
  .loginMain {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
  }
  .login-wrap {
    top: 50%;
    left: 50%;
    bottom: 0;
    right: 0;
    width: 480px;
    height: auto;
    min-height: 500px;
    padding: 30px;
    min-width: 450px;
    border-radius: 10px;
    position: fixed;
    z-index: 2;
    background-color: #fff;
    color: black;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 40%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .close {
    font-size: 20px;
    text-align: right;
  }
  .close > span {
    cursor: pointer;
  }
`;

export const LoginPanel = ({ handleClick, handleUser }) => {
  const [otpSend, setOtpSend] = useState(false);
  const [findUser, setFindUser] = useState({});
  const [isUserExist, setIsUserExist] = useState(false);
  const navigate = useNavigate();

  const checkIsUserExist = (mob) => {
    // Dummy implementation for checking user existence
    setIsUserExist(false);
  };

  const [state, setState] = useState({
    phone: "",
    hash: "",
    otp: "",
  });

  const { phone, hash, otp } = state;
  const value = { phone, hash, otp };

  const handleOtpSend = () => {
    setOtpSend(true);
  };

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const hashHandleChange = (hash) => {
    setState({ ...state, hash: hash });
  };

  const handleNewUser = (newuser) => {
    handleUser(newuser);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (isUserExist) {
      navigate("/");
    } else {
      navigate("/booking");
    }
  };

  return (
    <Style>
      <div className="loginMain">
        <div className="login-wrap">
          {Auth.isAuthenticated() && isUserExist ? (
            handleNewUser(findUser)
          ) : otpSend ? (
            <ConfirmOtp
              handleNewUser={checkIsUserExist}
              handleChange={handleChange}
              value={value}
            />
          ) : (
            <LoginForm
              handleOtpStatus={handleOtpSend}
              handleChange={handleChange}
              hashHandleChange={hashHandleChange}
              value={value}
              handleLoginSubmit={handleLoginSubmit} // Add this prop
            />
          )}
        </div>
      </div>
    </Style>
  );
};
