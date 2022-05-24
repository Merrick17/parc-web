import {
  GET_MISSION_LIST,
  GET_MISSION_LIST_SUCCESS,
} from "../actions/actionTypes";

const missionInitState = {
  loading: false,
  list: [],
};

const missionReducer = (state = missionInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MISSION_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_MISSION_LIST_SUCCESS:
      return { ...state, loading: false, list: payload };

    default:
      return state;
  }
};

export default missionReducer;
