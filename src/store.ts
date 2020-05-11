import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';

import { watchFetchData, watchFilmId } from 'sagas';
import bodyReducer from 'containers/Body/reducer';
import searchReducer from 'containers/Search/reducer';
import filmData from 'containers/Film/reducer';

const rootReducers = combineReducers({
  bodyReducer,
  searchReducer,
  filmData,
});

const initState = fromJS({
  bodyReducer: fromJS({
    moviesResponse: {},
  }),
  searchReducer: fromJS({
    searchString: '',
    searchBy: 'title',
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
sagaMiddleware.run(watchFilmId);

persistStore(store, { key: 'root', whiteList: ['searchReducer'] });

export default store;
