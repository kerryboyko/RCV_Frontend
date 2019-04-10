import auth0 from "auth0-js";
import history from "../../history";
import { makeReduxTypes } from "../util";

export const authTypes = makeReduxTypes(
  "auth",
  "ERR",
  "SET_SESSION",
  "LOGOUT",
  "LOGGING_IN",
);

export const authConfig = new auth0.WebAuth({
  // this information does not need to be kept secret.
  domain: "rcv.auth0.com",
  clientID: "2fe4pJb7pjE6oKVa8ZR0NDgn8GjMoZbE",
  redirectUri: "http://localhost:3000/auth_callback",
  responseType: "token id_token",
  scope: "openid",
});

export const login = () => (dispatch) => {
  dispatch({ type: authTypes.LOGGING_IN });
  authConfig.authorize();
};

export const logout = () => (dispatch) => {
  // Remove isLoggedIn flag from localStorage
  localStorage.removeItem("isLoggedIn");

  authConfig.logout({
    return_to: window.location.origin,
  });

  // navigate to the home route
  history.replace("/home");
  dispatch({ type: authTypes.LOGOUT });
};

export const setError = (errMsg, err) => ({ type: authTypes.ERR, errMsg, err });

export const setSession = (authResult) => (dispatch) => {
  localStorage.setItem("isLoggedIn", "true");
  const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  const { accessToken, idToken } = authResult;
  dispatch({
    type: authTypes.SET_SESSION,
    payload: {
      accessToken,
      idToken,
      expiresAt,
    },
  });
  history.replace("/home");
};

export const handleAuthentication = () => (dispatch) =>
  authConfig.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      dispatch(setSession(authResult));
    } else if (err) {
      history.replace("/home");
      dispatch(
        setError(
          `Error: ${err.error}. Check the console for further details.`,
          err,
        ),
      );
    }
  });

export const renewSession = () => (dispatch) =>
  authConfig.checkSession({}, (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      dispatch(setSession(authResult));
    } else if (err) {
      dispatch(logout());
      dispatch(
        setError(
          `Could not get a new token (${err.error}: ${err.error_description}).`,
          err,
        ),
      );
    }
  });
