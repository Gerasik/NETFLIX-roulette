import React from 'react';
import styles from './style.module.scss';

export default function Search() {
  return (
    <>
      <p className={styles.lable}>find your movie</p>
      <div className={styles['search-form']}>
        <input type="text" placeholder="Search" />
        <button type="button">search</button>
      </div>
      <div className={styles['search-by']}>
        <span>search by</span>
        <button type="button" className={`${styles['by-title']} ${styles.active}`}>
          title
        </button>
        <button type="button" className={styles['by-gengre']}>
          gengre
        </button>
      </div>
    </>
  );
}
