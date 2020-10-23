import {
  SET_REQUESTS,
  ADD_REQUEST,
  UPDATE_REQUEST,
  REMOVE_REQUEST,
  SET_AVAILABILITY,
  SET_TEAM_REQUESTS,
  UPDATE_TEAM_REQUEST,
  REMOVE_TEAM_REQUEST
} from "../constants/wfo-requests";

export const setRequests = requests => ({
  type: SET_REQUESTS,
  payload: requests
});

export const addRequest = request => ({
  type: ADD_REQUEST,
  payload: request
});

export const updateRequest = request => ({
  type: UPDATE_REQUEST,
  payload: request
});

export const removeRequest = requestId => ({
  type: REMOVE_REQUEST,
  payload: requestId
});

export const setAvailability = availability => ({
  type: SET_AVAILABILITY,
  payload: availability
});

export const setTeamRequests = requests => ({
  type: SET_TEAM_REQUESTS,
  payload: requests
});

export const updateTeamRequest = request => ({
  type: UPDATE_TEAM_REQUEST,
  payload: request
});

export const removeTeamRequest = requestId => ({
  type: REMOVE_TEAM_REQUEST,
  payload: requestId
});
