// actions
const OPEN_SIDEBAR = "app/sidebar/OPEN_SIDEBAR";
const CLOSE_SIDEBAR = "app/sidebar/CLOSE_SIDEBAR";
const TOGGLE_SIDEBAR = "app/sidebar/TOGGLE_SIDEBAR";
const TOGGLE_SIDEBAR_ITEM = "app/sidebar/TOGGLE_SIDEBAR_ITEM";

// action creators
export const openSidebar = () => ({
  type: OPEN_SIDEBAR
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const toggleSidebarItem = () => ({
  type: TOGGLE_SIDEBAR_ITEM
});

const initialState = {
  isClosed: false,
  itemIsClosed: false
};

// reducer
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
      return {
        ...state,
        isClosed: !state.isClosed
      };
    case TOGGLE_SIDEBAR_ITEM:
      return {
        ...state,
        itemIsClosed: !state.itemIsClosed
      };

    default:
      return state;
  }
}
