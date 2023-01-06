import { Link } from 'react-router-dom';
import styles from './css/headercocina.module.css';
import logoreturn from './imagenes/logohome.png';
import logo from './imagenes/logo_transparent.png';

const HeaderCocina = () => {
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

export default HeaderCocina;
