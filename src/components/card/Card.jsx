import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import styles from './styles.module.css';
import { Title } from './Title';
import { Buttons } from './Buttons';
import { Image } from './Image';
import { useDispatch } from 'react-redux';
import { addProduct, restCart } from '../../context/cart';

export const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Title title={product.title} />
      <Image img={product.image} />
      <div className={styles.info}>
        <Buttons children={<AddShoppingCartIcon />} />
        <Buttons
          children={<RemoveOutlinedIcon />}
          funcOnClick={() => dispatch(restCart())}
        />
        <Buttons
          children={<AddIcon />}
          funcOnClick={() => dispatch(addProduct(product))}
        />
      </div>
    </div>
  );
};
