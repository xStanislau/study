import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import logInSuccessed from "../actions/login";
import thunk from "redux-thunk";
import initAuth from "../../utils/store/initAuth";

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  if (!(localStorage.getItem("user") == null)) {
    const user = JSON.parse(localStorage.getItem("user") == null);
    if (!!user.isAuthorized) {
      initAuth(store, logInSuccessed);
    }
  }

  return store;
}
