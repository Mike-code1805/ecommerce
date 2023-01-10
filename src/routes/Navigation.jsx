import { Route, Routes } from 'react-router-dom';
import { AboutUs, Login, MainPage, Products, Register } from '../pages';

export const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/api/products' element={<Products />} />
        <Route path='/api/aboutus' element={<AboutUs />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
    </div>
  );
};
