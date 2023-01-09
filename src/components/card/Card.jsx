import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { useCounter } from '../../hooks/useCounter';
import styles from './styles.module.css';

export const Card = () => {
  const { counter, increaseBy } = useCounter({ minValue: 2, maxValue: 5 });

  return (
    <div className={styles.container}>
      <span className={styles.productTitle}>Hola Tittulo {counter}</span>

      <img
        alt=''
        src='https://imagenpng.com/wp-content/uploads/2015/03/Dragon-Ball-Z-Png.png'
        className={styles.image}
      />
      <div className={styles.info}>
        <div className={styles.icon} onClick={() => increaseBy(-1)}>
          <RemoveIcon />
        </div>
        <div className={styles.icon} onClick={() => increaseBy(+1)}>
          <AddIcon />
        </div>
        <div className={styles.icon}>
          <AddShoppingCartIcon />
        </div>
      </div>
    </div>
  );
};
