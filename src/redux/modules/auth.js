import api from "../../api/index";

const LOG_IN = "app/auth/LOG_IN";
const LOG_IN_FAILED = "app/auth/LOG_IN_FAILED";
const LOG_IN_SUCCSSEEDED = "app/auth/LOG_IN_SUCCSSEEDED";
const LOG_OUT = "app/auth/LOG_OUT";
const LOG_OUT_FAILED = "app/auth/LOG_OUT_FAILED";
const LOG_OUT_SUCCSSEEDED = "app/auth/LOG_OUT_SUCCSSEEDED";

export const logInStart = () => ({
  type: LOG_IN
});

export const logInFailed = error => ({
  type: LOG_IN_FAILED,
  error
});

export const logInSuccessed = payload => ({
  type: LOG_IN_SUCCSSEEDED,
  payload: payload
});

export const logOutStart = () => ({
  type: LOG_OUT
});

export const logOutFailed = error => ({
  type: LOG_OUT_FAILED,
  error
});

export const logOutSuccessed = () => ({
  type: LOG_OUT_SUCCSSEEDED
});

const initialState = {
  isAuthorized: false,
  error: null
  // userInfo: null
};

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
    case LOG_IN_SUCCSSEEDED:
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
    case LOG_OUT_SUCCSSEEDED:
      return {
        ...state,
        // userInfo: null,
        isAuthorized: false
      };
    default:
      return state;
  }
}

export const logIn = values => async dispatch => {
  dispatch(logInStart());
  try {
    let response = await api.login(values);
    if (response.error) return response;
    if (values.rememberMe) {
      const { password } = values;
      response = { ...response, password };
    }

    dispatch(logInSuccessed(response));
    localStorage.setItem(
      "user",
      JSON.stringify({ ...response, isAuthorized: true })
    );
  } catch (error) {
    dispatch(logInFailed(error));
  }
};

export const logOut = key => async dispatch => {
  dispatch(logOutStart);
  try {
    const user = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : "";

    user.isAuthorized = false;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(logOutSuccessed());
  } catch (error) {
    dispatch(logOutFailed(error));
  }
};
