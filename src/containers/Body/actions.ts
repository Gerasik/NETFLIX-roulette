import ActionType from './constants';
import { Action } from '../../models';

export const setData: Action = data => {
  return { type: ActionType.SET_DATA, payload: data };
};

export const increment: Action = data => {
  return { type: ActionType.SET_DATA, payload: data };
};
