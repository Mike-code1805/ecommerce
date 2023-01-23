import styles from './styles.module.css';

export const Title = ({ title }) => {
  return (
    <div className={styles.containerTitle}>
      <span className={styles.productTitle}>{title}</span>
    </div>
  );
};
