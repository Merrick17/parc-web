import {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  UPDATE_USER_INFO,
} from "../actions/actionTypes";

const userInitState = {
  loading: false,
  list: [],
};

const userReducer = (state = userInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_LIST_SUCCESS:
      return { ...state, loading: false, list: payload };
   
    default:
      return state;
  }
};

export default userReducer;
