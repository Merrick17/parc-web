import {GET_RECLAMATION_LIST, GET_RECLAMATION_LIST_SUCCESS,} from "../actions/actionTypes";

const reclamationInitState = {
  loading: false,
  list: [],
};

const reclamationReducer = (state = reclamationInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_RECLAMATION_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_RECLAMATION_LIST_SUCCESS:
      return { ...state, loading: false, list: payload };

    default:
      return state;
  }
};

export default reclamationReducer;
