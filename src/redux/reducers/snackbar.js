import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../constants/snackbar";

const initialState = {
  open: false,
  message: undefined
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_SNACKBAR:
      return { ...state, open: true, message: payload };
    case HIDE_SNACKBAR:
      return { ...state, open: false, message: undefined };
    default:
      return state;
  }
};
