import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './enhancers/logger';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import rootReducer from './reducers';

const configureStore = (preloadedState?: any) => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers: StoreEnhancer<{}, {}> = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export default configureStore;
