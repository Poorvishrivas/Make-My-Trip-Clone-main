import React, { useState } from 'react';

const FlightGuestDetails = ({ onGuestDetailsChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
    onGuestDetailsChange({ name, email, mobile });
  };

  return (
    <div className="guest-details">
      <h3>Guest Details</h3>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange(setName)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange(setEmail)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={handleChange(setMobile)}
        />
      </div>
    </div>
  );
};

export default FlightGuestDetails;
