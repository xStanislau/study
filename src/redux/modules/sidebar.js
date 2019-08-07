const OPEN_SIDEBAR = "app/sidebar/OPEN_SIDEBAR";
const CLOSE_SIDEBAR = "app/sidebar/CLOSE_SIDEBAR";
const TOGGLE_SIDEBAR = "app/sidebar/TOGGLE_SIDEBAR";

export const openSidebar = () => ({
  type: OPEN_SIDEBAR
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

const initialState = {
  isClosed: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isClosed: false
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isClosed: true
      };
    case TOGGLE_SIDEBAR:
      debugger;
      return {
        ...state,
        isClosed: !state.isClosed
      };

    default:
      return state;
  }
}
