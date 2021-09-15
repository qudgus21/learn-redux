import { createStore, compose, applyMiddleware } from "redux";
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

// function firstMiddleware(store){
//   return function(next){
//     return function(action){

//     }
//   }
// }
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

// middleware 여러개 사용할 경우 이 방식으로도 가능
// const enhancer = compose(
//   applyMiddleware(),
// )

const store = createStore(reducer, initialState, enhancer);

// store.subscribe(() => {
//   console.log("subscribe");
// });

console.log("1nd", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "hyeon",
    admin: true,
  })
);

console.log("2nd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요. 리덕스",
//   })
// );

// console.log("3rd", store.getState());

// store.dispatch(logOut());

// console.log("4th", store.getState());
