import axios from "axios";

export const productApi = axios.create();

export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_PORT}`,
});
