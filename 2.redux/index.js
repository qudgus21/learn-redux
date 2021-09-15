import { createStore } from "redux";
import { logIn, logOut } from "./actions/user.js";
import { addPost } from "./actions/post.js";
import reducer from "./reducers/index.js";

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
  // comments: [],
  // favorites: [],
  // history: [],
  // likes: [],
  // followers: [],
};

const store = createStore(reducer, initialState);

console.log("1nd", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "hyeon",
    admin: true,
  })
);

console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);

console.log("3rd", store.getState());

store.dispatch(logOut());

console.log("4th", store.getState());
