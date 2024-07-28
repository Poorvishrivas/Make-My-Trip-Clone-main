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

const LoginForm = ({
  handleOtpStatus,
  handleChange,
  hashHandleChange,
  value,
  handleLoginSubmit,
}) => {
  const [accType, setAccType] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleAccTypeChange = (type) => {
    setAccType(type);
    setIsAdmin(type === "admin");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-api-endpoint", formData);
      if (res.status === 200) {
        // Save token and user data to context/state if needed
        handleLoginSubmit(e); // Call handleLoginSubmit on successful login
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <LoginBox isAdmin={isAdmin}>
          <Title isAdmin={isAdmin}>Login</Title>
          <AccountTypeSelector isAdmin={isAdmin}>
            <div
              className={`acc-type ${
                accType === "admin" ? "active-login" : ""
              }`}
              onClick={() => handleAccTypeChange("admin")}
            >
              Admin
            </div>
            <div
              className={`acc-type ${accType === "user" ? "active-login" : ""}`}
              onClick={() => handleAccTypeChange("user")}
            >
              User
            </div>
          </AccountTypeSelector>
          <form onSubmit={handleSubmit}>
            <FormGroup isAdmin={isAdmin}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup isAdmin={isAdmin}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            {error && (
              <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>
            )}
            <SubmitButton type="submit" value="CONTINUE" isAdmin={isAdmin} />
          </form>
        </LoginBox>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;
