import { actionTypes } from "./constants";

export const setUserData = data => ({
  type: actionTypes.SET_USER_DATA,
  payload: { ...data }
});
