import { combineReducers } from "redux";

import employees from "./employees";
import teams from "./teams";
import requests from "./requests";

export default combineReducers({ employees, teams, requests });
