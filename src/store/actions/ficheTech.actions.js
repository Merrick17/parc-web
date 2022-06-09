import { deleteApi, getApi, postApi, updateApi} from "../../utils/apiHelpers";
import { GET_FICHETECH_LIST, GET_FICHETECH_LIST_SUCCESS} from "./actionTypes";
//import Swal from 'sweetalert2'
import { showNotification } from "@mantine/notifications";
const getAllFicheTech = () => {
  return {
    type: GET_FICHETECH_LIST,
  };
};
const getAllFicheTechSuccess = (data) => {
  return {
    type: GET_FICHETECH_LIST_SUCCESS,
    payload: data,
  };
};
export const getFicheTechsApi = () => async (dispatch) => {
  try {
    dispatch(getAllFicheTech());
    let token = localStorage.getItem("token");
    let result = await getApi("ficheTech", {
      headers: {
        "access-token": token,
      },
    });
    console.log("Result", result);
    if (result.success) {
      dispatch(getAllFicheTechSuccess(result.result));
    }
  } catch (error) {}
};
export const AddFicheTechApi = (data) => async (dispatch) => {
  try {
    let result = await postApi("ficheTech/add", data);
    if (result) {
      dispatch(getFicheTechsApi());
      showNotification({
        title:"Success",
        message:"Fiche Technique  ajoutée avec succès ",
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
export const updateFicheTechApi = (id, data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await updateApi("ficheTech/edit/" + id, data, config);
    if (result) {
      dispatch(getFicheTechsApi());
      showNotification({
        title:"Success",
        message:"Fiche Technique  modifiée avec succès ",
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
export const deleteFicheTechApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await deleteApi(`ficheTech/delete/${id}`, config);
    if (result) {
      dispatch(getFicheTechsApi());
      showNotification({
        title:"Success",
        message:"Fiche Technique supprimée avec succès ",
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

