import {
  SET_CURRENT_EMPLOYEE,
  SET_EMPLOYEES,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
  SET_TEAM,
  SET_ROLE,
  SET_EMPLOYEE_INFO
} from "../constants/employees";

export const setCurrentEmployee = employee => ({
  type: SET_CURRENT_EMPLOYEE,
  payload: employee
});

export const setTeam = team => ({ type: SET_TEAM, payload: team });

export const setRole = role => ({ type: SET_ROLE, payload: role });

export const addEmployee = employee => ({
  type: ADD_EMPLOYEE,
  payload: employee
});

export const setEmployees = employees => ({
  type: SET_EMPLOYEES,
  payload: employees
});

export const setEmployeeInfo = employeeInfo => ({
  type: SET_EMPLOYEE_INFO,
  payload: employeeInfo
});

export const updateEmployee = employee => ({
  type: UPDATE_EMPLOYEE,
  payload: employee
});

export const removeEmployee = employeeId => ({
  type: REMOVE_EMPLOYEE,
  payload: employeeId
});
