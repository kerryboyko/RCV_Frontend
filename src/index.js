import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import Routes from './router/routes';

export const store = configureStore();

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Routes/>
    </Provider>,
    document.getElementById('root'),
  );

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
