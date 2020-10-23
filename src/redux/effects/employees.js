import { postRequest, isOkStatus } from "../../utils/requests";
import { LOGIN_PATH } from "../constants/employees";
import { setCurrentEmployee, setTeam, setRole } from "../actions/employees";
import { showSnackbar } from "../actions/snackbar";

export const login = (email, password) => async dispatch => {
  const res = await postRequest(LOGIN_PATH, { email, password });

  if (isOkStatus(res)) {
    const data = await res.json();

    localStorage.setItem("jwtToken", JSON.stringify(data));

    dispatch(setCurrentEmployee(data.id));
    dispatch(setTeam(data.team));
    dispatch(setRole(data.role));
    dispatch(showSnackbar("User successfully logged in!"));
  }
};
