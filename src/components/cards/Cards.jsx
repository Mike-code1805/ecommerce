// import { useSelector } from 'react-redux';
import { useProducts } from '../../hooks/useProducts';
import { Card } from '../card/Card';
import { Loading } from '../loading/Loading';
import styles from './styles.module.css';

export const Cards = () => {
  const { isFetching, products } = useProducts();

  if (isFetching) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {products.map((prod, index) => (
        <Card key={index} product={prod} />
      ))}
    </div>
  );
};
