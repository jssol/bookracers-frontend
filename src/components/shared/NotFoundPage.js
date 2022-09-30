import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NotFoundPage.scss';

const NotFoundPage = () => {
  useEffect(() => {
    import('../../utils/notfoundpage')
      .then((module) => {
        module();
      });
  }, []);

  return (
    <div className="container">
      <NavLink to="/" className="home-button">Go to the Homepage</NavLink>
      <div className="content">
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
          <div className="cog1">
            <div className="top" />
            <div className="down" />
            <div className="left-top" />
            <div className="left-down" />
            <div className="right-top" />
            <div className="right-down" />
            <div className="left" />
            <div className="right" />
          </div>
        </div>

        <div className="cog-wheel2">
          <div className="cog2">
            <div className="top" />
            <div className="down" />
            <div className="left-top" />
            <div className="left-down" />
            <div className="right-top" />
            <div className="right-down" />
            <div className="left" />
            <div className="right" />
          </div>
        </div>
        <h1 className="second-four">4</h1>
      </div>
      <p className="wrong-para">Uh Oh! Page not found!</p>
    </div>
  );
};

export default NotFoundPage;
