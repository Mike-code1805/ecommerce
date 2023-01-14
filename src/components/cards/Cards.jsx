import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import styles from './styles.module.css';

export const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);
  return (
    <div className={styles.container}>
      {products.map(({ title, image }, index) => (
        <Card key={index} title={title} image={image} />
      ))}
    </div>
  );
};
