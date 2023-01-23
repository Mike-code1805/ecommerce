import { ErrorMessage, useField } from "formik";
import styles from "./styles.module.css";

export const Input = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className={styles.inputBlock}>
      <label className={styles.title}>{label}</label>
      <input className={styles.input} {...field} {...props} />
      <ErrorMessage
        className={styles.error}
        name={props.name}
        component="span"
      />
    </div>
  );
};
