import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  //여기에서 비동기 요청 (axios)

  const state = thunkAPI;
});

const logIn = (data) => {
  //action
  return (dispatch, getState) => {
    // 요청이 시작했음을 알리는 액션
    dispatch({ type: "LOG_IN_REQUEST" });

    //axios.then.catch
    loginRequest(data)
      .then((info) => {
        dispatch({ type: "LOG_IN_SUCCESS", data });
      })
      .catch((e) => dispatch({ type: "LOG_IN_Fail", error: e }));
  };
};

const loginRequest = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: data,
        logined: true,
      });
    }, 2000);
  });
};

//sync action creator
// const logIn = (data) => {
//   return {
//     // action
//     type: "LOG_IN",
//     data,
//   };
// };

export { logIn };
