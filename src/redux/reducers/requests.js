import {
  SET_REQUESTS,
  ADD_REQUEST,
  UPDATE_REQUEST,
  REMOVE_REQUEST,
  SET_AVAILABILITY,
  SET_TEAM_REQUESTS,
  UPDATE_TEAM_REQUEST,
  REMOVE_TEAM_REQUEST
} from "../actions/requests";

const initialState = {
  requests: [],
  teamRequests: [],
  availability: undefined
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REQUESTS:
      return { ...state, requests: payload };
    case ADD_REQUEST:
      return { ...state, requests: [...state.requests, payload] };
    case UPDATE_REQUEST:
      return {
        ...state,
        requests: state.requests.map((r) => (r.id === payload.id ? payload : r))
      };
    case REMOVE_REQUEST:
      return {
        ...state,
        requests: state.requests.filter((r) => r.id !== payload)
      };
    case SET_AVAILABILITY:
      return {
        ...state,
        availability: payload
      };
    case SET_TEAM_REQUESTS:
      return { ...state, teamRequests: payload };
    case UPDATE_TEAM_REQUEST:
      return {
        ...state,
        teamRequests: state.teamRequests.map((r) =>
          r.id === payload.id ? payload : r
        )
      };
    case REMOVE_TEAM_REQUEST:
      return {
        ...state,
        requests: state.requests.filter((r) => r.id !== payload)
      };
    default:
      return state;
  }
};
