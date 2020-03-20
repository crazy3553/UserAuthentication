import { combineReducers } from "redux";
import { chkAccess } from "./checkAdmin.reducer";
import { registration } from "./registration.reducer";
import {dashDetails} from './dashboard.reducer';
const rootReducer = combineReducers({
  chkAccess,
  registration,
  dashDetails
});
export default rootReducer;
