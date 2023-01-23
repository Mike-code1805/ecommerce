import styles from './styles.module.css';

export const RegisterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>PARA CONTINUAR DEBE...</h1>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <form className={styles.form}>
          <div className={styles.inputBlock}>
            <input className={styles.input} placeholder='Email' />
          </div>
          <div className={styles.inputBlock}>
            <input className={styles.input} placeholder='Contraseña' />
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              placeholder='Confirmar contraseña'
            />
          </div>
          <button className={styles.button}>REGISTRARSE</button>
        </form>
      </div>
    </div>
  );
};
