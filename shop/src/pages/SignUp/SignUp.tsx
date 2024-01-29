import { SignUpForm } from 'features/auth/ui/SignUp/SignUpForm';
import React from 'react';
import styles from './SignUp.module.scss';

export const SignUp: React.FC = () =>
    <div className={styles.signUp}>
        <SignUpForm />
    </div>;
