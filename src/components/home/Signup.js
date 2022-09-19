import React from 'react';
import { useFormik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      admin: false,
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify({ user: values }, null, 2));
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
