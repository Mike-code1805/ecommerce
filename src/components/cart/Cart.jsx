// import { useSelector } from 'react-redux';
import { useCarts } from '../../hooks/useCarts';
import { Loading } from '../loading/Loading';
import { SingleCart } from './SingleCart';
import './style.css';

export const Cart = () => {
  // const { products, quantity, total } = useSelector((state) => state.cart);
  const { carts, isFetching } = useCarts();

  console.log({ carts });

  if (isFetching) {
    return (
      <div className='containerLoading'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='containerCart'>
      <div className='CartContainer'>
        <div className='Header'>
          <h3 className='Heading'>Shopping Cart</h3>
          <h5 className='Action'>Remove all</h5>
        </div>
        {carts[0].products.map((prod, index) => (
          <SingleCart key={index} idProduct={prod.productId} />
        ))}

        <hr />
        <div className='checkout'>
          <div className='total'>
            <div>
              <div className='Subtotal'>Sub-Total</div>
              <div className='items'>{carts[0].products.length} items</div>
            </div>
            <div className='total-amount'>S/ {0}</div>
          </div>
          <button className='button'>Checkout</button>
        </div>
      </div>
    </div>
  );
};
