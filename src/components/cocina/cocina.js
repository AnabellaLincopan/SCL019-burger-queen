import HeaderCocina from '../headercocina';
// import Menu from './menu';
// import Orden from './orden';
import styles from '../css/cocinapedidos.module.css';
// import style from '../css/pedido.module.css'

const Cocina = () => {
  return (
    <section>
      <HeaderCocina />
      {/* <section className={styles.body}>
        <div>
          <p className={styles.titles}>Menú</p>
          <Menu />
        </div>
        <div>
          <p className={styles.titles}>Orden</p>
          <Orden />
        </div>
      </section> */}
    </section>
  );
};

export default Cocina;

