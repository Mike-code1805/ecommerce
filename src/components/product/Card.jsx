import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import styles from "./styles.module.css";
import { Title } from "./Title";
import { Buttons } from "./Buttons";
import { Image } from "./Image";
import { useDispatch } from "react-redux";
import { addCart, restCart } from "../../context/cart";
import { useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Title title={product.title} />
      <Image img={product.image} />
      <div className={styles.info}>
        <Buttons
          children={<RestartAltOutlinedIcon />}
          funcOnClick={() => dispatch(restCart())}
        />
        <Buttons
          children={<ListAltOutlinedIcon />}
          funcOnClick={() => navigate(`api/products/${product.id}`)}
        />
        <Buttons
          children={<AddShoppingCartIcon />}
          funcOnClick={() => dispatch(addCart({ ...product, quantity: 1 }))}
        />
      </div>
    </div>
  );
};
