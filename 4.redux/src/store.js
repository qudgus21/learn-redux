import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

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

//실제 사용시 env 활용해서 mode에 따라 사용여부 선택
const enhancer = composeWithDevTools(
  applyMiddleware(firstMiddleware, thunkMiddleware)
);

const store = createStore(reducer, initialState, enhancer);

export default store;
