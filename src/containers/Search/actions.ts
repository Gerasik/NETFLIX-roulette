import ActionType from './constants';
import { ActionCreator } from './models';

export const changeSearchString: ActionCreator.CHANGE_SEARCH_STRING = payload => ({
  type: ActionType.CHANGE_SEARCH_STRING,
  payload,
});

export const changeSearchBy: ActionCreator.CHANGE_SEARCH_BY = payload => ({
  type: ActionType.CHANGE_SEARCH_BY,
  payload,
});

export const changeSortBy: ActionCreator.CHANGE_SORT_BY = payload => ({
  type: ActionType.CHANGE_SORT_BY,
  payload,
});
