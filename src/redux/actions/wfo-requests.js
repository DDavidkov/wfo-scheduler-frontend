import {
  SET_REQUESTS,
  EDIT_REQUEST,
  DELETE_REQUEST
} from "../constants/wfo-requests";

export const setWFORequests = requests => ({
  type: SET_REQUESTS,
  payload: requests
});

export const editWFORequest = request => ({
  type: EDIT_REQUEST,
  payload: request
});

export const deleteWFORequest = requestId => ({
  type: DELETE_REQUEST,
  payload: requestId
});
