import { getApi, postApi, updateApi,deleteApi } from "../../utils/apiHelpers";
import {
  GET_RECLAMATION_LIST,
  GET_RECLAMATION_LIST_SUCCESS,
} from "./actionTypes";
import { showNotification } from "@mantine/notifications";

const getAllReclamation = () => {
  let action = {
    type: GET_RECLAMATION_LIST,
    payload: null,
  };
  return action;
};
const getAllReclamationSuccess = (data) => {
  return {
    type: GET_RECLAMATION_LIST_SUCCESS,
    payload: data,
  };
};

export const getReclamationApi = () => async (dispatch) => {
  try {
    dispatch(getAllReclamation());
    let token = localStorage.getItem("token");
    let result = await getApi("Reclamation", {
      headers: {
        "access-token": token,
      },
    });
    console.log("Result", result);
    if (result.success) {
      dispatch(getAllReclamationSuccess(result.result));
    }
  } catch (error) {}
};
export const AddReclamationApi = (data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await postApi("reclamation/add", data, config);
    if (result) {
      dispatch(getReclamationApi());
      showNotification({
        title:"Success",
        message:"Reclamation ou conseil  ajoutée avec succès ",
        color : "green",
      });
    } else{
        showNotification({
          title:"erreur",
          message:"Une erreure c'est produite  ",
          color : "red",
        });

    }
  } catch (error) {}
};
export const updateReclamationApi = (id, data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await updateApi("reclamation/edit/" + id, data, config);
    if (result) {
      dispatch(getReclamationApi());
      showNotification({
        title:"Success",
        message:"Reclamation ou conseil modifiée avec succès ",
        color : "green",
      });
    } else{
        showNotification({
          title:"erreur",
          message:"Une erreure c'est produite  ",
          color : "red",
        });
    }
  } catch (error) {}
};
export const deleteReclamationApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await deleteApi(`Reclamation/delete/${id}`, config);
    if (result) {
      dispatch(getReclamationApi());
      showNotification({
        title:"Success",
        message:"reclamation ou conseil supprimée avec succès ",
        color : "green",
      });
    } else{
        showNotification({
          title:"erreur",
          message:"Une erreure c'est produite  ",
          color : "red",
        });
    }
  } catch (error) {}
};

