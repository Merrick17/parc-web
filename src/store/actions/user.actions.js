import { getApi, postApi } from "../../utils/apiHelpers";
import { GET_USER_LIST, GET_USER_LIST_SUCCESS } from "./actionTypes";

const getAllUsers = () => {
  return {
    type: GET_USER_LIST,
  };
};
const getAllUsersSuccess = (data) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: data,
  };
};
export const getUsersApi = () => async (dispatch) => {
  try {
    dispatch(getAllUsers());
    let token = localStorage.getItem("token");
    let result = await getApi("user", {
      headers: {
        "access-token": token,
      },
    });
    console.log("Result", result);
    if (result.success) {
      dispatch(getAllUsersSuccess(result.users));
    }
  } catch (error) {}
};
export const addUserApi = (data) => async (dispatch) => {
  try {
    let result = await postApi("user/register", data);
    if (result) {
      dispatch(getUsersApi());
    }
  } catch (error) {}
};
