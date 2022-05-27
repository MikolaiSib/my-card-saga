import { SET_IS_LOGGED_IN } from '../../constants/actionConstants';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return { ...action.payload };
    default:
      return state;
  }
};
