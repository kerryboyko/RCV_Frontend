import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import loggerMiddleware from './enhancers/logger';
import monitorReducersEnhancer from './enhancers/monitorReducer';

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    window.showState = () => {
      console.log(store.getState());
    };
  }

  return store;
};

export default configureStore;
