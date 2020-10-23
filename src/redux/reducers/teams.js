import {
  SET_TEAMS,
  ADD_TEAM,
  UPDATE_TEAM,
  REMOVE_TEAM
} from "../constants/teams";

const initialState = {
  teams: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TEAMS:
      return { ...state, teams: payload };
    case ADD_TEAM:
      return { ...state, teams: [...state.teams, payload] };
    case UPDATE_TEAM:
      return {
        ...state,
        teams: state.teams.map(t => (t.id === payload.id ? payload : t))
      };
    case REMOVE_TEAM:
      return { ...state, teams: state.teams.filter(t => t.id !== payload) };
    default:
      return state;
  }
};
