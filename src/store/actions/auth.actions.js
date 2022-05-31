import { postApi } from "../../utils/apiHelpers";
import { LOGIN_USER, LOGIN_USER_SUCCESS } from "./actionTypes";

export const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};

export const loginUserSuccess = (token, userINFO) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { token: token, info: userINFO },
  };
};

export const loginUserApi = (body, navigate, addToast) => async (dispatch) => {
  try {
    dispatch(loginUser());
    let result = await postApi("user/login", body);
    if (result.success) {
      let { token, user } = result;
      dispatch(loginUserSuccess(token, user));
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/users");
    } else {
      addToast("Adresse ou mot de passe incorrecte", { appearance: "error" });
    }
  } catch (error) {}
};
