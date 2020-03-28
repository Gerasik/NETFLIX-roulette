import { FunctionComponent } from 'react';
import Immutable from 'immutable';

export interface ActionInterface {
  type: string;
  payload: MoviesResponse;
}

export type Action<D = MoviesResponse> = (data: D) => ActionInterface;

export type Reducer<S, A = ActionInterface> = (state: S, action: A) => S;

export type State = Immutable.Map<string, MoviesResponse>;

export type Movie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: Array<string>;
};

export type MoviesResponse = {
  data: Array<Movie>;
  total: number;
  offset: number;
  limit: number;
};

export type ErrorBoundaryProps = {
  children: FunctionComponent;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
