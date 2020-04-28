/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeEvery, select, put, delay, ForkEffect } from 'redux-saga/effects';

import * as Models from 'models';
import { SearchState } from 'containers/Search/models';

import { fetchData, getFilmData } from 'services';
import { setData } from 'containers/Body/actions';
import { setFilmData } from 'containers/Film/actions';
import ActionTypeBody from 'containers/Body/constants';
import ActionTypeSearch from 'containers/Search/constants';
import ActionTypeFilm from 'containers/Film/constants';

export function* watchFetchData(): Models.WatchFetchData {
  yield takeEvery([ActionTypeSearch.CHANGE_SORT_BY, ActionTypeBody.SET_START_DATA], getState);
}

export function* watchFilmId(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery([ActionTypeFilm.SET_FILM_ID], (...attr) => setFilmResponse(attr[0]));
}

export function* setFilmResponse(action) {
  const data = yield getFilmData(action.payload);
  yield put(setFilmData(data));
}

export const getSearchData = (state): SearchState => ({
  searchString: state.getIn(['searchReducer', 'searchString']),
  searchBy: state.getIn(['searchReducer', 'searchBy']),
  sortBy: state.getIn(['searchReducer', 'sortBy']),
});

export function* getState() {
  const { searchString, searchBy, sortBy } = yield select(getSearchData);
  const paramsStr = searchString
    ? `sortBy=${sortBy}&sortOrder=asc&search=${searchString}&searchBy=${searchBy}&`
    : '';
  const searchStr = `https://reactjs-cdp.herokuapp.com/movies?${paramsStr}limit=6`;
  const payload = yield fetchData(searchStr);
  const action = setData(payload);

  yield put(action);
}
