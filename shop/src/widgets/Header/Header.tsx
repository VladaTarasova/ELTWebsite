import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { router } from 'shared/lib/dom/router';

export const Header = () => {

  return (
      <header className={styles.header}>
        <div className="container">
            <nav className={styles.header__nav}>
                <div className={styles.header__logo}>
                <img src="./static/img/logo.png" alt="logo icon"></img>
                    <div className={styles.header__name}>
                        ELT
                    </div>
                </div>
                <ul className={styles.header__list}>
                    <li className={styles.header__item}>
                        <Link to={router.catalog}>
                            Каталог
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link to={router.shops}>
                            Магазины
                        </Link>
                    </li>
                </ul>
                <div className={styles.header__buttons}>
                        <Link to={router.profile}>
                            <img src="./static/img/profile.svg" alt="profile icon"></img>
                        </Link>
                        <Link to={router.bag}>
                            <img src="./static/img/bag.svg" alt="bag icon"></img>
                        </Link>
                </div>
            </nav>
        </div>    
      </header>
  );
};