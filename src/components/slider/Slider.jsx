import { data } from './data';
import styles from './styles.module.css';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

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
          className={index === current ? styles.slideactive : styles.slide}
        >
          {index === current && (
            <>
              <img
                alt=''
                key={index}
                className={styles.image}
                src={data.imagen}
              />
              <div className={styles.textContainer}>
                <h1>{data.title}</h1>
                <h2>{data.description}</h2>
                <button className={styles.button}>
                  Comprar
                  {<ArrowCircleRightOutlinedIcon />}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
