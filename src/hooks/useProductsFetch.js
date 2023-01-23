import { useEffect, useState } from 'react';

export const useProducts = (initialValue) => {
  const [products, setProducts] = useState(initialValue || []);
  const [isFetching, setIsFetching] = useState(true);

  const getProducts = async () => {
    try {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json));
      setIsFetching(false);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return {
    products,
    isFetching,
    getProducts,
  };
};
