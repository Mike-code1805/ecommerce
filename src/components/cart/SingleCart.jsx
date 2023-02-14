import "./style.css";

export const SingleCart = ({ product }) => {
  return (
    <div className="Cart-Items">
      <div className="image-box">
        <img
          alt=""
          src={product.image || require("../../assets/NotProductFound.png")}
          className="image"
        />
      </div>
      <div className="about">
        <h1 className="title">{product.title || "No title"}</h1>
        <h3 className="subtitle">{product.description || "No desc"}</h3>
      </div>
      <div className="counter">
        <div className="btn">+</div>
        <div className="count">{product.quantity}</div>
        <div className="btn">-</div>
      </div>
      <div className="prices">
        <div className="amount">S/ {product.price || "No price"}</div>
        <div className="save">
          <u>Save for later</u>
        </div>
        <div className="remove">
          <u>Remove</u>
        </div>
      </div>
    </div>
  );
};
