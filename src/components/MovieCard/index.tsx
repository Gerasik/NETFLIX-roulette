import React from 'react';
import styles from './style.module.scss';

import { MovieCardData } from '../../models';

type MovieCardProps = {
  data: MovieCardData;
};

export default function MovieCard(props: MovieCardProps) {
  const { data } = props;
  const { title, genres, poster_path, release_date } = data;
  return (
    <li className={styles.item}>
      <img src={poster_path} alt={title} className={styles.image} />
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{new Date(release_date).getFullYear()}</span>
      </div>
      {genres.map((i, p) => {
        const keyId = p + 1;
        return (
          <span key={keyId} className={styles.gengre}>
            {i}
          </span>
        );
      })}
    </li>
  );
}
