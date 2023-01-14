import styles from './styles.module.css';

export const Buttons = ({ funcOnClick, children }) => {
  return (
    <div className={styles.icon} onClick={funcOnClick}>
      {children}
    </div>
  );
};
