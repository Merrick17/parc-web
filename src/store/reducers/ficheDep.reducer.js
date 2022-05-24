import {GET_FICHEDEP_LIST, GET_FICHEDEP_LIST_SUCCESS,} from "../actions/actionTypes";

const ficheDepInitState = {
  loading: false,
  list: [],
};

const ficheDepReducer = (state = ficheDepInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_FICHEDEP_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_FICHEDEP_LIST_SUCCESS:
      return { ...state, loading: false, list: payload };

    default:
      return state;
  }
};

export default ficheDepReducer;
