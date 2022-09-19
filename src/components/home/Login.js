import React from 'react';
import { useFormik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/styles/Login.scss';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify({ user: values }, null, 2));
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
        className="button"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
