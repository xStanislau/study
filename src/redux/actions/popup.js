import * as t from "../actionTypes/popup";

const openPopup = () => ({
  type: t.OPEN_POPUP
});

const closePopup = () => ({
  type: t.CLOSE_POPUP
});

export default {
  openPopup,
  closePopup
};
