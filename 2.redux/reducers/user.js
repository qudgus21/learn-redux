const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        isLoggingIn: true,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        isLoggingIn: false,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
