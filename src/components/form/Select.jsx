import { ErrorMessage, useField } from "formik";
import styles from "./styles.module.css";

export const Select = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className={styles.inputBlock}>
      <label className={styles.title}>{label}:</label>
      <select {...field} {...props}></select>
      <ErrorMessage
        className={styles.error}
        name={props.name}
        component="span"
      />
    </div>
  );
};
