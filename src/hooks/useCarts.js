import { useEffect, useState } from 'react';

export const useCarts = (initialValue = { idProduct: '' }) => {
  const [carts, setCarts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isFetchingProduc, setIsFetchingProduc] = useState(true);
  const [actualProd, setActualProd] = useState({});

  const getCarts = async () => {
    try {
      await fetch(`https://fakestoreapi.com/carts/user/${2}`)
        .then((res) => res.json())
        .then((json) => setCarts(json));
      setIsFetching(false);
    } catch (error) {}
  };

  const getSingleProduct = async (idValue) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${idValue}`)
        .then((res) => res.json())
        .then((json) => setActualProd(json));
      setIsFetchingProduc(false);
    } catch (error) {}
  };

  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    console.log(initialValue.idProduct);
    if (initialValue.idProduct === '') return;
    getSingleProduct(initialValue.idProduct);
  }, [initialValue.idProduct]);

  return {
    carts,
    isFetching,
    actualProd,
    isFetchingProduc,
    getSingleProduct,
  };
};
