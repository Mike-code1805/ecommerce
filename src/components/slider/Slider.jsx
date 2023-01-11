import { data } from './data';
import styles from './styles.module.css';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useState } from 'react';

export const Slider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === 2 ? 0 : current + 1);
  };

  const previus = () => {
    setCurrent(current === 0 ? 2 : current - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left} onClick={previus}>
        <ChevronLeftOutlinedIcon fontSize='100px' />
      </div>
      <div className={styles.right} onClick={next}>
        <ChevronRightOutlinedIcon fontSize='100px' />
      </div>
      {data.map((data, index) => (
        <div
          key={index}
          className={index === current ? 'slide active' : styles.slide}
        >
          {index === current && (
            <img key={index} className={styles.image} src={data.imagen} />
          )}
        </div>
      ))}
    </div>
  );
};
