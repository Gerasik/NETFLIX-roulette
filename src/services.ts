import * as Models from 'models';

export function fetchData(url: string): Promise<Models.MoviesResponse> {
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}
