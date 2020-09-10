export const SET_REQUESTS = "SET_REQUESTS";
export const ADD_REQUEST = "ADD_REQUEST";
export const UPDATE_REQUEST = "UPDATE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const SET_AVAILABILITY = "SET_AVAILABILITY";
export const UPDATE_TEAM_REQUEST = "UPDATE_TEAM_REQUEST";
export const SET_TEAM_REQUESTS = "SET_TEAM_REQUESTS";
export const REMOVE_TEAM_REQUEST = "REMOVE_TEAM_REQUEST";

export const setRequests = (requests) => ({
  type: SET_REQUESTS,
  payload: requests
});

export const addRequest = (request) => ({
  type: ADD_REQUEST,
  payload: request
});

export const updateRequest = (request) => ({
  type: UPDATE_REQUEST,
  payload: request
});

export const removeRequest = (requestId) => ({
  type: REMOVE_REQUEST,
  payload: requestId
});

export const setAvailability = (availability) => ({
  type: SET_AVAILABILITY,
  payload: availability
});

export const setTeamRequests = (requests) => ({
  type: SET_TEAM_REQUESTS,
  payload: requests
});

export const updateTeamRequest = (request) => ({
  type: UPDATE_TEAM_REQUEST,
  payload: request
});

export const removeTeamRequest = (requestId) => ({
  type: REMOVE_TEAM_REQUEST,
  payload: requestId
});
