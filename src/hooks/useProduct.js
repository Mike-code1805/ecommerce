import { useEffect, useState } from "react";
import { productApi } from "../api/productApi";
import { useCounter } from "./useCounter";

// Your hook
export const useProduct = ({ id }) => {
  const { counter, increaseBy } = useCounter({ minValue: 1, maxValue: 10 });
  const [product, setproduct] = useState({});
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await productApi.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setproduct(response.data);
        setisFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);
  return {
    counter,
    product,
    isFetching,
    increaseBy,
  };
};
