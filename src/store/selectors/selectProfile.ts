import { AppStateType } from '../types/storeTypes';

export const selectEmail = (state: AppStateType): boolean => state.profile.email;
export const selectName = (state: AppStateType): boolean => state.profile.name;
export const selectAvatar = (state: AppStateType): boolean => state.profile.avatar;
