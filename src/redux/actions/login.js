import * as t from "../actionTypes/login";

const logInStart = () => ({
  type: t.LOG_IN
});

const logInFailed = error => ({
  type: t.LOG_IN_FAILED,
  error
});

const logInSuccessed = () => ({
  type: t.LOG_IN_SUCCSSEEDED
});

const logIn = () => async dispatch => {
  dispatch(logInStart());
  try {
    dispatch(logInSuccessed());
    localStorage.setItem("user", JSON.stringify({ isAuthorized: true }));
  } catch (error) {
    dispatch(logInFailed(error));
  }
};

export default {
  logIn
};
