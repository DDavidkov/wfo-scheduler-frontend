import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "../../utils/requests";
import { isOkStatus } from "../../utils/helper";
import { setTeams, addTeam, updateTeam, removeTeam } from "../actions/teams";

const teamPath = process.env.REACT_APP_BACKEND_URL + "/team";

export const getTeams = () => {
  return async (dispatch) => {
    const res = getRequest(teamPath);

    if (isOkStatus(res)) {
      dispatch(setTeams(await res.json()));
    }
  };
};

export const postTeam = (team) => {
  return async (dispatch) => {
    const res = postRequest(teamPath, team);

    if (isOkStatus(res)) {
      dispatch(addTeam(await res.json()));
    }
  };
};

export const putTeam = (team) => {
  return async (dispatch) => {
    const res = putRequest(teamPath + "/" + team.id, team);

    if (isOkStatus(res)) {
      dispatch(updateTeam(await res.json()));
    }
  };
};

export const deleteTeam = (teamId) => {
  return async (dispatch) => {
    const res = deleteRequest(teamPath + "/" + teamId);

    if (isOkStatus(res)) {
      dispatch(removeTeam(teamId));
    }
  };
};
