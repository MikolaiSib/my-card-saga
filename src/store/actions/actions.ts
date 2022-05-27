import {
  SET_PROFILE,
  LOGIN,
  LOGOUT,
  SET_IS_LOGGED_IN,
} from '../../constants/actionConstants';

export const login = (payload: any): any =>
  ({
    type: LOGIN,
    payload,
  } as const);

export const logout = (): any =>
  ({
    type: LOGOUT,
  } as const);

export const setIsLogin = (isLoggedIn: boolean): any =>
  ({
    type: SET_IS_LOGGED_IN,
    payload: {
      isLoggedIn,
    },
  } as const);

export const setProfile = (profile: any): any =>
  ({
    type: SET_PROFILE,
    payload: {
      profile,
    },
  } as const);
