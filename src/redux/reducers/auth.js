import api from "../../api/index";

// actions
const LOG_IN = "app/auth/LOG_IN";
const LOG_IN_FAILED = "app/auth/LOG_IN_FAILED";
const LOG_IN_SUCCEEDED = "app/auth/LOG_IN_SUCCEEDED";
const LOG_OUT = "app/auth/LOG_OUT";
const LOG_OUT_FAILED = "app/auth/LOG_OUT_FAILED";
const LOG_OUT_SUCCEEDED = "app/auth/LOG_OUT_SUCCEEDED";

// action creators
export const logInStart = () => ({
  type: LOG_IN
});

export const logInFailed = error => ({
  type: LOG_IN_FAILED,
  error
});

export const logInSucceeded = payload => ({
  type: LOG_IN_SUCCEEDED,
  payload: payload
});

export const logOutStart = () => ({
  type: LOG_OUT
});

export const logOutFailed = error => ({
  type: LOG_OUT_FAILED,
  error
});

export const logOutSucceeded = () => ({
  type: LOG_OUT_SUCCEEDED
});

const initialState = {
  isAuthorized: false,
  error: null,
  userInfo: null
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userInfo: action.payload,
        isAuthorized: false
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isAuthorized: false,
        error: action.error
      };
    case LOG_IN_SUCCEEDED:
      return {
        ...state,
        userInfo: action.payload,
        isAuthorized: true
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthorized: true
      };
    case LOG_OUT_SUCCEEDED:
      return {
        ...state,
        userInfo: null,
        isAuthorized: false
      };
    default:
      return state;
  }
}

// async actions
export const logIn = values => async dispatch => {
  dispatch(logInStart());
  try {
    let response = await api.login(values);
    if (response.error) return response;
    sessionStorage.setItem(
      "user",
      JSON.stringify({ ...response, isAuthorized: true })
    );

    if (values.rememberMe) {
      const timesTamp = new Date().getTime();
      const userData = { ...response, timesTamp };
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, isAuthorized: true })
      );
    }
    dispatch(logInSucceeded(response));
  } catch (error) {
    dispatch(logInFailed(error));
  }
};

export const logOut = key => async dispatch => {
  dispatch(logOutStart);
  try {
    let user;
    if (sessionStorage.getItem(key) !== null) {
      user = JSON.parse(sessionStorage.getItem(key));
      user.isAuthorized = false;
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
    }

    dispatch(logOutSucceeded());
  } catch (error) {
    dispatch(logOutFailed(error));
  }
};
