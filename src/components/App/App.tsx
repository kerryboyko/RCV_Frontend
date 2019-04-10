// src/components/App/index.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout, renewSession } from "../../store/actions/auth";
import "./App.css";

class App extends Component {
  public handleGoTo = (route) => () => this.props.history.replace(`/${route}`);

  public componentDidMount() {
    const { authActions } = this.props;

    if (localStorage.getItem("isLoggedIn") === "true") {
      authActions.renewSession();
    }
  }

  public render() {
    const { isAuthenticated, authActions } = this.props;
    return (
      <div>
        isAuthenticated = {JSON.stringify(isAuthenticated)}
        <button onClick={this.handleGoTo("home")}>Home</button>
        {!isAuthenticated && (
          <button onClick={authActions.login}>Log In</button>
        )}
        {isAuthenticated && (
          <button onClick={authActions.logout}>Log Out</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: new Date().getTime() < state.auth.expiresAt,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authActions: {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    renewSession: () => dispatch(renewSession()),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
