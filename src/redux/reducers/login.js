import * as t from "../actionTypes/login";

const initialState = {
  isAuthorized: false,
  error: null
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case t.LOG_IN:
      return {
        ...state,
        isAuthorized: false
      };
    case t.LOG_IN_FAILED:
      return {
        ...state,
        isAuthorized: false,
        error: action.error
      };
    case t.LOG_IN_SUCCSSEEDED:
      return {
        ...state,
        isAuthorized: true
      };

    default:
      return state;
  }
};

export default login;
