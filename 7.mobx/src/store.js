import { observable, configure } from "mobx";

// configure({
//   enforceActions: "always",
// });

const userStore = observable({
  isLogginIn: false,
  logIn(data) {
    this.isLogginIn = true;
    axios.get().then((data) => {
      this.data = data;
    });
    postStore.data.push(1);
  },
});

const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});

export { userStore, postStore };
