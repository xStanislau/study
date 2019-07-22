import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import {logInSuccessed} from "../../redux/modules/auth"
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  debugger;
  if(localStorage.getItem("user")!== null) {
    
    const {userName} = JSON.parse(localStorage.getItem("user"));
    store.dispatch(logInSuccessed(userName))
  }
  return store;
}
