import {
  GET_VEHICULE_LIST,
  GET_vehicule_LIST,
  GET_VEHICULE_LIST_SUCCESS,
  GET_vehicule_LIST_SUCCESS,
} from "../actions/actionTypes";

const vehiculeInitState = {
  loading: false,
  list: [],
};

const vehiculeReducer = (state = vehiculeInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_VEHICULE_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_VEHICULE_LIST_SUCCESS:
      return { ...state, loading: false, list: payload };

    default:
      return state;
  }
};

export default vehiculeReducer;
