import { Stripe } from "../components/stripe/Stripe";
import {
  AboutUs,
  CartPage,
  Login,
  MainPage,
  Products,
  Register,
  Product,
} from "../pages";

export const routes = [
  {
    path: "/",
    component: MainPage,
    name: "",
  },
  {
    path: "/api/products",
    component: Products,
    name: "PRODUCTOS",
  },
  {
    path: "/api/aboutus",
    component: AboutUs,
    name: "ACERCA",
  },
  {
    path: "/auth/register",
    component: Register,
    name: "REGISTRO",
  },
  {
    path: "/auth/login",
    component: Login,
    name: "INICIAR SESION",
  },
  {
    path: "/api/cart",
    component: CartPage,
    name: "",
  },
  {
    path: "/api/products/:id",
    component: Product,
    name: "",
  },
  {
    path: "/api/payment",
    component: Stripe,
    name: "",
  },
];


export const privateRoutes = [
  {
    path: "/",
    component: MainPage,
    name: "",
  },
  {
    path: "/api/products",
    component: Products,
    name: "PRODUCTOS",
  },
  {
    path: "/api/aboutus",
    component: AboutUs,
    name: "ACERCA",
  },
  {
    path: "/api/cart",
    component: CartPage,
    name: "",
  },
  {
    path: "/api/products/:id",
    component: Product,
    name: "",
  },
  {
    path: "/api/payment",
    component: Stripe,
    name: "",
  },
];
