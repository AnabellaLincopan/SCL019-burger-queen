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
        <button>Enviar</button>
      </div>
    </section>
  );
};

export default Total;
