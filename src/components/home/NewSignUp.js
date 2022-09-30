import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/user/signupSlice';

const NewSignUp = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.signup.authenticated);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/register/login');
    }
  }, [navigate, authenticated]);

  const state = {
    name,
    username,
    email,
    password,
    admin: false,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(state));
  };

  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Preferred Username"
          name="username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password"
          className="form-input"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <button type="submit" className="form-button button">
          Next
        </button>
      </form>
    </>
  );
};

export default NewSignUp;
