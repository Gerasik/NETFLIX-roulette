// export type MovieCardData = {
//   id: number;
//   title: string;
//   genres: Array<string>;
//   poster_path: string;
//   release_date: Date;
// };

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
