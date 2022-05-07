import { combineReducers } from "redux";
import authReducer from "./auth.reducer";

import userReducer from "./user.reducer";
import vehiculeReducer from "./vehicule.reducer";
const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  vehicule: vehiculeReducer,
});

export default rootReducer;
