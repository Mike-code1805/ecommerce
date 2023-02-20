import { ErrorMessage, useField } from "formik";
import styles from "./styles.module.css";

export const Checkbox = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div className={styles.inputBlock}>
      <label className={styles.title}>{label}:</label>
      <input {...field} {...props} />
      <ErrorMessage
        className={styles.error}
        name={props.name}
        component="span"
      />
    </div>
  );
};
