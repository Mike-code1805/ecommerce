import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useCounter } from '../../hooks/useCounter';
import styles from './styles.module.css';
import { Title } from './Title';
import { Buttons } from './Buttons';
import { Image } from './Image';

export const Card = ({ title, image }) => {
  const { counter, increaseBy } = useCounter({ minValue: 2, maxValue: 5 });

  return (
    <div className={styles.container}>
      <Title title={title} />
      <Image img={image} />
      <div className={styles.info}>
        <Buttons children={<AddShoppingCartIcon />} />
        <Buttons
          children={<RemoveOutlinedIcon />}
          funcOnClick={() => increaseBy(-1)}
        />
        <Buttons children={<AddIcon />} funcOnClick={() => increaseBy(+1)} />
      </div>
    </div>
  );
};
