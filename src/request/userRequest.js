import { publicApi } from "../api/productApi";
import { accessDenied, accessStart, accessSuccess } from "../context/user";

export const login = async (dispatch, user) => {
  dispatch(accessStart());
  try {
    const response = await publicApi.post("/api/auth/login", user);
    dispatch(accessSuccess(response.data));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(accessDenied());
  }
};

export const register = async (dispatch, user) => {
  dispatch(accessStart());
  try {
    const response = await publicApi.post("/api/auth/register", user);
    dispatch(accessSuccess(response.data));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(accessDenied());
  }
};
