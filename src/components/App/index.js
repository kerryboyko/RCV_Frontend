// src/components/App/index.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { login, logout, renewSession } from '../../store/actions/auth';

class App extends Component {
  handleGoTo = route => () => this.props.history.replace(`/${route}`);

  componentDidMount() {
    const { authActions } = this.props;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      authActions.renewSession();
    }
  }

  render() {
    const { isAuthenticated, authActions } = this.props;
    return (
      <div>
        <button onClick={this.handleGoTo('home')}>Home</button>
        {!isAuthenticated() && (
          <button onClick={authActions.login}>Log In</button>
        )}
        {isAuthenticated() && (
          <button onClick={authActions.logout}>Log Out</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: new Date().getTime() < state.expiresAt,
});

const mapDispatchToProps = dispatch => ({
  authActions: {
    login: dispatch(login()),
    logout: dispatch(logout()),
    renewSession: dispatch(renewSession()),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
