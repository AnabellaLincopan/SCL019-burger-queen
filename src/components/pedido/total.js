import React, { useContext } from 'react';
import { Context } from './context';
import styles from '../css/orden.module.css';

const Total = () => {
  const context = useContext(Context);

  return (
    <section className={styles.final}>
      <div className={styles.boxclient}>
        <p>Total:</p>
        <p>$ {context.total}</p>
      </div>
      <div>
        {context.product.length !== 0 && context.name.length !== 0 && context.table.length !==0 ? (
          <button
            onClick={() => {
              context.submitOrder();
              context.setProduct([]);
              context.setName('');
              context.setTable('');
              context.setCount(context.count + 1);
            }}
          >
            Enviar
          </button>
        ) : (
          <div>Ingrese datos y productos al carro</div>
        )}
      </div>
    </section>
  );
};

export default Total;
