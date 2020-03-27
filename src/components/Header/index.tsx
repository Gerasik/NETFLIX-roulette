import React, { FunctionComponentElement } from 'react';

import styles from './style.module.scss';
import headerIMG from '../../assets/header_background.jpg';
import Logo from '../Logo';

type HeaderProps = {
  children: FunctionComponentElement<null>;
};

const Header: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles['header-background']}>
      <img src={headerIMG} alt="posters" />
      <Logo />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
export default Header;
