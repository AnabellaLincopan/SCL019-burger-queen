import Headerpedido from '../headerpedido';
import Menu from './menu';
import Orden from './orden';
import styles from '../css/pedido.module.css';
// import style from '../css/pedido.module.css'

const Pedido = () => {
  return (
    <section>
      <Headerpedido />
      <section className={styles.body}>
        <div>
          <p className={styles.titles}>Menú</p>
          <Menu />
        </div>
        <div>
          <p className={styles.titles}>Orden</p>
          <Orden />
        </div>
      </section>
    </section>
  );
};

export default Pedido;

