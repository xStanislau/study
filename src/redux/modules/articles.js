import { getData } from "../../api/user/getData";
import { getArticle } from "../../api/news/getArticle";

const LOAD_DATA = "app/articles/LOAD_ARTICLE";
const LOAD_ARTICLES_SUCCESSEDED = "app/articles/LOAD_ARTICLE_SUCCESSEDED";
const LOAD_ARTICLES_FAILED = "app/articles/LOAD_ARTICLE_FAILED";
const UPDATE_ARTICLE = "app/articles/UPDATE_ARTICLE";
const UPDATE_ARTICLE_SUCCESSEDED = "app/articles/UPDATE_ARTICLE_SUCCESSEDED";
const UPDATE_ARTICLES_FAILED = "app/articles/UPDATE_ARTICLE_FAILED";
const DELETE_ARTICLE = "app/articles/DELETE_ARTICLE";
const DELETE_ARTICLE_SUCCESSEDED = "app/articles/DELETE_ARTICLE_SUCCESSEDED";
const DELETE_ARTICLE_FAILED = "app/articles/DELETE_ARTICLE_FAILED";
const ADD_ARTICLE = "app/articles/DELTE_ARTICLE";
const ADD_ARTICLE_SUCCESSEDED = "app/articles/ADD_ARTICLE_SUCCESSEDED";
const ADD_ARTICLE_FAILED = "app/articles/ADD_ARTICLE_FAILED";

export const loadDataStart = () => ({
  type: LOAD_DATA
});

export const loadDataSuccesseded = data => ({
  type: LOAD_ARTICLES_SUCCESSEDED,
  payload: data
});

export const loadDataFailed = error => ({
  type: LOAD_ARTICLES_FAILED,
  payload: error
});

const initialState = {
  isLoaded: false,
  data: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state
      };
    case LOAD_ARTICLES_FAILED:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      };
    case LOAD_ARTICLES_SUCCESSEDED:
      return {
        ...state,
        isLoaded: true,
        data: action.payload
      };

    default:
      return state;
  }
}

export const loadData = id => async dispatch => {
  dispatch(loadDataStart());
  try {
    const response = await getArticle(id);
    if (response.data.status === "err") {
      throw Error(response.data.message);
    }
    dispatch(loadDataSuccesseded(response.data));
  } catch (error) {
    dispatch(loadDataFailed(error));
  }
};
