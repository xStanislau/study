import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../modules/index";
import thunk from "redux-thunk";
import { logInSuccessed } from "../../redux/modules/auth";
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  if (localStorage.getItem("user") !== null) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.isAuthorized) {
      const auth = { userName: user.userName };

      store.dispatch(logInSuccessed(auth));
    } else if (user.hasOwnProperty("password")) {
      const { userName, password } = user;
      const auth = { userName, password };
      store.dispatch(logInSuccessed(auth));
    }
  }

  return store;
}
