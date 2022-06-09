import { deleteApi, getApi, postApi, updateApi} from "../../utils/apiHelpers";
import { GET_FICHEDEP_LIST, GET_FICHEDEP_LIST_SUCCESS } from "./actionTypes";
import { showNotification } from "@mantine/notifications";
const getAllFicheDep = () => {
  let action = {
    type: GET_FICHEDEP_LIST,
    payload: null,
  };
  return action;
};
const getAllFicheDepSuccess = (data) => {
  return {
    type: GET_FICHEDEP_LIST_SUCCESS,
    payload: data,
  };
};

export const getFicheDepApi = () => async (dispatch) => {
  try {
    dispatch(getAllFicheDep());
    let token = localStorage.getItem("token");
    let result = await getApi("depenses", {
      headers: {
        "access-token": token,
      },
    });
    console.log("Result", result);
    if (result.success) {
      dispatch(getAllFicheDepSuccess(result.result));
    }
  } catch (error) {}
};
export const AddFicheDepApi = (data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await postApi("depenses/add", data, config);
    if (result) {
      dispatch(getFicheDepApi());
      showNotification({
        title:"Success",
        message:"Fiche Depense ajoutée avec succès ",
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
export const updateFicheDepApi= (id, data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await updateApi("depenses/edit/" + id, data, config);
    if (result) {
      dispatch(getFicheDepApi());
      showNotification({
        title:"Success",
        message:"Fiche Depense modifiée avec succès ",
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
export const deleteFicheDepApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "access-token": token,
      },
    };
    let result = await deleteApi(`depenses/delete/${id}`, config);
    if (result) {
      dispatch(getFicheDepApi());
      showNotification({
        title:"Success",
        message:"Fiche Dépense  supprimée avec succès ",
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

