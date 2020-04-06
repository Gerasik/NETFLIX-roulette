import React, { useEffect, FunctionComponent } from 'react';

import MovieCard from 'components/MovieCard';
import styles from './style.module.scss';
import { BodyProps } from './models';

const Body: FunctionComponent<BodyProps> = ({ setData, moviesData }) => {
  useEffect(() => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=6')
      .then(response => response.json())
      .then(response => {
        setData(response);
      });
  }, [setData]);

  return (
    <ul className={styles['movie-list']}>
      {moviesData.map(item => (
        <li key={item.get('id')} className={styles['movie-item']}>
          <MovieCard data={item} />
        </li>
      ))}
    </ul>
  );
};

export default Body;
