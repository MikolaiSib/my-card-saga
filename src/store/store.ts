import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore: any = (preloadedState: any) =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

export const store = configureStore({});

sagaMiddleware.run(rootSaga);

// @ts-ignore
window.store = store;
