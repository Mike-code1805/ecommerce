import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
// import { AboutUs, Login, MainPage, Products, Register } from '../pages';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
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
