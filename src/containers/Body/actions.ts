import ActionType from './constants';
import { ActionInterace } from './models';
import * as GlobalModels from '../../models';

export const setData = (data: GlobalModels.MoviesResponse): ActionInterace => {
  return { type: ActionType.SET_DATA, payload: data };
};

export const increment = (data: GlobalModels.MoviesResponse): ActionInterace => {
  return { type: ActionType.SET_DATA, payload: data };
};
