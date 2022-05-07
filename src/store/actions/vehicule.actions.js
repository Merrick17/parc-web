import { getApi, postApi } from "../../utils/apiHelpers";
import {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_VEHICULE_LIST,
  GET_VEHICULE_LIST_SUCCESS,
} from "./actionTypes";

const getAllVehicules = () => {
  return {
    type: GET_VEHICULE_LIST,
  };
};
const getAllVehiculeSuccess = (data) => {
  return {
    type: GET_VEHICULE_LIST_SUCCESS,
    payload: data,
  };
};
export const getVehiculeApi = () => async (dispatch) => {
  try {
    dispatch(getAllVehicules());
    let token = localStorage.getItem("token");
    let result = await getApi("vehicule", {
      headers: {
        "access-token": token,
      },
    });
    console.log("Result", result);
    if (result.success) {
      //dispatch(getAllVehiculeSuccess(result.users));
    }
  } catch (error) {}
};
export const AddVehiculeApi = (data) => async (dispatch) => {
  try {
    let result = await postApi("vehicule/add", data);
    if (result) {
      dispatch(getVehiculeApi());
    }
  } catch (error) {}
};
