import { combineReducers } from "redux";
import auth from "./auth";
import popup from "./popup";
import dashboard from "./dashboard";
import sidebar from "./sidebar";

const rootReducer = combineReducers({ auth, popup, dashboard, sidebar });

export default rootReducer;
