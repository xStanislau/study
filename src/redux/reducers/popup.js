import { OPEN_POPUP, CLOSE_POPUP } from "../actions/popup";

const initialState = {
  isOpen: false
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        ...state,
        isOpen: true
      };

    case CLOSE_POPUP:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};

export default popupReducer;
