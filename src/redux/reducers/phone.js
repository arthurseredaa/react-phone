import { CLEAR_PHONE_NUMBER, SET_CALL_STATUS, SET_CONFIG, SET_PHONE_NUMBER } from "../types";

let initialState = {
  config: null,
  phoneNumber: "+380680205003",
  callStatus: null,
};

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG:
      return { ...state, config: action.config };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: `${state.phoneNumber + action.number}` };
    case CLEAR_PHONE_NUMBER:
      return {...state, phoneNumber: state.phoneNumber.slice(0, -1)};
    case SET_CALL_STATUS:
      return {...state, callStatus: action.status};
    default:
      return state;
  }
};
