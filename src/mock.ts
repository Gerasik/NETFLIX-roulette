/* eslint-disable @typescript-eslint/camelcase */
import { fromJS } from 'immutable';

import { Movie, MoviesResponse, MoviesData, MovieMap } from 'models';
import { State } from './containers/Body/models';

export const testMovie1: Movie = {
  id: 1,
  title: 'first movie',
  tagline: 'test',
  vote_average: 55,
  vote_count: 66,
  release_date: '2020-05-01',
  poster_path: '/movie_url/image.jpg',
  overview: 'ove',
  budget: 54545,
  revenue: 5454,
  runtime: 5454,
  genres: ['drama', 'sitcom', 'drama'],
};

export const testMovie2: Movie = {
  id: 2,
  title: 'second movie',
  tagline: 'test',
  vote_average: 55,
  vote_count: 66,
  release_date: '2020-05-01',
  poster_path: '/movie_url/image2.jpg',
  overview: 'ove',
  budget: 54545,
  revenue: 5454,
  runtime: 5454,
  genres: ['drama'],
};

export const testMovie3: Movie = {
  id: 2,
  title: 'second movie',
  tagline: 'test',
  vote_average: 55,
  vote_count: 66,
  release_date: '2020-05-01',
  poster_path: '',
  overview: 'ove',
  budget: 54545,
  revenue: 5454,
  runtime: NaN,
  genres: ['drama'],
};

export const testMovieMap1: MovieMap = fromJS(testMovie1);

export const testMovieMap2: MovieMap = fromJS(testMovie2);

export const testMovieMap3: MovieMap = fromJS(testMovie3);

export const testMoviesData: MoviesData = fromJS([testMovie1, testMovie2]);

export const testMovieResponse: MoviesResponse = fromJS({
  data: testMoviesData,
  total: 5,
  offset: 5,
  limit: 5,
});

export const testBodyReducerData = {
  moviesResponse: {},
};
export const testSearchReducerData = {
  searchString: '',
  searchBy: 'genres',
  sortBy: 'vote_average',
};

export const testInitialState: State = fromJS({
  bodyReducer: testBodyReducerData,
  searchReducer: testSearchReducerData,
});

export const testEmptyInitialState: State = fromJS({
  bodyReducer: {
    data: testMoviesData,
    total: 2,
    offset: 5,
    limit: 5,
  },
  searchReducer: testSearchReducerData,
});

export const testNextState: State = fromJS({
  moviesResponse: testMovieResponse,
});
