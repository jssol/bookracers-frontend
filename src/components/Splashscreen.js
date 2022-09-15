import React from 'react';
import logo from './logo.svg';

const Splashscreen = () => (
  <div className="Splashscreen">
    <div className="splashscreen-header">
      <img src={logo} className="splashscreen-logo" alt="logo" />
      <h2>Welcome to BookRacers</h2>
    </div>
    <p className="splashscreen-intro">
      To get started, edit
      {' '}
      <code>src/Splashscreen.js</code>
      {' '}
      and save to reload.
    </p>
  </div>
);

export default Splashscreen;
