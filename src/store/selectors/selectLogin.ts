import { AppStateType } from '../types/storeTypes';

export const selectIsLogin = (state: AppStateType): boolean => state.auth.isLoggedIn;
