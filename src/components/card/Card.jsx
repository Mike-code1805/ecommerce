import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useCounter } from '../../hooks/useCounter';
import styles from './styles.module.css';
import { Title } from './Title';
import { Buttons } from './Buttons';
import { Image } from './Image';

export const Card = () => {
  const { counter, increaseBy } = useCounter({ minValue: 2, maxValue: 5 });

  return (
    <div className={styles.container}>
      <Title title={counter} />
      <Image
        img={
          'https://imagenpng.com/wp-content/uploads/2015/03/Dragon-Ball-Z-Png.png'
        }
      />
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
