import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import styles from './styles.module.css';
import { Navbar } from '../header/Navbar';
import { Footer } from '../footer/Footer';

export const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            className={styles.image}
            src='https://assets.stickpng.com/images/580b57fbd9996e24bc43bf27.png'
            alt=''
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Título del producto</h1>
          <p className={styles.desc}>Descripción del producto</p>
          <span className={styles.price}>S/ 10.00</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Id:</span>
              fnawjfnhew124512461
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Dimensiones:</span>
              Dimensiones
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <RemoveOutlinedIcon />
              <span className={styles.amount}>1</span>
              <AddOutlinedIcon />
            </div>
            <button className={styles.button}>Poner al carrito</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
