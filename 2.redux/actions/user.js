//async action creator

const logIn = (data) => {
  //action
  return (dispatch, getState) => {
    // 요청이 시작했음을 알리는 액션
    dispatch({ type: "LOG_IN_REQUEST" });

    loginRequest(data)
      .then((info) => {
        dispatch({ type: "LOG_IN_SUCCESS", data });
      })
      .catch((e) => dispatch({ type: "LOG_IN_Fail", error: e }));
  };
};

const loginRequest = (data) => {
  return new Promise((resolve) => {
    resolve({
      user: data,
      logined: true,
    });
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

const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};

export { logIn, logOut };
