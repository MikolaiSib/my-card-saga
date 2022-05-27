import React from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../store/actions/actions';
import { selectIsLogin } from '../../store/selectors/selectLogin';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: '',
    },
    onSubmit: (values: any) => {
      dispatch(login(values));
      formik.resetForm();
    },
  });

  if (isLogin) {
    return <Navigate to="/profile" />;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <input
        id="rememberMe"
        name="rememberMe"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.rememberMe}
      />
      <button type="submit">Login</button>
    </form>
  );
};
