import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "../../utils/requests";
import { isOkStatus } from "../../utils/helper";
import {
  setRequests,
  setTeamRequests,
  addRequest,
  updateRequest,
  removeRequest,
  removeTeamRequest,
  updateTeamRequest,
  setAvailability
} from "../actions/requests";

const requestsPath = process.env.REACT_APP_BACKEND_URL + "/wfo-request";

export const getEmployeeRequests = (employeeId) => {
  return async (dispatch) => {
    const res = await getRequest(`${requestsPath}/employee/${employeeId}`);

    if (isOkStatus(res)) {
      const requests = await res.json();
      dispatch(setRequests(requests));
    }
  };
};

export const getTeamRequests = (teamId) => {
  return async (dispatch) => {
    const res = await getRequest(`${requestsPath}/team/${teamId}`);

    if (isOkStatus(res)) {
      dispatch(setTeamRequests(await res.json()));
    }
  };
};

export const postEmployeeRequest = (request) => {
  return async (dispatch) => {
    const res = await postRequest(requestsPath, request);

    if (isOkStatus(res)) {
      dispatch(addRequest(await res.json()));
    }
  };
};

export const putEmployeeRequest = (request) => {
  return async (dispatch) => {
    const res = await putRequest(requestsPath + "/" + request.id, request);

    if (isOkStatus(res)) {
      dispatch(updateRequest(await res.json()));
    }
  };
};

export const deleteEmployeeRequest = (requestId) => {
  return async (dispatch) => {
    const res = await deleteRequest(requestsPath + "/" + requestId);

    if (isOkStatus(res)) {
      dispatch(removeRequest(requestId));
    }
  };
};

export const deleteTeamRequest = (requestId) => {
  return async (dispatch) => {
    const res = await deleteRequest(requestsPath + "/" + requestId);

    if (isOkStatus(res)) {
      dispatch(removeTeamRequest(requestId));
    }
  };
};

export const approveRequest = (requestId) => {
  return async (dispatch) => {
    const res = await putRequest(requestsPath + "/approve/" + requestId);

    if (isOkStatus(res)) {
      dispatch(updateTeamRequest(await res.json()));
    }
  };
};

export const getAvailability = (teamId, date) => {
  return async (dispatch) => {
    const res = await getRequest(
      requestsPath + "/availability/" + teamId + "/" + date
    );

    if (isOkStatus(res)) {
      dispatch(setAvailability(await res.json()));
    }
  };
};
