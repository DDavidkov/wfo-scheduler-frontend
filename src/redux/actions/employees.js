export const SET_CURRENT_EMPLOYEE = "SET_CURRENT_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_EMPLOYEE_INFO = "SET_EMPLOYEE_INFO";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const SET_TEAM = "SET_TEAM";
export const SET_ROLE = "SET_ROLE";

export const setCurrentEmployee = (employee) => ({
  type: SET_CURRENT_EMPLOYEE,
  payload: employee
});

export const setTeam = (team) => ({ type: SET_TEAM, payload: team });

export const setRole = (role) => ({ type: SET_ROLE, payload: role });

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee
});

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  payload: employees
});

export const setEmployeeInfo = (employeeInfo) => ({
  type: SET_EMPLOYEE_INFO,
  payload: employeeInfo
});

export const updateEmployee = (employee) => ({
  type: UPDATE_EMPLOYEE,
  payload: employee
});

export const removeEmployee = (employeeId) => ({
  type: REMOVE_EMPLOYEE,
  payload: employeeId
});
