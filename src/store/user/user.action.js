import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const setIsProfileOpen = (boolean) => 
    createAction(USER_ACTION_TYPES.SET_IS_PROFILE_OPEN,boolean);

export const setDisplayName = (displayName) =>
    createAction(USER_ACTION_TYPES.SET_DISPLAY_NAME,displayName);