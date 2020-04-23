import { createSelector } from 'reselect';

import { State } from './models';

const searchInfo = (state): State => {
  return state.get('searchReducer') as State;
};

export const searchSortBy = (state): string => {
  return state.get('searchReducer').get('sortBy');
};

export const searchData = createSelector(searchInfo, searchInfo => ({
  searchString: searchInfo.get('searchString'),
  searchBy: searchInfo.get('searchBy'),
  sortBy: searchInfo.get('sortBy'),
}));
