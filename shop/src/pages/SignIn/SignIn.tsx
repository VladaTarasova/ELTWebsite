import { SignInForm } from 'features/auth/ui/SignIn/SignInForm';
import React from 'react';
import styles from './SignIn.module.scss';

export const SignIn: React.FC = () => (
  <div className={styles.signIn}>
    <SignInForm />
  </div>
);
