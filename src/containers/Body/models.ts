/* eslint-disable prettier/prettier */
import Immutable from 'immutable';
import * as GlobalModels from '../../models';

export interface ActionInterace {
  type: string;
  payload: GlobalModels.MoviesResponse;
}

export type Reducer<S, A = ActionInterace> = (state: S, action: A) => S;

export type State = Immutable.Map<string, GlobalModels.MoviesResponse>;
