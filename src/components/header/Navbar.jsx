import styles from './styles.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left} onClick={() => navigate('/')}>
          <img
            alt=''
            src={require('../../assets/logo.png')}
            className={styles.image}
          />
          <h1 className={styles.logo}>ECOMMERCE APP</h1>
        </div>
        <div className={styles.center}>
          {routes.map((data, index) => (
            <Link key={index} className={styles.menuItem} to={data.path}>
              {data.name}
            </Link>
          ))}
          {/* <div className={styles.menuItem}>PRODUCTOS</div>
          <div className={styles.menuItem}>ACERCA DE</div>
          <div className={styles.menuItem}>REGISTRO</div>
          <div className={styles.menuItem}>INICIAR SESION</div> */}
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>
            <Badge
              badgeContent={quantity}
              color='primary'
              overlap='rectangular'
            >
              <AddShoppingCartIcon fontSize='large' />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
