import React, { FunctionComponentElement, useState, useEffect } from 'react';

import styles from './style.module.scss';
import MovieCard from '../MovieCard';
import { MovieCardData } from '../../models';

export default function Body(): FunctionComponentElement<null> {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=6')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setData(response.data);
      });
  }, []);
  return (
    <ul className={styles['movie-list']}>
      {data.map((item: MovieCardData) => (
        <MovieCard key={item.id} data={item} />
      ))}
    </ul>
  );
}
