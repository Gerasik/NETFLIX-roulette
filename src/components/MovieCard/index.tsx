import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import styles from './style.module.scss';
import { MovieCardProps } from './models';

const MovieCard: FunctionComponent<MovieCardProps> = ({ data }) => {
  const title = data.get('title');
  const posterPath = data.get('poster_path');
  const releaseDate = data.get('release_date');
  const genresUniq = _.uniq(data.get('genres').toArray());
  const id = data.get('id');

  return (
    <div className={styles.item}>
      <img src={posterPath} alt={title} className={styles.image} />
      <div className={styles.container}>
        <Link to={`/film/${id}`} className={styles.title}>
          {title}
        </Link>
        <span className={styles.date}>{new Date(releaseDate).getFullYear()}</span>
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
