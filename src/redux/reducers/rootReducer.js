import { combineReducers } from "redux";
import popup from "./popup";
import login from "./login";

const rootReducer = combineReducers({
  popup,
  login
});

export default rootReducer;
