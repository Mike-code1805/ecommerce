import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../card/Card';
import styles from './styles.module.css';

export const Cards = () => {
  const [products, setProducts] = useState([]);
  const count = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  console.log(count);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // console.log(products);
  return (
    <div className={styles.container}>
      {products.map(({ id, title, image }, index) => (
        <Card key={index} id={id} title={title} image={image} />
      ))}
    </div>
  );
};
