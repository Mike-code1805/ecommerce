import styles from './styles.module.css';

export const Title = ({ title }) => {
  return (
    <div>
      <span className={styles.productTitle}>{title}</span>
    </div>
  );
};
