import Immutable from 'immutable';
import { createSelector } from 'reselect';

import * as Models from 'models';
import { State } from './models';

const moviesResponse = (state): Models.MoviesResponseMap => (state as State).get('moviesResponse');
export const moviesData = createSelector(moviesResponse, moviesResponse => {
  return moviesResponse.get('data') || Immutable.List();
});
