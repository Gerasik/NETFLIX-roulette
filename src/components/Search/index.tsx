import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const Search: FunctionComponent = () => {
  return (
    <>
      <p className={styles.label}>find your movie</p>
      <div className={styles['search-form']}>
        <input type="text" placeholder="Search" className={styles['search-text']} />
        <button type="button" className={styles['search-button']}>
          search
        </button>
      </div>
      <div className={styles['search-by']}>
        <span>search by</span>
        <button type="button" className={classNames(styles['by-title'], { [styles.active]: true })}>
          title
        </button>
        <button
          type="button"
          className={classNames(styles['by-genre'], { [styles.active]: false })}
        >
          genre
        </button>
      </div>
    </>
  );
};

export default Search;
