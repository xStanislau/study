import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import logInSuccessed from "../actions/login";
import thunk from "redux-thunk";

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}
