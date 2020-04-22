import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-immutable';
import { watchFetchData, watchInput } from 'sagas';
import bodyReducer from 'containers/Body/reducer';
import searchReducer from 'containers/Search/reducer';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import { fromJS } from 'immutable';

const rootReducers = combineReducers({
  bodyReducer,
  searchReducer,
});

const initState = fromJS({
  bodyReducer: fromJS({
    moviesResponse: {},
  }),
  searchReducer: fromJS({
    searchString: '',
    searchBy: 'genres',
    sortBy: 'vote_average',
  }),
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  initState,
  compose(composeWithDevTools(applyMiddleware(sagaMiddleware)), autoRehydrate())
);

sagaMiddleware.run(watchFetchData);
sagaMiddleware.run(watchInput);

persistStore(store, { key: 'root', whiteList: ['searchReducer'] });

export default store;
