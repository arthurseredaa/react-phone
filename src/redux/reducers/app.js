import { SET_LOADING } from "../types";

const initialState = {
  isLoading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.bool };
    default:
      return state;
  }
};
