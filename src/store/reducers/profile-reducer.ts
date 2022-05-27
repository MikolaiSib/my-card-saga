import { SET_PROFILE } from '../../constants/actionConstants';

const initialState = {};

export const profileReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...action.payload.profile };
    default:
      return state;
  }
};
