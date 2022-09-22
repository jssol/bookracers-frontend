import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/user/signupSlice';

function NewSignUp() {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.signup.user);
  const authenticated = useSelector((state) => state.signup.authenticated);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/register/login');
    }
  }, [navigate, authenticated]);

  state = {
    name,
    email,
    password,
    admin: false,
  };

  const submitHandler = (e) => {
    if (password !== passwordConfirmation) {
      alert('Password mismatch');
      e.preventDefault();
    }
    dispatch(signup(state));
    e.preventDefault();
  };

  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password"
          className="form-input"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit" className="form-button button">
          Next
        </button>
      </form>
    </>
  );
}

export default NewSignUp;
