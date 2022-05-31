import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  UPDATE_USER_INFO,
} from "../actions/actionTypes";

const authInitState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  loading: false,
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authReducer = (state = authInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        userInfo: payload.info,
      };
    case UPDATE_USER_INFO:
      return { ...state, userInfo: payload };

    default:
      return state;
  }
};

export default authReducer;
