import React from 'react';
import styles from './css/home.module.css';
import logo from './imagenes/logo_transparent.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className={styles.homecontainer}>
      <figure className={styles.logo}>
        <img src={logo} alt='logo home' className={styles.imglogo} />
      </figure>
      <section className={styles.sectionbuttons}>
        <div className={styles.buttons}>
          <Link to='/pedido' className={styles.buttonpedido}>
            Pedido
          </Link>
          <Link to='/cocina' className={styles.buttoncocina}>
            Cocina
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
