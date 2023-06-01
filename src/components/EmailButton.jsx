import React from 'react';
import email from '../assets/email.svg';
import '../styles/components/EmailButton.css';

const EmailButton = () => {
  const sendEmail = () => {
    window.location.href = 'mailto:emaiarezende@gmail.com';
  };

  return (<div className="email">
    <button className="email_button" onClick={sendEmail}>
      <img src={email} alt="icon" />
    </button>
    <p>emaiarezende@gmail.com</p>
    </div>
  );
};

export default EmailButton;
