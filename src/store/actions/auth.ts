import auth0 from 'auth0-js';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import history from '../../history';
import { makeReduxTypes } from '../util';
import { IReduxTypes } from '../util';

export const authTypes: IReduxTypes = makeReduxTypes(
  'auth',
  'ERR',
  'SET_SESSION',
  'LOGOUT',
  'LOGGING_IN',
);

export const authConfig = new auth0.WebAuth({
  // this information does not need to be kept secret.
  clientID: '2fe4pJb7pjE6oKVa8ZR0NDgn8GjMoZbE',
  domain: 'rcv.auth0.com',
  redirectUri: 'http://localhost:3000/auth_callback',
  responseType: 'token id_token',
  scope: 'openid',
});

export const login = () => (dispatch: Dispatch) => {
  dispatch({ type: authTypes.LOGGING_IN });
  authConfig.authorize();
};

export const logout = () => (dispatch: Dispatch) => {
  // Remove isLoggedIn flag from localStorage
  localStorage.removeItem('isLoggedIn');

  authConfig.logout({
    returnTo: window.location.origin,
  });

  // navigate to the home route
  history.replace('/home');
  dispatch({ type: authTypes.LOGOUT });
};

export const setError = (errMsg: string, err: any) => ({
  err,
  errMsg,
  type: authTypes.ERR,
});

export const setSession = (authResult: auth0.Auth0DecodedHash) => (
  dispatch: Dispatch,
) => {
  localStorage.setItem('isLoggedIn', 'true');
  const expiresAt = (authResult.expiresIn || 0) * 1000 + new Date().getTime();
  const { accessToken, idToken } = authResult;
  dispatch({
    payload: {
      accessToken,
      expiresAt,
      idToken,
    },
    type: authTypes.SET_SESSION,
  });
  history.replace('/home');
};

export const handleAuthentication = () => (
  dispatch: ThunkDispatch<any, any, any>,
) =>
  authConfig.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      dispatch(setSession(authResult));
    } else if (err) {
      history.replace('/home');
      dispatch(
        setError(
          `Error: ${err.error}. Check the console for further details.`,
          err,
        ),
      );
    }
  });

export const renewSession = () => (dispatch: ThunkDispatch<any, any, any>) =>
  authConfig.checkSession({}, (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      dispatch(setSession(authResult));
    } else if (err) {
      dispatch(logout());
      dispatch(
        setError(
          `Could not get a new token (${err.error}: ${err.errorDescription}).`,
          err,
        ),
      );
    }
  });
