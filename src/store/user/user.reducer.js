import {USER_ACTION_TYPES} from './user.types';

export const USER_INITIAL_STATE = {
  currentUser: null,
  isProfileOpen : false,
  displayName : null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SET_IS_PROFILE_OPEN:
      return { ...state,isProfileOpen:payload}
    case USER_ACTION_TYPES.SET_DISPLAY_NAME:
      return { ...state,displayName:payload}
    default:
      return state;
  }
};