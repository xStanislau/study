import api from "./../../api/index";

const LOG_IN = "app/login/LOG_IN";
const LOG_IN_FAILED = "app/login/LOG_IN_FAILED";
const LOG_IN_SUCCSSEEDED = "app/login/LOG_IN_SUCCSSEEDED";

export const logInStart = () => ({
  type: LOG_IN
});

export const logInFailed = error => ({
  type: LOG_IN_FAILED,
  error
});

export const logInSuccessed = () => ({
  type: LOG_IN_SUCCSSEEDED
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
        isAuthorized: false
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isAuthorized: false,
        error: action.error
      };
    case LOG_IN_SUCCSSEEDED:
      debugger;
      return {
        ...state,
        isAuthorized: true
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
    localStorage.setItem("user", JSON.stringify({ isAuthorized: true }));
  } catch (error) {
    dispatch(logInFailed(error));
  }
};
