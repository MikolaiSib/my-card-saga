import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLogin } from '../../store/selectors/selectLogin';
import {
  selectAvatar,
  selectEmail,
  selectName,
} from '../../store/selectors/selectProfile';

export const Profile: React.FC = () => {
  const isLogin = useSelector(selectIsLogin);
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);
  const avatar = useSelector(selectAvatar);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div>{email}</div>
      <div>{name}</div>
      <div>{avatar ? 'yes' : 'no'}</div>
    </div>
  );
};
