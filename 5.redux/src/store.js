import reducer from "./reducers/index.js";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const firstMiddleware = (store) => (next) => (action) => {
  console.log("action start...", action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()],
  devTools: true,
});

export default store;
