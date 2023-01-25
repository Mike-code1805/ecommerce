import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import styles from "./styles.module.css";
import { Navbar } from "../header/Navbar";
import { Footer } from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { useProduct } from "../../hooks/useProduct";

export const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const { counter, increaseBy, isFetching, product } = useProduct({ id: id });

  return (
    <div className={styles.container}>
      <Navbar />
      {isFetching ? (
        <div className="containerLoading">
          <Loading />
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src={product.image} alt="" />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.desc}>{product.description}</p>
            <span className={styles.price}>S/ {product.price}</span>
            <div className={styles.filterContainer}>
              <div className={styles.filter}>
                <span className={styles.filterTitle}>Id:</span>
                {product.id}
              </div>
              {/* <div className={styles.filter}>
            <span className={styles.filterTitle}>Dimensiones:</span>
            Dimensiones
          </div> */}
            </div>
            <div className={styles.addContainer}>
              <div className={styles.amountContainer}>
                <div onClick={() => increaseBy(-1)}>
                  <RemoveOutlinedIcon />
                </div>
                <span className={styles.amount}>{counter}</span>
                <div onClick={() => increaseBy(+1)}>
                  <AddOutlinedIcon />
                </div>
              </div>
              <button className={styles.button}>Poner al carrito</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
