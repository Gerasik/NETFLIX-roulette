import Immutable from 'immutable';

import * as Models from './models';
import ActionType from './constants';

const initialState: Models.State = Immutable.fromJS({});

const setData: Models.Reducer<Models.State> = (state, action) => {
  return state.set('movieData', action.payload);
};

const bodyReducer = (state = initialState, action: Models.ActionInterace): Models.State => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return setData(state, action);
    default:
      return state;
  }
};

export default bodyReducer;
