import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/user/loginSlice';

function NewLogin() {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.login.user);
  const authenticated = useSelector((state) => state.login.authenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/categories');
    }
  }, [navigate, authenticated]);

  state = {
    email,
    password,
  };

  const submitHandler = (e) => {
    dispatch(login(state));
    e.preventDefault();
  };

  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
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
        <button type="submit" className="form-button button">
          Log In
        </button>
      </form>
    </>
  );
}

export default NewLogin;
