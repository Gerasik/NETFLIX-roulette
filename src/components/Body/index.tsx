import React, { useEffect, FunctionComponent } from 'react';
import classNames from 'classnames';

import { Action } from 'containers/Search/models';
import MovieCard from 'components/MovieCard';
import styles from './style.module.scss';
import { BodyProps } from './models';

const Body: FunctionComponent<BodyProps> = ({ setData, moviesData, changeSortBy }) => {
  const { data, total, sortBy } = moviesData;

  useEffect(() => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=6')
      .then(response => response.json())
      .then(response => {
        setData(response);
      });
  }, [setData]);

  return (
    <div className={styles['movie-container']}>
      <header className={styles['movie-header']}>
        <span className={styles['movie-count']}>{total ? `${total} movie found` : ''}</span>
        <div className={styles['movie-buttons']}>
          <span>sort by</span>
          <button
            type="button"
            className={classNames(styles['sort-release'], {
              [styles.active]: sortBy === 'release_date',
            })}
            onClick={(): Action.CHANGE_SORT_BY => changeSortBy('release_date')}
          >
            release date
          </button>
          <button
            type="button"
            className={classNames(styles['sort-rating'], {
              [styles.active]: sortBy === 'vote_average',
            })}
            onClick={(): Action.CHANGE_SORT_BY => changeSortBy('vote_average')}
          >
            rating
          </button>
        </div>
      </header>
      <ul className={styles['movie-list']}>
        {data.map(item => (
          <li key={item.get('id')} className={styles['movie-item']}>
            <MovieCard data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
