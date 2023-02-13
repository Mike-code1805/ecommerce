import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findDuplicatedProduct = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (findDuplicatedProduct === 0 || findDuplicatedProduct < 0) {
        console.log(action.payload);
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price * state.quantity;
      }

      if (findDuplicatedProduct > 0) {
        state.products[findDuplicatedProduct].quantity +=
          action.payload.quantity;
        state.total += action.payload.price * state.quantity;
      }
    },
    restCart: (state) => {
      state.products = [];
      state.quantity = 0;
    },
  },
});

export const { addProduct, restCart } = cartSlice.actions;

export default cartSlice.reducer;
