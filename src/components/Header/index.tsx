/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { useHistory, Link } from 'react-router-dom';
import Logo from 'components/Logo';
import styles from './style.module.scss';
import headerIMG from '../../assets/header_background.jpg';

const Header: FunctionComponent = ({ children }) => {
  const history = useHistory();
  const arr = history.location.pathname.split('/');

  return (
    <div className={styles['header-background']}>
      <img src={headerIMG} alt="posters" className={styles['background-image']} />
      <nav className={styles['header-nav']}>
        <Logo />
        {!arr.some(item => item === 'search') ? (
          <button onClick={() => history.goBack()} className={styles['search-icon']} />
        ) : null}
      </nav>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Header;
