import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    case "LOG_IN_Fail":
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    default:
      return prevState;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  //동기
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  //비동기
  extraReducers: {},
});

export default userSlice;
