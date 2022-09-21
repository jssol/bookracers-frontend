import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authentication/authentication';
// import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <form
      className="form-container"
      onSubmit={formik.handleSubmit}
    >
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="form-input"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="form-input"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button
        type="submit"
        className="form-button button"
      >
        Next
      </button>
    </form>
  );
};

export default Login;
