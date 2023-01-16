import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import styles from './styles.module.css';
import { Title } from './Title';
import { Buttons } from './Buttons';
import { Image } from './Image';
import { useDispatch } from 'react-redux';
import { addProduct, restCart } from '../../context/cart';

export const Card = ({ id, title, image }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Title title={title} />
      <Image img={image} />
      <div className={styles.info}>
        <Buttons children={<AddShoppingCartIcon />} />
        <Buttons
          children={<RemoveOutlinedIcon />}
          funcOnClick={() => dispatch(restCart())}
        />
        <Buttons
          children={<AddIcon />}
          funcOnClick={() => dispatch(addProduct({ id, title, image }))}
        />
      </div>
    </div>
  );
};
