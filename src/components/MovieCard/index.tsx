import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { Movie } from 'models';
import styles from './style.module.scss';

const MovieCard: FunctionComponent<{ data: Movie }> = ({ data }) => {
  const { title, genres, poster_path, release_date } = data;
  const genresUniq = _.uniq(genres);
  return (
    <div className={styles.item}>
      <img src={poster_path} alt={title} className={styles.image} />
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{new Date(release_date).getFullYear()}</span>
      </div>
      <div className={styles['genre-list']}>
        {genresUniq.map(item => {
          return (
            <span key={item} className={styles.genre}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
