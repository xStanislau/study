import { getData } from "../../api/user/getData";

// actions
const LOAD_DATA = "app/dashboard/LOAD_DATA";
const LOAD_DATA_SUCCESSEDED = "app/dashboard/LOAD_DATA_SUCCESSEDED";
const LOAD_DATA_FAILED = "app/dashboard/LOAD_DATA_FAILED";

// action creators
export const loadDataStart = () => ({
  type: LOAD_DATA
});

export const loadDataSuccesseded = data => ({
  type: LOAD_DATA_SUCCESSEDED,
  payload: data
});

export const loadDataFailed = error => ({
  type: LOAD_DATA_FAILED,
  payload: error
});

const initialState = {
  isLoaded: false,
  data: null
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state
      };
    case LOAD_DATA_FAILED:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      };
    case LOAD_DATA_SUCCESSEDED:
      return {
        ...state,
        isLoaded: true,
        data: action.payload
      };

    default:
      return state;
  }
}

// async action
export const loadData = id => async dispatch => {
  dispatch(loadDataStart());
  try {
    const response = await getData(id);
    if (response.data.status === "err") {
      throw Error(response.data.message);
    }
    dispatch(loadDataSuccesseded(response.data));
  } catch (error) {
    dispatch(loadDataFailed(error));
  }
};
