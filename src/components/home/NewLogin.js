import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/user/loginSlice';

const NewLogin = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.login.user);
  const authenticated = useSelector((state) => state.login.authenticated);
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/categories');
    }
  }, [navigate, authenticated]);

  state = {
    username,
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
          placeholder="Username"
          name="username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" className="form-button button">
          Log In
        </button>
      </form>
    </>
  );
};

export default NewLogin;
