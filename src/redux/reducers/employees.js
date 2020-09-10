import {
  SET_CURRENT_EMPLOYEE,
  SET_EMPLOYEES,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
  SET_TEAM,
  SET_ROLE,
  SET_EMPLOYEE_INFO
} from "../actions/employees";

let token;

try {
  token = JSON.parse(localStorage.getItem("jwtToken"));
} catch {}

const initialState = {
  employees: [],
  currentEmployee: (token || {}).id,
  team: undefined,
  role: (token || {}).role,
  employeeInfo: undefined
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_EMPLOYEE:
      return { ...state, currentEmployee: payload };
    case SET_TEAM:
      return { ...state, team: payload };
    case SET_ROLE:
      return { ...state, role: payload };
    case SET_EMPLOYEES:
      return { ...state, employees: payload };
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, payload] };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((u) =>
          u.id === payload.id ? payload : u
        )
      };
    case REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((u) => u.id !== payload)
      };
    case SET_EMPLOYEE_INFO:
      return {
        ...state,
        employeeInfo: payload
      };
    default:
      return state;
  }
};
