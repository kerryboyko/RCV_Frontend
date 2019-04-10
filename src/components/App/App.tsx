// src/components/App/index.js

import { History } from 'history';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { login, logout, renewSession } from '../../store/actions/auth';
import './App.css';

interface IAppProps {
  history: History;
  authActions: {
    login: any;
    logout: any;
    renewSession: any;
  };
  isAuthenticated: boolean;
}

class App extends Component<IAppProps> {
  public handleGoTo = (route: string) => () =>
    this.props.history.replace(`/${route}`);

  public componentDidMount() {
    const { authActions } = this.props;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      authActions.renewSession();
    }
  }

  public render() {
    const { isAuthenticated, authActions } = this.props;
    return (
      <div>
        isAuthenticated = {JSON.stringify(isAuthenticated)}
        <button onClick={this.handleGoTo('home')}>Home</button>
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

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: new Date().getTime() < state.auth.expiresAt,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
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
