import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import missionReducer from "./mission.reducer";

import userReducer from "./user.reducer";
import vehiculeReducer from "./vehicule.reducer";
import ficheTechReducer from "./ficheTech.reducer";
import reclamationReducer from "./reclamation.reducer";
import ficheDepReducer from "./ficheDep.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  vehicule: vehiculeReducer,
  missions: missionReducer,
  fichetech: ficheTechReducer,
  reclamation: reclamationReducer,
  ficheDep: ficheDepReducer,
});

export default rootReducer;
