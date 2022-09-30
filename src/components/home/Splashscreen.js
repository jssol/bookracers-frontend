import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Splashscreen.scss';

const Splashscreen = () => {
  useEffect(() => {
    if (localStorage.getItem('loggedOut')) {
      localStorage.removeItem('loggedOut');
    }
  }, []);

  return (
    <>
      <main className="splashscreen-container">
        <section className="splashscreen-content">
          <h2 className="splashscreen-message">Welcome To BookRacers!</h2>
          <NavLink to="/register/login" className="button splashscreen-button">
            Register
          </NavLink>
        </section>
      </main>
    </>
  );
};

export default Splashscreen;
