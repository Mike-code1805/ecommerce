import styles from './styles.module.css';

export const Image = ({ img }) => {
  return <img alt='' src={img} className={styles.image} />;
};
