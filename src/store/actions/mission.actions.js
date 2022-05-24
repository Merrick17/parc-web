import { deleteApi, getApi, postApi } from "../../utils/apiHelpers";
import { GET_MISSION_LIST, GET_MISSION_LIST_SUCCESS } from "./actionTypes";
import { getUsersApi } from "./user.actions";
import { getVehiculeApi } from "./vehicule.actions";

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
      dispatch(getMissionApi());
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
    }
  } catch (error) {}
};
