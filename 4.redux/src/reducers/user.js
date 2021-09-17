import produce from "immer";

const initialState = {
  isLoggingIn: false,
  data: null,
};

//nextState = produce(prevState , (draft)=>{})
const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.isLoggingIn = true;
        break;
      case "LOG_IN_SUCCESS":
        draft.isLoggingIn = false;
        draft.data = action.data;
        break;
      case "LOG_OUT":
        draft.isLoggingIn = false;
        draft.data = null;
        break;
      case "LOG_IN_Fail":
        draft.isLoggingIn = false;
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
