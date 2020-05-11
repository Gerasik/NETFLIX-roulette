import { select } from 'redux-saga/effects';

import { getState, getSearchData } from './sagas';

describe('test saga getState', () => {
  const generator = getState();
  it('should return 1 iteration', () => {
    expect(generator.next().value).toStrictEqual(select(getSearchData));
  });
});
