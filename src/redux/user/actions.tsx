import UserActionTypes from "./actionTypes";

export const loginUser = (payload: any) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
