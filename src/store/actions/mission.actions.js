import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import { GET_MISSION_LIST, GET_MISSION_LIST_SUCCESS } from "./actionTypes";
import { getUsersApi } from "./user.actions";
import { getVehiculeApi } from "./vehicule.actions";
import { showNotification } from "@mantine/notifications";
const getAllMissions = () => {
  return {
    type: GET_MISSION_LIST,
  };
};
const getAllMissionsSuccess = (data) => {
  return {
    type: GET_MISSION_LIST_SUCCESS,
    payload: data,
  };
};
export const getMissionApi = () => async (dispatch) => {
  try {
    dispatch(getAllMissions());
    let token = localStorage.getItem("token");
    let result = await getApi("mission", {
      headers: {
        "access-token": token,
      },
    });
    console.log("Result", result);
    if (result.success) {
      dispatch(getAllMissionsSuccess(result.Missions));
    }
  } catch (error) {}
};
export const AddMissionApi = (data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");

    let result = await postApi("mission/add", data, {
      headers: {
        "access-token": token,
      },
    });
    if (result) {
      if (result) {
        dispatch(getMissionApi());
        dispatch(getUsersApi());
        dispatch(getVehiculeApi());
        showNotification({
          title:"Success",
          message:"Mission ajoutée avec succès ",
          color : "green",
        });
      } else{
          showNotification({
            title:"erreur",
            message:"Une erreure c'est produite  ",
            color : "red",
          });
      }
      
    }
  } catch (error) {}
};
export const deleteMissionApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");

    let result = await deleteApi("mission/delete/" + id, {
      headers: {
        "access-token": token,
      },
    });
    if (result) {
      dispatch(getMissionApi());
      dispatch(getUsersApi());
      dispatch(getVehiculeApi());
      showNotification({
        title:"Success",
        message:"Mission supprimée avec succès ",
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

export const updateMission = (data, id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");

    let result = await updateApi("mission/edit/" + id, data, {
      headers: {
        "access-token": token,
      },
    });
    if (result) {
      dispatch(getMissionApi());
      showNotification({
        title:"Success",
        message:"Mission modifiée avec succès ",
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
export const finishMission = (data, id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");

    let result = await updateApi("mission/terminate/" + id, data, {
      headers: {
        "access-token": token,
      },
    });
    if (result) {
      dispatch(getMissionApi());
      dispatch(getUsersApi());
      dispatch(getVehiculeApi());
    }
  } catch (error) {}
};
