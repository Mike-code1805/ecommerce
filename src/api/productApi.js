import axios from "axios";

export const productApi = axios.create();

export const paymentApi = axios.create({
    baseURL: "http://localhost:8080"
});
