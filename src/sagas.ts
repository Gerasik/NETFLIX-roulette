/* eslint-disable require-yield */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeEvery, select, put, cancel, fork, take, delay } from 'redux-saga/effects';

export function* watchFetchData() {
  yield takeEvery(['CHANGE-SORT-BY', 'CHANGE-SEARCH-BY'], getState);
}

const getSearchData = state => ({
  searchString: state.getIn(['searchReducer', 'searchString']),
  searchBy: state.getIn(['searchReducer', 'searchBy']),
  sortBy: state.getIn(['searchReducer', 'sortBy']),
});

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

export function* getState() {
  const { searchString, searchBy, sortBy } = yield select(getSearchData);
  const searchStr = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${searchString}&searchBy=${searchBy}&limit=6`;
  const payload = yield fetchData(searchStr);

  yield put({ type: 'SET-DATA', payload });
}

function* handleInput() {
  yield delay(1500);
  yield getState();
}

export function* watchInput() {
  let task;
  while (true) {
    yield take('CHANGE-SEARCH-STRING');
    if (task) {
      yield cancel(task);
    }
    task = yield fork(handleInput);
  }
}
