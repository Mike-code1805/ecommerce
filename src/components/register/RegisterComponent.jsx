import { Form, Formik } from "formik";
import { Input } from "../form/Input";
import * as Yup from "yup";
import styles from "./styles.module.css";

export const RegisterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>PARA CONTINUAR DEBE...</h1>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <Formik
          initialValues={{ email: "", password: "", passwordConfirmation: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("This is a invalid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password min lenght is 6")
              .max(20, "Password max lenght is 20")
              .required("Password is required"),
            passwordConfirmation: Yup.string()
              .required("Password is required")
              .oneOf([Yup.ref("password"), null], "Password must be same"),
          })}
          onSubmit={(value) => console.log(value)}
        >
          {() => (
            <Form className={styles.form}>
              <Input
                label="Escriba su correo"
                name="email"
                placeholder="gmail@gmail.com"
              />

              <Input
                label="Escriba su contraseña"
                name="password"
                placeholder="********"
                type="password"
              />

              <Input
                label="Escriba su confirmación de contraseña"
                name="passwordConfirmation"
                placeholder="********"
                type="password"
              />

              <button type="submit" className={styles.button}>
                Registrase
              </button>
              {/* <a className={styles.link}>Regístrate</a> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
