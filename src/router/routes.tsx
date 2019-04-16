import React from "react";
import { Route, Router } from "react-router-dom";
import { AnyAction } from "redux";
import App from "../containers/App/App";
import AuthCallback from "../containers/AuthCallback/AuthCallback";
import history from "../history";
import { store } from "../index";
import { handleAuthentication } from "../store/actions/auth";

const doAuthenticate = (nextState: any, _replace?: any) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    handleAuthentication()(store.dispatch);
  }
};

export const makeMainRoutes = () => (
  <Router history={history}>
    <div>
      <Route path="/" render={props => <App {...props} />} />
      <Route path="/home" render={props => <div>Home</div>} />
      <Route
        path="/auth_callback"
        render={(props: any) => {
          doAuthenticate(props);
          return <AuthCallback {...props} />;
        }}
      />
    </div>
  </Router>
);

export default makeMainRoutes;
