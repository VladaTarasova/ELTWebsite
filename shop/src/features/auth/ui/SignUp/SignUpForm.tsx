import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import { ApiError } from 'shared/api/error';
import { IError } from 'shared/api/types';
import { IRegistration } from '../../lib';
import { Link, useNavigate } from 'react-router-dom';
import { router } from 'shared/lib/dom/router';


export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onFinish = async () => {
    try {
      if (!isChecked)
        return alert('Примите условия!');
      navigate(router.signIn);
    } catch (e) {
      ApiError(e as IError);
    }
  };

  return (
    <article className={styles.widget}>
       <h1 className={styles.widget__heading}>Регистрация</h1>
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
        <input 
            className={styles.widget__input}
            name="fio"
            onChange={(e) => setFio(e.target.value)} 
            type="text"
            placeholder="ФИО"
        />
        <input 
            className={styles.widget__input}
            name="phone"
            onChange={(e) => setPhone(e.target.value)} 
            type="text"
            placeholder="Телефон"
        />
        <input 
            className={styles.widget__input}
            name="address"
            onChange={(e) => setAddress(e.target.value)} 
            type="text"
            placeholder="Адрес"
        />
     
        <label className={styles.widget__label} htmlFor="condition">
        <input 
            className={styles.widget__condition}
            id="condition"
            name="condition"
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
        />
          Я согласен на обработку моих персональных данных
        </label>
       <div  className={styles.widget__buttons}>
       <input 
            className={styles.widget__button_reg} 
            type="submit" 
            value="Создать аккаунт" 
        />
        <Link to={router.signIn}><button className={styles.widget__button_auth}>Войти</button></Link>
       </div>
      </form>
    </article>
  );
};
