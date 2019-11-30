import { actionTypes } from "../action/constants";

let initialState = {
  step: 1
};

const checkInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default checkInReducer;
