export const SET_TEAMS = "SET_TEAMS";
export const ADD_TEAM = "ADD_TEAM";
export const UPDATE_TEAM = "UPDATE_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";

export const setTeams = (teams) => ({ type: SET_TEAMS, payload: teams });

export const addTeam = (team) => ({ type: ADD_TEAM, payload: team });

export const updateTeam = (team) => ({ type: UPDATE_TEAM, payload: team });

export const removeTeam = (teamId) => ({
  type: REMOVE_TEAM,
  payload: teamId
});
