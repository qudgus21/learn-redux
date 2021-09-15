import { createStore } from "redux";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...prevState,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};

const initalState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initalState);

store.dispatch({
  type: "LOGIN",
  user: {
    name: "hyeon",
    age: 15,
  },
});

console.log(store.getState()); //{ user: { name: 'hyeon', age: 15 }, posts: [] }

store.dispatch({
  type: "LOGOUT",
});

console.log(store.getState()); //{ user: null, posts: [] }
