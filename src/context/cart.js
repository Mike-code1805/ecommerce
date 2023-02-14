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
    addCart: (state, action) => {
      console.log(action.payload);
      const findDuplicatedProduct = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (state.products.length === 0 || findDuplicatedProduct < 0) {
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      }

      if (findDuplicatedProduct >= 0) {
        state.products[findDuplicatedProduct].quantity +=
          action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    restCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addCart, restCart } = cartSlice.actions;

export default cartSlice.reducer;
