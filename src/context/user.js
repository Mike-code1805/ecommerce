import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isFetching: false,
  errorMessage: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    accessStart: (state) => {
      console.log("Im started");
      state.isFetching = true;
    },
    accessSuccess: (state, action) => {
      console.log("Im in reducer ->", action.payload);
      state.userData = action.payload;
      state.isFetching = false;
    },
    accessDenied: (state) => {
      state.isFetching = false;
      state.errorMessage = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isFetching = false;
      state.errorMessage = false;
    },
  },
});

export const { accessStart, accessSuccess, accessDenied, logout } =
  userSlice.actions;

export default userSlice.reducer;
