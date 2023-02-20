import { Card } from "../product/Card";
import { Loading } from "../loading/Loading";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { publicApi } from "../../api/productApi";

export const Cards = () => {
  // const { isFetching, products } = useProducts();
  const [products, setproducts] = useState([]);
  const [isFetching, setisFetching] = useState(true);
  const [seterrorMessage] = useState(false);
  useEffect(() => {
    const getPorducts = async () => {
      try {
        const products = await publicApi.get("/api/product");
        setproducts(products.data);
        setisFetching(false);
      } catch (error) {
        seterrorMessage(true);
      }
    };
    getPorducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ products });

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
