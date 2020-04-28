import React, { FunctionComponent, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';

import { Action } from 'containers/Search/models';
import styles from './style.module.scss';
import { SearchProps } from './models';

const Search: FunctionComponent<SearchProps> = ({
  searchData,
  changeSearchString,
  changeSearchBy,
  setStartData,
}) => {
  const { searchBy } = searchData;
  const { str } = useParams();
  const inputEl = useRef(document.createElement('input'));

  useEffect(() => {
    const data = str ? String(str) : '';
    setTimeout(() => {
      changeSearchString(data);
      inputEl.current.value = data;
      setStartData();
    }, 100);
  }, [str]);

  function handleClickSearch(): void {
    setStartData();
  }

  function handleChangeSearch(event): void {
    const searchString = event.target.value;
    changeSearchString(searchString);
    const href =
      window.location.href.slice(-6) === 'search' ? `search/${searchString}` : searchString;

    window.history.pushState(null, '', href || '/search');
    setStartData();
  }

  function debounceEvent(...arg) {
    const fn = arg[0];
    const debounceEvent = debounce(fn, 500);
    return e => {
      e.persist();
      return debounceEvent(e);
    };
  }

  return (
    <>
      <p className={styles.label}>find your movie</p>
      <div className={styles['search-form']}>
        <input
          ref={inputEl}
          type="text"
          placeholder="Search"
          className={styles['search-text']}
          onChange={debounceEvent(handleChangeSearch)}
        />
        <button type="button" className={styles['search-button']} onClick={handleClickSearch}>
          search
        </button>
      </div>
      <div className={styles['search-by']}>
        <span>search by</span>
        <button
          type="button"
          className={classNames(styles['by-title'], { [styles.active]: searchBy === 'title' })}
          onClick={(): Action.ChangeSearchBy => changeSearchBy('title')}
        >
          title
        </button>
        <button
          type="button"
          className={classNames(styles['by-genre'], { [styles.active]: searchBy === 'genres' })}
          onClick={(): Action.ChangeSearchBy => changeSearchBy('genres')}
        >
          genre
        </button>
      </div>
    </>
  );
};

export default Search;
