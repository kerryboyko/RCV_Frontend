import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./router/routes";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";

export const store = configureStore();

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById("root")
  );

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
