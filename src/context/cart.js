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

    deleteCart: (state, action) => {
      console.log(state.total);
      console.log(action.payload);
      let idx = state.products.findIndex((prod) => prod._id === action.payload);
      console.log({ idx });
      state.quantity -= 1;
      state.total =
        state.total.toFixed(1) -
        (state.products[idx].price * state.products[idx].quantity).toFixed(1);
      state.products.splice(idx, 1);
    },

    updateQuantityProduct: (state, action) => {
      let idx = state.products.findIndex(
        (prod) => prod._id === action.payload._id
      );
        
      if (action.payload.act === "add") {
        state.products[idx].quantity += 1;
        state.total = state.total + state.products[idx].price;
      } else if (action.payload.act === "remove") {
        state.products[idx].quantity -= 1;
        state.total = state.total - state.products[idx].price;
      }
    },

    restCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addCart, restCart, deleteCart, updateQuantityProduct } = cartSlice.actions;

export default cartSlice.reducer;
