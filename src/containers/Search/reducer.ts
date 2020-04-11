import Immutable from 'immutable';

import * as Models from 'models';
import { Action, State } from './models';
import ActionType from './constants';

const initialState: State = Immutable.fromJS({
  searchString: '',
  searchBy: 'genres', // title
  sortBy: 'vote_average', // release_date
});

const searchReducer = (state = initialState, action: Models.IAction): State => {
  switch (action.type) {
    case ActionType.CHANGE_SEARCH_STRING:
      return setData(state, action);

    case ActionType.CHANGE_SEARCH_BY:
      return changeSearchBy(state, action);

    case ActionType.CHANGE_SORT_BY:
      return changeSortBy(state, action);

    default:
      return state;
  }
};

export default searchReducer;

const setData: Models.Reducer<State, Action.CHANGE_SEARCH_STRING> = (state, action) => {
  return state.set('searchString', action.payload);
};

const changeSearchBy: Models.Reducer<State, Action.CHANGE_SEARCH_BY> = (state, action) => {
  return state.set('searchBy', action.payload);
};

const changeSortBy: Models.Reducer<State, Action.CHANGE_SORT_BY> = (state, action) => {
  return state.set('sortBy', action.payload);
};