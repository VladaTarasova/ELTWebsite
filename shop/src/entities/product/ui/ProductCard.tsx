import styles from './ProductCard.module.scss';
import React from 'react';

export interface IProduct {
    title: string;
    image: string;
    desc: string;
    price: number;
  }
  

export const ProductCard: React.FC<IProduct> = ({ image, title, desc, price}) => (
    <div className={styles.productCard}>
        <div className={styles.productCard__img}>
                <img src={image} alt=""/>
        </div>
        <h2 className={styles.productCard__heading}>{title}</h2>
        <p className={styles.productCard__desc}>{desc}</p>
        <div className={styles.productCard__bottom}>
            <span className={styles.productCard__price}>{price} р.</span>
            <button className={styles.productCard__button}>Добавить</button>
        </div>
    </div>
)
