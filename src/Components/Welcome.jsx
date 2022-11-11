import React from 'react';
import tklogo from '../tklogo.gif';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <div className="WelcomeSection">
        <h1>Tony Kang</h1>
        <p>Fullstack Engineer/Frontend Developer</p>
      </div>
      <img src={tklogo} alt="logo animation"></img>
    </div>
  );
}

export default Welcome;