import Immutable from 'immutable';

import * as Models from 'models';
import { Action, State } from './models';
import ActionType from './constants';

const initialState: State = Immutable.fromJS({
  moviesResponse: {},
});

const bodyReducer = (state = initialState, action: Models.IAction): State => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return setData(state, action);

    default:
      return state;
  }
};

export default bodyReducer;

const setData: Models.Reducer<State, Action.SetData> = (state, action) => {
  return state.set('moviesResponse', Immutable.fromJS(action.payload));
};