import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-immutable';
import { helloSaga } from 'sagas';
import bodyReducer from 'containers/Body/reducer';
import searchReducer from 'containers/Search/reducer';

const reducers = combineReducers({
  bodyReducer,
  searchReducer,
});

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(bodyReducer, composeEnhancers());
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(helloSaga);

export default store;
