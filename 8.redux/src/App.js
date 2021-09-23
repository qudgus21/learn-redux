import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    this.props.dispatchLogIn({
      id: "testid",
      password: "sadasd123",
    });
  };

  onLogOut = () => {
    this.props.dispatchLogOut();
  };

  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {user.isLoggingIn ? (
            <div>로그인 중</div>
          ) : user.data ? (
            <div>{user.data && user.data.id}</div>
          ) : (
            <div>
              <button onClick={this.onClick}>로그인하기</button>
            </div>
          )}
          {user.data && <button onClick={this.onLogOut}>로그아웃하기</button>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
