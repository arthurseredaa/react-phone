import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/app";

import { userReducer } from "./reducers/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
