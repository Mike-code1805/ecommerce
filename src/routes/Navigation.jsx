import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
// import { Navbar } from '../components';
// import { AboutUs, Login, MainPage, Products, Register } from '../pages';
import { routes } from "./routes";

export const Navigation = () => {
  const user = useSelector((state) => state.user.userData);
  return (
    <div>
      {/* <Navbar /> */}
      {routes.map(({ path, component: Component }, index) => {
        console.log(Component.name);
      })}
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              Component.name === "Login" || Component.name === "Register" ? (
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Component />
                )
              ) : (
                <Component />
              )
            }
          />
        ))}
        {/* <Route path='/' element={<MainPage />} />
        <Route path='/api/products' element={<Products />} />
        <Route path='/api/aboutus' element={<AboutUs />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} /> */}
      </Routes>
    </div>
  );
};
