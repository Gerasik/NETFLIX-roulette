import { createStore } from 'redux';
// import { combineReducers } from 'redux-immutable';

import bodyReducer from './containers/Body/reducer';

// const reducer = combineReducers({
//   bodyReducer,
// });

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(bodyReducer, composeEnhancers());

export default store;
