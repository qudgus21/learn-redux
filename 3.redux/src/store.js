import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index.js";

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("action start...", action);
  next(action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

export default store;
