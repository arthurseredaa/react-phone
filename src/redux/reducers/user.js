import { SET_IS_LOGIN } from "../types";

const initialState = {
  isLogin: false,
  // config: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return { ...state, isLogin: action.bool };
    default:
      return state;
  }
};
