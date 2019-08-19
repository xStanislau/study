import { combineReducers } from "redux";
import auth from "./auth";
import popup from "./popup";
import dashboard from "./dashboard";
import sidebar from "./sidebar";
import accordion from "./accordion";

const rootReducer = combineReducers({
  auth,
  popup,
  dashboard,
  sidebar,
  accordion
});

export default rootReducer;
