import styles from './styles.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img
            alt=''
            src={require('../../assets/logo.png')}
            className={styles.image}
          />
          <h1 className={styles.logo}>ECOMMERCE APP</h1>
        </div>
        <div className={styles.center}>
          <div
            className={styles.menuItem}
            onClick={() => navigate('/api/products')}
          >
            PRODUCTOS
          </div>
          <Link className={styles.menuItem} to={'/api/aboutus'}>
            ACERCA DE
          </Link>
          <div className={styles.menuItem}>REGISTRO</div>
          <div className={styles.menuItem}>INICIAR SESION</div>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>
            <Badge badgeContent={3} color='primary' overlap='rectangular'>
              <AddShoppingCartIcon fontSize='large' />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
