import { combineReducers } from "redux";

import employees from "./employees";
import snackbar from "./snackbar";
import teams from "./teams";
import wfoRequests from "./wfo-requests";

export default combineReducers({ employees, snackbar, teams, wfoRequests });
