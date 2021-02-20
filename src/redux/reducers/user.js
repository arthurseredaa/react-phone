import { SET_IS_LOGIN, SET_CONFIG } from "../types";

const initialState = {
  isLogin: false,
  config: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return { ...state, isLogin: action.bool };
    case SET_CONFIG:
      return { ...state, config: action.config };
    default:
      return state;
  }
};
