import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/user/userSlice';

function NewSignUp() {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.user.user);
  const success = useSelector((state) => state.user.success);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate('/register/login');
    }
  }, [navigate, success]);

  state = {
    name,
    email,
    password,
    admin: false,
  };

  const submitHandler = (e) => {
    dispatch(signup(state));
    console.log(state);
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
        <button type="submit" className="form-button button">
          Next
        </button>
      </form>
    </>
  );
}

export default NewSignUp;
