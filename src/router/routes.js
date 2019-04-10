import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from '../components/App/App';
import AuthCallback from '../components/AuthCallback/AuthCallback';
import history from '../history';
import { handleAuthentication } from '../store/actions/auth';
import { store } from '../index';

const doAuthenticate = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    store.dispatch(handleAuthentication());
  }
};

export const makeMainRoutes = () => (
  <Router history={history} component={App}>
    <div>
      <Route path="/" render={props => <App {...props} />} />
      <Route path="/home" render={props => <div>Home</div>} />
      <Route
        path="/auth_callback"
        render={props => {
          doAuthenticate(props);
          return <AuthCallback {...props} />;
        }}
      />
    </div>
  </Router>
);

export default makeMainRoutes;
