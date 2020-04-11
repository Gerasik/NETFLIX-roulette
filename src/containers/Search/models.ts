import Immutable from 'immutable';

import * as Models from 'models';

export type State = Immutable.Record<{
  searchString: string;
  searchBy: string;
  sortBy: string;
}>;

export namespace Payload {
  export type CHANGE_SEARCH_STRING = string;
  export type CHANGE_SEARCH_BY = string;
  export type CHANGE_SORT_BY = string;
}

export namespace Action {
  export type CHANGE_SEARCH_STRING = Models.IAction<Payload.CHANGE_SEARCH_STRING>;
  export type CHANGE_SEARCH_BY = Models.IAction<Payload.CHANGE_SEARCH_BY>;
  export type CHANGE_SORT_BY = Models.IAction<Payload.CHANGE_SORT_BY>;
}
export namespace ActionCreator {
  export type CHANGE_SEARCH_STRING = (
    payload: Payload.CHANGE_SEARCH_STRING
  ) => Action.CHANGE_SEARCH_STRING;
  export type CHANGE_SEARCH_BY = (payload: Payload.CHANGE_SEARCH_BY) => Action.CHANGE_SEARCH_BY;
  export type CHANGE_SORT_BY = (payload: Payload.CHANGE_SORT_BY) => Action.CHANGE_SORT_BY;
}
