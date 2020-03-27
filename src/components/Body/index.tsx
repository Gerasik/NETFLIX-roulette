import React, { useState, useEffect } from 'react';

import { Movie } from '../../models';
import MovieCard from '../MovieCard';
import styles from './style.module.scss';

interface HTMLUListElementScroll extends HTMLUListElement {
  event: { taget: { scrollTop: number } };
}

const Body = ({ bodyReducer, setData }: any) => {
  const [data, setaData]: [Array<Movie>, Function] = useState([]);
  useEffect(() => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=6')
      .then(response => response.json())
      .then(response => {
        setaData(response.data);
        setData(response);
      });
  }, [setData]);

  function addMovie(): void {
    fetch('https://reactjs-cdp.herokuapp.com/movies?offset=6&limit=6')
      .then(response => response.json())
      .then(response => {
        const newData = [...data, ...response.data];
        setData(newData);
      });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore:line
  const onScrollList = event => {
    if (event.target.offsetHeight < window.scrollY + window.innerHeight) {
      console.log('load content');
    }
  };
  return (
    <ul className={styles['movie-list']} onWheel={event => onScrollList(event)}>
      {data.map((item: Movie) => (
        <MovieCard key={item.id} data={item} />
      ))}
      <button type="button" onClick={addMovie}>
        Add
      </button>
    </ul>
  );
};

export default Body;
