/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'immutable';

import { testMovie1, testMovie2, testMovieResponse } from 'testData';
import MovieCard from 'components/MovieCard';
import Body from './index';

const testList = Immutable.fromJS([testMovie1, testMovie2]);

describe('<Body />', () => {
  const wrapper = shallow(
    <Body moviesData={testList} setData={() => ({ type: 'string', payload: testMovieResponse })} />
  );

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be two MovieCard component', () => {
    expect(wrapper.find(MovieCard).length).toBe(2);
  });

  it('right props first MovieCard component', () => {
    expect(wrapper.find(MovieCard).get(0).props.data).toBe(testList.get(0));
  });
});
