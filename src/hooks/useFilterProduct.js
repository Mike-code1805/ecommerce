import { useEffect, useState } from 'react';
import { productApi } from '../api/productApi';

export const useFilterProduct = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getProducts = async () => {
    try {
      const products = await productApi.get(
        'https://fakestoreapi.com/products'
      );
      mapFilterProduct(products.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const mapFilterProduct = (products) => {
    setProducts(products);
    setIsFetching(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isFetching,
  };
};
