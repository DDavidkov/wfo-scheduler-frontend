import {
  SET_TEAMS,
  ADD_TEAM,
  UPDATE_TEAM,
  REMOVE_TEAM
} from "../constants/teams";

export const setTeams = teams => ({ type: SET_TEAMS, payload: teams });

export const addTeam = team => ({ type: ADD_TEAM, payload: team });

export const updateTeam = team => ({ type: UPDATE_TEAM, payload: team });

export const removeTeam = teamId => ({
  type: REMOVE_TEAM,
  payload: teamId
});
