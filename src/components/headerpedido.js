import { Link } from 'react-router-dom';
import styles from './css/headerpedido.module.css';
import logoreturn from './imagenes/logohome.png';
import logo from './imagenes/logo_transparent.png';

const Headerpedido = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={logoreturn} alt='logo return' className={styles.logoreturn} />
      </Link>
      <img src={logo} alt='logomain' className={styles.mainlogo} />

      {/* <Link to='/terminado'>
            </Link> */}
    </header>
  );
};

export default Headerpedido;
