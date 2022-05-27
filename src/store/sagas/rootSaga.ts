// eslint-disable-next-line import/no-extraneous-dependencies
import { takeEvery, call, put } from '@redux-saga/core/effects';

import { authAPI } from '../../api/auth-api';
import { LOGIN, LOGOUT } from '../../constants/actionConstants';
import { setIsLogin, setProfile } from '../actions/actions';

export function* handleLogin(action: any): any {
  const value = action.payload;
  try {
    const obj = yield call(authAPI.login, value);
    yield put(setIsLogin(true));
    yield put(setProfile(obj.data));
  } catch (error) {
    // @ts-ignore
    console.log(error.response.data.error);
  }
}

export function* handleLogout(): any {
  try {
    yield call(authAPI.logout);
    yield put(setIsLogin(false));
    yield put(setProfile({}));
  } catch (error) {
    // @ts-ignore
    console.log(error.response.data.error);
  }
}

export function* watchClickSaga(): any {
  yield takeEvery(LOGIN, handleLogin);
  yield takeEvery(LOGOUT, handleLogout);
}

export default function* rootSaga(): any {
  yield watchClickSaga();
}
