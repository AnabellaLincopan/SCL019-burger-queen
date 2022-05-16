import React, { useContext } from 'react';
import { Context } from './context';
import Total from './total';
import styles from '../css/orden.module.css';
// import AddInOrder from './item'

const Orden = () => {
  const context = useContext(Context);
  // const [product, setProduct] = useState ([]);
  return (
    <section className={styles.boxorden}>
      <div className={styles.boxclient}>
        <p>Cliente:</p>
        <p>{context.name}</p>
        <p>Mesa:</p>
        <p>{context.table}</p>
      </div>
      <section className={styles.boxproductos}>
        {context.product.map((item) => (
          <div key={item.id} className={styles.boxorder}>
            <div className={styles.productos}>
              <p className={styles.nameitem}>{item.name}</p>
              <p>$ {item.price}</p>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.symbols}
                onClick={() => context.decrease(item)}
              >
                {' '}
                -
              </button>
              <p className={styles.number}>{item.quant}</p>
              <button
                className={styles.symbols}
                onClick={() => context.increase(item)}
              >
                {' '}
                +
              </button>
              <button
                className={styles.symbols}
                onClick={() => context.remove(item)}
              >
                {' '}
                x
              </button>
            </div>
          </div>
        ))}
      </section>
      <Total />
    </section>
  );
};

export default Orden;
