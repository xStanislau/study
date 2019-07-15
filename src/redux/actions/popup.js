export const OPEN_POPUP = "OPEN_MODAL";
export const CLOSE_POPUP = "CLOSE_MODAL";

const openPopup = () => ({
  type: OPEN_POPUP
});

const closePopup = () => ({
  type: CLOSE_POPUP
});

export default {
  openPopup,
  closePopup
};
