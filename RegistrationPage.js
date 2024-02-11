// RegistrationPage.js

import React from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <div className="registration-left">
        <h1 className="welcome-header">Welcome New User!</h1>
        <p className="welcome-message">
          Thank you for choosing the Doctor Appointment Booking website! We hope you have a wonderful and convenient experience with our platform.
        </p>
        <div className="register">
          <h2 className="register-as-header">Register As</h2>
          <div className="registration-buttons">
            <button className="registration-button">I am here as a Doctor</button>
            <button className="registration-button">I am here to look for Doctors</button>
          </div>
        </div>
      </div>
      <div className="registration-right"></div>
    </div>
  );
};

export default RegistrationPage;
