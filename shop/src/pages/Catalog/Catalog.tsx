import { IProduct, ProductCard } from 'entities/product/ui/ProductCard';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Catalog.module.scss';

interface IProductResponse extends IProduct {
  id: string;
}

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<IProductResponse[] | null>(null);

  useEffect(() => {
    try {
      (async () => {
        console.log(true);
        
        const response = await fetch('./db/products.json');
        const result = await response.json()
        setProducts(result as IProductResponse[])
      })()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className={styles.catalog}>
        <div className="container">
          <nav className={styles.catalog__nav}>
          <button className={styles.catalog__nav_btn}>
              Фильтры
              <img src="./static/img/click.svg" alt="click icon"></img>
            </button>
            <div className={styles.catalog__left}>
            <div className={styles.catalog__box}>
                  <div className={styles.catalog__box_inner}>
                   <form action="">
                   <div className={styles.catalog__box_item}>
                    <h6 className={styles.catalog__box_heading}>Цена (руб.)</h6>
                        <input 
                          className={styles.catalog__box_input}
                          name="price"
                          type="number"
                        />
                        <span className={styles.catalog__box_dash}>-</span>
                        <input 
                          className={styles.catalog__box_input}
                          name="price"
                          type="number"
                        />
                   </div>
                      <div className={styles.catalog__box_item}> 
                        <label className={styles.catalog__box_label} htmlFor="available">
                        <input 
                            className={styles.catalog__box_input}
                            id="available"
                            name="available"
                            type="checkbox"
                        />
                          В наличии
                        </label>
                      </div>
                      <div className={styles.catalog__box_item}>
                        <h6 className={styles.catalog__box_heading}>Диаметр колеса</h6>
                        <div>
                          <label className={styles.catalog__box_label} htmlFor="wheelDiameter">
                          <input 
                              className={styles.catalog__box_input}
                              id="wheelDiameter"
                              name="20"
                              type="checkbox"
                          />
                            20"
                          </label>
                        </div>
                        <label className={styles.catalog__box_label} htmlFor="wheelDiameter">
                        <input 
                            className={styles.catalog__box_input}
                            id="wheelDiameter"
                            name="26"
                            type="checkbox"
                        />
                          26"
                        </label>
                      </div>
                      <div className={styles.catalog__box_item}>
                      <h6 className={styles.catalog__box_heading}>Максимальная скорость</h6>
                       <div>
                          <label className={styles.catalog__box_label} htmlFor="maxSpeed">
                          <input 
                              className={styles.catalog__box_input}
                              id="maxSpeed"
                              name="20"
                              type="checkbox"
                          />
                            20 км/ч
                          </label>
                       </div>
                        <label className={styles.catalog__box_label} htmlFor="maxSpeed">
                        <input 
                            className={styles.catalog__box_input}
                            id="maxSpeed"
                            name="25"
                            type="checkbox"
                        />
                          25 км/ч
                        </label>
                      </div>
                      <div className={styles.catalog__box_item}>
                        <h6 className={styles.catalog__box_heading}>Мощность двигателя</h6>
                        <div>
                          <label className={styles.catalog__box_label} htmlFor="enginePower">
                          <input 
                              className={styles.catalog__box_input}
                              id="enginePower"
                              name="240"
                              type="checkbox"
                          />
                            240 Вт
                          </label>
                        </div>
                        <label className={styles.catalog__box_label} htmlFor="enginePower">
                        <input 
                            className={styles.catalog__box_input}
                            id="enginePower"
                            name="250"
                            type="checkbox"
                        />
                          250 Вт
                        </label>
                      </div>
                      <div className={styles.catalog__box_item}>
                        <h6 className={styles.catalog__box_heading}>Аккумулятор (мАч)</h6>
                        <input 
                          className={styles.catalog__box_input}
                          name="battery"
                          type="number"
                        />
                        <span className={styles.catalog__box_dash}>-</span>
                        <input 
                          className={styles.catalog__box_input}
                          name="battery"
                          type="number"
                        />
                      </div>
                      <div className={styles.catalog__box_item}>
                        <h6 className={styles.catalog__box_heading}>Пробег на одном заряде</h6>
                        <div>
                          <label className={styles.catalog__box_label} htmlFor="mileagePerCharge">
                          <input 
                              className={styles.catalog__box_input}
                              id="mileagePerCharge"
                              name="100"
                              type="checkbox"
                          />
                            До 100 км
                          </label>
                        </div>
                        <label className={styles.catalog__box_label} htmlFor="mileagePerCharge">
                        <input 
                            className={styles.catalog__box_input}
                            id="mileagePerCharge"
                            name="50"
                            type="checkbox"
                        />
                          До 50 км
                        </label>
                      </div>
                      <div className={styles.catalog__box_item}>
                        <h6 className={styles.catalog__box_heading}>Вес</h6>
                        <div>
                          <label className={styles.catalog__box_label} htmlFor="weight">
                          <input 
                              className={styles.catalog__box_input}
                              id="weight"
                              name="15"
                              type="checkbox"
                          />
                            15 кг
                          </label>
                        </div>
                        <div>
                          <label className={styles.catalog__box_label} htmlFor="weight">
                          <input 
                              className={styles.catalog__box_input}
                              id="weight"
                              name="20"
                              type="checkbox"
                          />
                            20 кг
                          </label>
                        </div>
                        <div>
                          <label className={styles.catalog__box_label} htmlFor="weight">
                          <input 
                              className={styles.catalog__box_input}
                              id="weight"
                              name="25"
                              type="checkbox"
                          />
                            25 кг
                          </label>
                        </div>
                      </div>
                      <div className={styles.catalog__box_buttons}>
                          <input 
                            className={styles.catalog__box_btn_save} 
                            type="submit" 
                            value="Применить" 
                          />
                           <input 
                            className={styles.catalog__box_btn_reset} 
                            type="reset" 
                            value="Сбросить" 
                          />
                      </div>
                   </form>
                  </div>
                </div>
            </div>
           <div>
            </div>
          {/* <div className={styles.catalog__nav_right}>
            <button className={styles.catalog__nav_btn}>
                Категории
                <img src="./static/img/click.svg" alt="click icon"></img>
            </button>
          <div className={styles.catalog__right}>
            <div className={styles.catalog__box}>
              <div className={styles.catalog__box_inner}>
                <h6 className={styles.catalog__box_heading}>Электровелосипеды</h6>
                <h6 className={styles.catalog__box_heading}>Электросамокаты</h6>
                <h6 className={styles.catalog__box_heading}>Электроскутеры</h6>
                <h6 className={styles.catalog__box_heading}>Электроскейты</h6>
                <h6 className={styles.catalog__box_heading}>Сегвеи</h6>
              </div>
            </div>
          </div>
          </div> */}
          </nav>
          <section className={styles.catalog__products}>
            {products && products.map(({id, image, title, desc, price}) => 
              <ProductCard key={id} image={image} title={title} desc={desc} price={price}  />
            )}
          </section>
        </div>
    </div>
  )
}
