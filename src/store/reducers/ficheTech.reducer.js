import {
  GET_FICHETECH_LIST,
  GET_FICHETECH_LIST_SUCCESS,
} from "../actions/actionTypes";

const ficheTechInitState = {
  loading: false,
  list: [],
};

const ficheTechReducer = (state = ficheTechInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_FICHETECH_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_FICHETECH_LIST_SUCCESS:
      console.log("PAYLOAD", payload);
      return { ...state, loading: false, list: payload };

    default:
      return state;
  }
};

export default ficheTechReducer;
