import styles from './Footer.module.scss';

export const Footer = () => {

  return (
      <footer className={styles.footer}>
          <div className="container">
           <div className={styles.footer__top}>
                <div className={styles.footer__mail}>
                    <a href="mailto:contact@elt.com">
                        <img className={styles.footer__img} src="./static/img/mail.svg" alt="mail icon"></img>
                        contact@elt.com 
                    </a>   
                </div>
                <div className={styles.footer__social}>
                   <ul className={styles.footer__list}>
                    <li>
                    <a href="mailto:contact@elt.com">
                            <img src="./static/img/telegram.svg" alt="telegram icon"></img>
                        </a>   
                    </li>
                    <li>
                    <a href="mailto:contact@elt.com">
                            <img src="./static/img/whatsapp.svg" alt="whatsapp icon"></img>
                        </a> 
                        </li>  
                    <li>
                    <a href="mailto:contact@elt.com">
                            <img src="./static/img/vk.svg" alt="vk icon"></img>
                        </a>  
                        </li> 
                   </ul>
                </div>
                <div className={styles.footer__phone}>
                    <a href="phone:88430005577">
                        <img className={styles.footer__img} src="./static/img/phone.svg" alt="phone icon"></img>
                        8 (843) 000-55-77
                    </a>   
                </div>
           </div>
           <div className={styles.footer__bottom}>
                <div className={styles.footer__copyright}>
                    &copy; ELT Все права защищены.
               </div>
           </div>
        </div>    
      </footer>
  );
};
