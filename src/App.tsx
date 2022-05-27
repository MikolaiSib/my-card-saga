import React from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Login } from './components/login/Login';
import { Profile } from './components/profile/Profile';
import { logout } from './store/actions/actions';

export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  ERROR404: '/404',
  REGISTRATION: '/registration',
  PASSWORD_RECOVERY: '/password-recovery',
  NEW_PASSWORD: '/set-new-password/*',
  ALL_PACKS_LIST: '/packs-list',
  MY_PACKS_LIST: '/my-packs-list',
  FORGOT_PASSWORD: '/forgot',
};

const App: React.FC = () => {
  const dispatch = useDispatch();

  const onLogoutClick = (): any => {
    dispatch(logout());
  };

  return (
    <div>
      <button type="button" onClick={onLogoutClick}>
        Logout
      </button>
      <Routes>
        {/* <Route path="/" element={<Navigate to={PATH.PROFILE} />} /> */}
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        {/* <Route path={PATH.ERROR404} element={<Error404 />} /> */}
        {/* <Route path="*" element={<Navigate to={PATH.ERROR404} />} /> */}
        {/* <Route path={PATH.REGISTRATION} element={<Registration />} /> */}
        {/* <Route path={PATH.PASSWORD_RECOVERY} element={<RecoveryPassword />} /> */}
        {/* <Route path={PATH.NEW_PASSWORD} element={<NewPasswordContainer />} /> */}
        {/* <Route path={`${PATH.MY_PACKS_LIST}/:user_id`} element={<AllPacksList />} /> */}
        {/* <Route path={PATH.ALL_PACKS_LIST} element={<AllPacksList />} /> */}
        {/* <Route path={`${PATH.ALL_PACKS_LIST}/:pack_id`} element={<Cards />} /> */}
        {/* <Route path={PATH.FORGOT_PASSWORD} element={<ForgotContainer />} /> */}
      </Routes>
    </div>
  );
};
export default App;
