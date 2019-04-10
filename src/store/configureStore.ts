import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import loggerMiddleware from "./enhancers/logger";
import monitorReducersEnhancer from "./enhancers/monitorReducer";
import rootReducer from "./reducers";

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
    window.showState = () => {
      console.log(store.getState());
    };
  }

  return store;
};

export default configureStore;
