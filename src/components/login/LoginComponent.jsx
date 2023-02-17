import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../request/userRequest";
import { Input } from "../form/Input";
import styles from "./styles.module.css";

export const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const onLogin = async (value) => {
    await login(dispatch, value);
  };
  console.log({ user });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>PARA CONTINUAR DEBE...</h1>
        <h2 className={styles.title}>INICIAR SESIÓN</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("This is a invalid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password min lenght is 6")
              .max(20, "Password max lenght is 20")
              .required("Password is required"),
          })}
          onSubmit={(value) => onLogin(value)}
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

              <button type="submit" className={styles.button}>
                INGRESAR
              </button>
            </Form>
          )}
        </Formik>
        <button
          className={styles.buttonRegister}
          onClick={() => navigate("/auth/register")}
        >
          Regístrate
        </button>
      </div>
    </div>
  );
};
