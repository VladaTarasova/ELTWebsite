import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';

export const Layout = () => (
    <>
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
    </>
);
