import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import { GET_VEHICULE_LIST, GET_VEHICULE_LIST_SUCCESS } from "./actionTypes";
import { showNotification } from "@mantine/notifications";
const getAllVehicules = () => {
  let action = {
    type: GET_VEHICULE_LIST,
    payload: null,
  };
  return action;
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
      dispatch(getAllVehiculeSuccess(result.vehicules));
    
    }
  } catch (error) {}
};
export const AddVehiculeApi = (data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await postApi("vehicule/add", data, config);
    if (result) {
      dispatch(getVehiculeApi());
      showNotification({
        title:"Success",
        message:"Véhicule ajoutée avec succès ",
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
export const deleteVehiculeApi = (immat) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await deleteApi(`vehicule/delete/${immat}`, config);
    if (result) {
      dispatch(getVehiculeApi());
      showNotification({
        title:"Success",
        message:"Véhicule supprimée avec succès ",
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

export const updateVehiculeApi = (immat, data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await updateApi(`vehicule/edit/${immat}`, data, config);
    if (result.success) {
      dispatch(getVehiculeApi());
      showNotification({
        title:"Success",
        message:"Véhicule modifiée avec succès ",
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

