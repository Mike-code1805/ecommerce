import { Cart } from '../components';
import { AboutUs, Login, MainPage, Products, Register } from '../pages';

export const routes = [
  {
    path: '/',
    component: MainPage,
    name: '',
  },
  {
    path: '/api/products',
    component: Products,
    name: 'PRODUCTOS',
  },
  {
    path: '/api/aboutus',
    component: AboutUs,
    name: 'ACERCA',
  },
  {
    path: '/auth/register',
    component: Register,
    name: 'REGISTRO',
  },
  {
    path: '/auth/login',
    component: Login,
    name: 'INICIAR SESION',
  },
  {
    path: '/api/cart',
    component: Cart,
    name: '',
  },
];
