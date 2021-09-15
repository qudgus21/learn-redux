import { createStore } from "redux";

//reducer
const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.value,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.value,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.value,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: "b",
  compC: "c",
};

//store
const store = createStore(reducer, initialState);

console.log(store.getState()); //{ compA: 'a', compB: 'b', compC: 'c' }

const changeCompA = (data) => {
  //action
  return {
    type: "CHANGE_COMP_A",
    value: data,
  };
};

store.dispatch(changeCompA("hello"));

console.log(store.getState()); //{ compA: 'hello', compB: 'b', compC: 'c' }

//화면변화
//subscribe
//react-redux안에 들어있음
store.subscribe(() => {
  console.log("subscribe");
});
