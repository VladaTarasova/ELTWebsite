import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { router } from 'shared/lib/dom/router';
import styles from './Profile.module.scss';

export const Profile: React.FC = () => {

  return (
    <div className={styles.profile}>
        <div className="container">
          <nav className={styles.profile__nav}>
            <Link to={router.signIn}>
                <button className={styles.profile__nav_btn}>
                    Выйти
                    <img src="./static/img/log-out.svg" alt="log out icon"></img>
                </button>
            </Link>
          </nav>
          <div className={styles.profile__box}>
              <div className={styles.profile__box_inner}>
                  <form className={styles.profile__form} action="">
                  <div className={styles.profile__inputs}> 
                  <div>
                    <label className={styles.profile__box_label} htmlFor="oldPassword">
                            Старый пароль
                        </label>
                        <input 
                                className={styles.profile__box_input}
                                id="oldPassword"
                                name="oldPassword"
                                type="password"
                            />
                   </div>
                   <div>
                    <label className={styles.profile__box_label} htmlFor="newPassword">
                            Новый пароль
                        </label>
                        <input 
                                className={styles.profile__box_input}
                                id="newPassword"
                                name="newPassword"
                                type="password"
                            />
                   </div>
                   <div>
                    <label className={styles.profile__box_label} htmlFor="repeatPassword">
                            Повторите пароль
                        </label>
                        <input 
                                className={styles.profile__box_input}
                                id="repeatPassword"
                                name="repeatPassword"
                                type="password"
                            />
                   </div>
                  </div>
                  <div className={styles.profile__box_button}>
                  <input 
                        className={styles.profile__box_btn} 
                        type="submit" 
                        value="Сохранить" 
                    />
                  </div>
                  </form>
              </div>
          </div>
          <div className={styles.profile__box}>
              <div className={styles.profile__box_inner}>
                  <form className={styles.profile__form} action="">
                  <div className={styles.profile__inputs}> 
                  <div>
                    <label className={styles.profile__box_label} htmlFor="fio">
                            ФИО
                        </label>
                        <input 
                                className={styles.profile__box_input}
                                id="fio"
                                name="fio"
                                type="text"
                                value="Тарасова Влада Алексеевна"
                            />
                   </div>
                   <div>
                    <label className={styles.profile__box_label} htmlFor="phone">
                            Телефон
                        </label>
                        <input 
                                className={styles.profile__box_input}
                                id="phone"
                                name="phone"
                                type="phone"
                                value="89395247192"
                            />
                   </div>
                   <div>
                    <label className={styles.profile__box_label} htmlFor="address">
                            Адрес
                        </label>
                        <input 
                                className={styles.profile__box_input}
                                id="address"
                                name="address"
                                type="text"
                                value="РФ, г.Казань, ул.Московская, д.9, кв.203"
                            />
                   </div>
                  </div>
                  <div className={styles.profile__box_button}>
                  <input 
                        className={styles.profile__box_btn} 
                        type="submit" 
                        value="Сохранить" 
                    />
                  </div>
                  </form>
              </div>
          </div>
        </div>
    </div>
  )
}
