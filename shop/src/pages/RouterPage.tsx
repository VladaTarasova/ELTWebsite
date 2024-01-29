import { router } from 'shared/lib/dom/router';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Contacts } from './Contacts/Contacts';
import { Layout } from 'widgets/Layout';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { Catalog } from './Catalog/Catalog';
import { Header } from 'widgets/Header/Header';
import { Footer } from 'widgets/Footer/Footer';
import { Profile } from './Profile/Profile';

export const RouterPage = () => (
  <Routes>
    <Route element={<Header />}></Route>
    <Route element={<Layout />}>
      <Route path='/' element={<Navigate to={router.signIn} />} />
      <Route path={router.contacts} element={<Contacts />} />
      <Route path={router.signIn} element={<SignIn />} />
      <Route path={router.signUp} element={<SignUp />} />
      <Route path={router.catalog} element={<Catalog />} />
      <Route path={router.profile} element={<Profile />} />
    </Route>
    <Route element={<Footer />}></Route>
  </Routes>
);
