import { React, useRef, useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import './Splashscreen.css';

const Splashscreen = () => {
  const [login, setlogin] = useState(true);
  const SplashscreenRef = useRef(null);

  const handleClick = () => {
    setlogin(!login);

    SplashscreenRef.current.classList.toggle('active');
  };
  return (
    <div className="cont">
      <h1 className="splash-h1"><i> Book Racers </i></h1>
      <hr />
      <div className="splashscreen-container" ref={SplashscreenRef}>
        <Login />
        <div className="side-div">
          <button type="button" onClick={handleClick}>
            {login ? 'Signup' : 'Login'}
          </button>
        </div>
        <Signup />
      </div>
    </div>

  );
};

export default Splashscreen;
