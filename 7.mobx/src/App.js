import React, { Component } from "react";
import {
  observer,
  useObserver,
  useLocalStore,
  useAsObservableSource,
} from "mobx-react";
import { userStore, postStore } from "./store";
import { action, observable } from "mobx";

const App = () => {
  const state = useLocalStore(() => ({
    name: "n",
    pwd: "o",
    onChangeName: action(function (e) {
      this.name = e.target.name;
    }),
  }));

  const onLogin = () => {
    userStore.logIn({
      id: "호호호",
      pwd: "asdasd12312ASD1",
    });
  };

  const onChangeName = (e) => {
    this.state.name = e.target.name;
  };

  return useObserver(
    <div>
      <div>{userStore.id}</div>
      <button onClick={onLogin}>클릭</button>
    </div>
  );
};

export default App;
