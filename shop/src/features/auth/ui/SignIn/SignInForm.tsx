import React, { useState } from 'react';
import { useAppDispatch } from 'app/store/redux';
import { logIn } from 'entities/user/model';
import { ApiError } from 'shared/api/error';
import styles from './SignInForm.module.scss';
import { IAuth } from '../../lib';
import { IError } from 'shared/api/types';
import { Link, useNavigate } from 'react-router-dom';
import { router } from 'shared/lib/dom/router';

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = async () => {
    try {
      // dispatch(logIn(user));
      navigate(router.catalog);
    } catch (e) {
      ApiError(e as IError);
    }
  };

  return (
    <article className={styles.widget}>
      <h1 className={styles.widget__heading}>Авторизация</h1>
      <form 
        onSubmit={onFinish} 
        action=""
        className={styles.widget__form}
      >
        <input 
            className={styles.widget__input}
            name="email"
            onChange={(e) => setEmail(e.target.value)} 
            type="text"
            placeholder="Email"
        />
        <input 
            className={styles.widget__input}
            name="password"
            onChange={(e) => setPassword(e.target.value)} 
            type="password"
            placeholder="Пароль"
        />
       <div  className={styles.widget__buttons}>
       <input 
            className={styles.widget__button_auth} 
            type="submit" 
            value="Войти" 
        />
        <Link to={router.signUp}><button className={styles.widget__button_reg}>Создать аккаунт</button></Link>
       </div>
      </form>
    </article>
  );
};
