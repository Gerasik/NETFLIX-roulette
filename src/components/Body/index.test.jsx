/* eslint-disable @typescript-eslint/camelcase */
import configureStore from 'react-redux';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Immutable from 'immutable';

import MovieCard from 'components/MovieCard';
import Body from './index';

const testMoviesData = Immutable.fromJS([
  {
    id: 1,
    title: 'first movie',
    tagline: 'test',
    vote_average: 55,
    vote_count: 66,
    release_date: '08081992',
    poster_path: '/movie_url/image.jpg',
    overview: 'ove',
    budget: 54545,
    revenue: 5454,
    runtime: 5454,
    genres: ['drama', 'sitcom', 'drama'],
  },
  {
    id: 2,
    title: 'second movie',
    tagline: 'test',
    vote_average: 55,
    vote_count: 66,
    release_date: '08081992',
    poster_path: '/movie_url/image2.jpg',
    overview: 'ove',
    budget: 54545,
    revenue: 5454,
    runtime: 5454,
    genres: ['drama'],
  },
]);

let returnData;

function testSetData(response) {
  returnData = response;
}

describe('<Body />', () => {
  const wrapper = shallow(<Body moviesData={testMoviesData} />);

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be two MovieCard component', () => {
    expect(wrapper.find(MovieCard).length).toBe(2);
  });

  it('right props first MovieCard component', () => {
    expect(wrapper.find(MovieCard).get(0).props.data).toBe(testMoviesData.get(0));
  });
});
