import React, { useState } from 'react';
import styled from 'styled-components';

const GuestDetailsStyle = styled.div`
  .guest-details {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 0;
  }

  .form-group {
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const GuestDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  return (

    <GuestDetailsStyle>
      <div className="guest-details">
        <h3>Guest Details</h3>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>
    </GuestDetailsStyle>

  );
};

export default GuestDetails;
