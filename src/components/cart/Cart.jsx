import { useDispatch, useSelector } from "react-redux";
import { restCart } from "../../context/cart";
import { SingleCart } from "./SingleCart";
import "./style.css";

export const Cart = () => {
  const { total, products } = useSelector((state) => state.cart);
  console.log({ products });
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(restCart());
  };

  return (
    <div className="containerCart">
      <div className="CartContainer">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <button className="Action" onClick={handleReset}>
            Remove all
          </button>
        </div>
        {products.map((prod, index) => (
          <SingleCart key={index} product={prod} />
        ))}

        <hr />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">{products.length} items</div>
            </div>
            <div className="total-amount">S/ {total}</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
