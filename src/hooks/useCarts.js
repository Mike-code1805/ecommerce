import { useEffect, useState } from 'react';

export const useCarts = () => {
  const [carts, setCarts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getCarts = async () => {
    try {
      await fetch(`https://fakestoreapi.com/carts/user/${2}`)
        .then((res) => res.json())
        .then((json) => setCarts(json));
      setIsFetching(false);
    } catch (error) {}
  };

  useEffect(() => {
    getCarts();
  }, []);

  return {
    carts,
    isFetching,
    getCarts,
  };
};
