import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./actions/user";

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
    dispatch(logOut());
  };

  return (
    <div className="App">
      <header className="App-header">
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
