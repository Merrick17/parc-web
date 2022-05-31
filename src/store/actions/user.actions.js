import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  UPDATE_USER_INFO,
} from "./actionTypes";

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
export const deleteUserApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await deleteApi(`user/delete/${id}`, config);
    if (result) {
      dispatch(getUsersApi());
    }
  } catch (error) {}
};
export const getUserById = (id) => async (dispatch) => {
  try {
    let result = await getApi(`user/${id}`);
    if (result) {
      dispatch();
    }
  } catch (error) {}
};
export const updateUserApi = (id, data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await updateApi(`user/${id}`, data, config);
    if (result.success) {
      dispatch(getUsersApi());
    }
  } catch (error) {}
};
export const updatePhoto = (id, data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await updateApi(`user/img/${id}`, data, config);
    if (result.success) {
      dispatch(getUsersApi());
      dispatch({
        type: UPDATE_USER_INFO,
        payload: result.result,
      });
    }
  } catch (error) {
    console.log("Error", error.message);
  }
};
