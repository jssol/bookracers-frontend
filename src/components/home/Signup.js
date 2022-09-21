import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/authentication/authentication';
// import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      admin: false,
      password: '',
      password_confirmation: '',
    },
    onSubmit: (values) => {
      dispatch(signup(values));
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="form-input"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
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
      <input
        type="password"
        placeholder="Confirm password"
        name="password_confirmation"
        className="form-input"
        value={formik.values.password_confirmation}
        onChange={formik.handleChange}
      />
      <button type="submit" className="form-button button">
        Next
      </button>
    </form>
  );
};

export default SignUp;
