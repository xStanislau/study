import api from "../../api/index";

const LOG_IN = "app/auth/LOG_IN";
const LOG_IN_FAILED = "app/auth/LOG_IN_FAILED";
const LOG_IN_SUCCSSEEDED = "app/auth/LOG_IN_SUCCSSEEDED";
const LOG_OUT = "app/auth/LOG_OUT";
const LOG_OUT_FAILED = "app/auth/LOG_OUT_FAILED";
const LOG_OUT_SUCCSSEEDED = "app/auth/LOG_OUT_SUCCSSEEDED";

export const logInStart = payload => ({
  type: LOG_IN,
  userName: payload
});

export const logInFailed = error => ({
  type: LOG_IN_FAILED,
  error
});

export const logInSuccessed = payload => ({
  type: LOG_IN_SUCCSSEEDED,
  userName: payload
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
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userName: action.payload,
        isAuthorized: false
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        userName: action.payload,
        isAuthorized: false,
        error: action.error
      };
    case LOG_IN_SUCCSSEEDED:
      return {
        ...state,
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
        isAuthorized: false
      };
    default:
      return state;
  }
}

export const logIn = values => async dispatch => {
  dispatch(logInStart());
  try {
    const reponse = await api.login(values);

    if (reponse.error) return reponse;

    dispatch(logInSuccessed(reponse));
    localStorage.setItem(
      "user",
      JSON.stringify({ ...reponse, isAuthorized: true })
    );
  } catch (error) {
    dispatch(logInFailed(error));
  }
};

export const logOut = key => async dispatch => {
  dispatch(logOutStart);
  try {
    localStorage.removeItem(key);
    dispatch(logOutSuccessed());
  } catch (error) {
    dispatch(logOutFailed(error));
  }
};
