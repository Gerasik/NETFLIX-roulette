import React, { useState, useEffect, FunctionComponent } from 'react';

import { Movie, Action, State, MoviesResponse } from 'models';
import MovieCard from 'components/MovieCard';
import styles from './style.module.scss';

// add /*bodyReducer,*/ hire
const Body: FunctionComponent<{ setData: Action; bodyReducer: MoviesResponse }> = ({
  setData,
  bodyReducer,
}) => {
  // const [data, setaData]: [Array<Movie>, Function] = useState([]);

  console.log(bodyReducer);

  useEffect(() => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=6')
      .then(response => response.json())
      .then(response => {
        // setaData(response.data);
        setData(response);
      });
  }, [setData]);

  // function addMovie(): void {
  //   fetch('https://reactjs-cdp.herokuapp.com/movies?offset=6&limit=6')
  //     .then(response => response.json())
  //     .then(response => {
  //       const newData = [...data, ...response.data];
  //       // setData(newData);
  //       console.log(newData);
  //     });
  // }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore:line
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const onScrollList = event => {
  //   if (event.target.offsetHeight < window.scrollY + window.innerHeight) {
  //     window.console.log('load content');
  //   }
  // };

  return (
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    // onWheel={event => onScrollList(event)}
    <ul className={styles['movie-list']}>
      {bodyReducer.data.map((item: Movie) => (
        <li key={item.id} className={styles['movie-item']}>
          <MovieCard data={item} />
        </li>
      ))}
      {/* <button type="button" onClick={addMovie}>
        Add
      </button> */}
    </ul>
  );
};

export default Body;
