import { useSelector } from "react-redux";
import { SingleCart } from "./SingleCart";
import "./style.css";

export const Cart = () => {
  const { total, products } = useSelector((state) => state.cart);

  console.log({ products });

  return (
    <div className="containerCart">
      <div className="CartContainer">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action">Remove all</h5>
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
