import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions/user";
import userSlice from "./reducers/user";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  });

  const onClick = () => {
    dispatch(
      logIn({
        id: "testid",
        password: "sadasd123",
      })
    );
  };

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>REDUX5</div>
        {user.isLoggingIn ? (
          <div>로그인 중</div>
        ) : user.data ? (
          <div>{user.data && user.data.id}</div>
        ) : (
          <div>
            <button onClick={onClick}>로그인하기</button>
          </div>
        )}
        {user.data && <button onClick={onLogOut}>로그아웃하기</button>}
      </header>
    </div>
  );
};

export default App;
