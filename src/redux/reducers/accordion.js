//actin types
const TOGGLE_ACCORDION_ITEM = "app/sidebar/TOGGLE_SIDEBAR_ITEM";

// action creators
export const toggleAccordionItem = () => {
  return {
    type: TOGGLE_ACCORDION_ITEM
  };
};

const initialState = {
  itemIsClosed: false
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACCORDION_ITEM:
      return {
        ...state,
        itemIsClosed: !state.itemIsClosed
      };

    default:
      return state;
  }
}
