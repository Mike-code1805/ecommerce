import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isFetching: false,
  errorMessage: false,
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {

    },
    restCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, restCart } = cartSlice.actions;

export default cartSlice.reducer;
