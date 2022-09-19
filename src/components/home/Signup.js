import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/authentication/authentication';
// import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const state = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      admin: false,
      password: '',
    },
    onSubmit: (values) => {
      dispatch(signup(state, values));
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
      <button type="submit" className="form-button button">
        Next
      </button>
    </form>
  );
};

export default SignUp;
