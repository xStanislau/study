const OPEN_POPUP = "OPEN_POPUP";
const CLOSE_POPUP = "CLOSE_POPUP";

export const openPopup = () => ({
  type: OPEN_POPUP
});

export const closePopup = () => ({
  type: CLOSE_POPUP
});

const initialState = {
  isOpen: false
};

export default function reducer(state = initialState, action) {
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
}
