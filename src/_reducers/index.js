import { combineReducers } from "redux";
import { chkAccess } from "./checkAdmin.reducer";
import { registration } from "./registration.reducer";
const rootReducer = combineReducers({
  chkAccess,
  registration
});
export default rootReducer;
