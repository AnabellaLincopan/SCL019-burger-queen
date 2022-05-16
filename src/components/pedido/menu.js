import React, { useContext, useState } from 'react';
import data from '../data/menu.json';
import { Context } from './context';
import styles from '../css/menu.module.css';

// botones de menú y filtrado por tipo de producto

const Menu = () => {
  const menuData = data.carta;
  const context = useContext(Context);
  const button = menuData.filter((e) => e.type === 'Bebestibles');
  const [product, setProduct] = useState(button);
  // const [order, setOrder] = useState([]);

  // const changeClick = (name, price) => {
  //   setOrder([...order, {name, price}]);
  // }

  // funcion filtrado
  const filterMenu = (option) => {
    setProduct(menuData.filter((e) => e.type === option));
  };

  return (
    <section className={styles.boxmenu}>
      <section className={styles.boxclient}>
        <p>Nombre:</p>
        <input
          className={styles.inputmenu}
          name='name'
          type='text'
          value={context.name}
          onChange={context.dataclient}
        ></input>
        <p>N° mesa:</p>
        <input
          className={styles.inputmenu}
          name='table'
          type='text'
          value={context.table}
          onChange={context.dataclient}
        ></input>
      </section>
      <nav className={styles.buttons}>
        <button
          onClick={() => filterMenu('Bebestibles')}
          className={styles.buttonbebestibles}
        >
          Bebestibles
        </button>
        <button
          onClick={() => filterMenu('Pasteles')}
          className={styles.buttonpasteles}
        >
          Pasteles
        </button>
        <button
          onClick={() => filterMenu('Sándwiches')}
          className={styles.buttonsandwiches}
        >
          Sándwiches
        </button>
      </nav>
      <section className={styles.boxcarta}>
        {product.map((item) => (
          <div key={item.id}>
            <button
              className={styles.productos}
              onClick={() => context.increase(item)}
            >
              <p className={styles.namecarta}>{item.name}</p>
              <p>$ {item.price}</p>
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Menu;
