import { observable, autorun, runInAction, reaction, action } from "mobx";

const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});

const change = action(() => {
  state.compA = "b";
});

change();

autorun(() => {
  console.log("autorun", state.compA);
});

reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compB);
  }
);

runInAction(() => {
  state.compA = "b";
});

runInAction(() => {
  state.compA = "b";
  state.compA = "c";
  state.compA = "e";
  state.compB = "f";
});
