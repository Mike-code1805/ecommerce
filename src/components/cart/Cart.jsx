import { useSelector } from 'react-redux';
import './style.css';

export const Cart = () => {
  const { products, quantity, total } = useSelector((state) => state.cart);
  console.log({ products });
  return (
    <div className='containerCart'>
      <div className='CartContainer'>
        <div className='Header'>
          <h3 className='Heading'>Shopping Cart</h3>
          <h5 className='Action'>Remove all</h5>
        </div>
        {products.map((prod, index) => (
          <div key={index} className='Cart-Items'>
            <div className='image-box'>
              <img alt='' src={prod.image} className='image' />
            </div>
            <div className='about'>
              <h1 className='title'>{prod.title}</h1>
              <h3 className='subtitle'>{prod.description}</h3>
            </div>
            <div className='counter'>
              <div className='btn'>+</div>
              <div className='count'>2</div>
              <div className='btn'>-</div>
            </div>
            <div className='prices'>
              <div className='amount'>S/ {prod.price}</div>
              <div className='save'>
                <u>Save for later</u>
              </div>
              <div className='remove'>
                <u>Remove</u>
              </div>
            </div>
          </div>
        ))}

        <hr />
        <div className='checkout'>
          <div className='total'>
            <div>
              <div className='Subtotal'>Sub-Total</div>
              <div className='items'>{quantity} items</div>
            </div>
            <div className='total-amount'>S/ {total}</div>
          </div>
          <button className='button'>Checkout</button>
        </div>
      </div>
    </div>
  );
};
