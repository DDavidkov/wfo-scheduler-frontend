import {
  SET_REQUESTS,
  EDIT_REQUEST,
  DELETE_REQUEST
} from "../constants/wfo-requests";

const initialState = {
  wfoRequests: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REQUESTS:
      return { ...state, wfoRequests: payload };
    case EDIT_REQUEST:
      return {
        ...state,
        wfoRequests: state.wfoRequests.map(request =>
          request.id === payload.id ? payload : request
        )
      };
    case DELETE_REQUEST:
      return {
        ...state,
        wfoRequests: state.wfoRequests.filter(request => request.id !== payload)
      };
    default:
      return state;
  }
};
