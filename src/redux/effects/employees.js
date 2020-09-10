import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "../../utils/requests";
import { isOkStatus } from "../../utils/helper";
import {
  setCurrentEmployee,
  setEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
  setRole,
  setTeam,
  setEmployeeInfo
} from "../actions/employees";

const loginPath = process.env.REACT_APP_BACKEND_URL + "/auth/login";
const employeePath = process.env.REACT_APP_BACKEND_URL + "/employee";

export const login = (email, password) => {
  return async (dispatch) => {
    const res = await postRequest(loginPath, {
      email,
      password
    });

    if (isOkStatus(res)) {
      const token = await res.json();
      localStorage.setItem("jwtToken", JSON.stringify(token));

      dispatch(setCurrentEmployee(token.id));
      dispatch(setRole(token.role));
      dispatch(getTeam(token.id));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("jwtToken");
    dispatch(setCurrentEmployee(undefined));
  };
};

export const getTeam = (employeeId) => {
  return async (dispatch) => {
    const res = await getRequest(`${employeePath}/${employeeId}/team`);

    if (isOkStatus(res)) {
      dispatch(setTeam(await res.json()));
    }
  };
};

export const getEmployees = () => {
  return async (dispatch) => {
    const res = await getRequest(employeePath);

    if (isOkStatus(res)) {
      dispatch(setEmployees(await res.json()));
    }
  };
};

export const getEmployeeInfo = (employeeId) => {
  return async (dispatch) => {
    const res = await getRequest(`${employeePath}/${employeeId}`);

    if (isOkStatus(res)) {
      dispatch(setEmployeeInfo(await res.json()));
    }
  };
};

export const postEmployee = (employee) => {
  return async (dispatch) => {
    const res = await postRequest(employeePath, employee);

    if (isOkStatus(res)) {
      dispatch(addEmployee(await res.json()));
    }
  };
};

export const putEmployee = (employee) => {
  return async (dispatch) => {
    const res = await putRequest(employeePath + "/" + employee.id);

    if (isOkStatus(res)) {
      dispatch(updateEmployee(await res.json()));
    }
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    const res = await deleteRequest(employeePath + "/" + id);

    if (isOkStatus(res)) {
      dispatch(removeEmployee(await res.json()));
    }
  };
};
