import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { loadUser } from "./persistantStorage";

export default function configureStore() {
  const initialAuthState = loadUser();
  const store = createStore(
    rootReducer,
    initialAuthState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}
