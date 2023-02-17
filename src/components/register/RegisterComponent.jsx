import { Form, Formik } from "formik";
import { Checkbox, Input, Select } from "../form";
import * as Yup from "yup";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../request/userRequest";

export const RegisterComponent = () => {
  const dispatch = useDispatch();
  const onRegister = async (value) => {
    await register(dispatch, value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>PARA CONTINUAR DEBE...</h1>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            gender: "",
            termsCond: false,
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Username is required"),
            email: Yup.string()
              .email("This is a invalid email")
              .required("Email is required"),
            gender: Yup.string()
              .required("Gender is required")
              .oneOf(["male", "female", "no gender"]),
            password: Yup.string()
              .min(6, "Password min lenght is 6")
              .max(20, "Password max lenght is 20")
              .required("Password is required"),
            passwordConfirmation: Yup.string()
              .required("Password is required")
              .oneOf([Yup.ref("password"), null], "Password must be same"),
            termsCond: Yup.boolean()
              .required("Terms are required")
              .oneOf([true], "Terms must be true"),
          })}
          onSubmit={(value) => onRegister(value)}
        >
          {() => (
            <Form className={styles.form}>
              <Input
                label="Escriba su nombre de usuario"
                name="username"
                placeholder="Alfredo Chaqueta"
              />
              <Input
                label="Escriba su correo"
                name="email"
                placeholder="gmail@gmail.com"
              />
              <Select
                label="Escoja su género"
                name="gender"
                options="male"
                type="password"
              >
                <option value="no option">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="no gender">No Gender</option>
              </Select>

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

              <Checkbox
                label="Acepte los términos y condiciones"
                name="termsCond"
                type="checkbox"
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
