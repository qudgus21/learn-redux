import { combineReducers } from "redux";
import userSlice from "./user.js";
import postSlice from "./post.js";

const reducer = combineReducers({
  user: userSlice.reducer,
  posts: postSlice,
});

export default reducer;
