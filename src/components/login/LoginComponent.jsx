import styles from './styles.module.css';

export const LoginComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>PARA CONTINUAR DEBE...</h1>
        <h2 className={styles.title}>INICIAR SESIÓN</h2>
        <form className={styles.form}>
          <div className={styles.inputBlock}>
            <input className={styles.input} placeholder='Email' />
          </div>
          <div className={styles.inputBlock}>
            <input className={styles.input} placeholder='contraseña' />
          </div>
          <button className={styles.button}>INGRESAR</button>
        </form>
      </div>
    </div>
  );
};
