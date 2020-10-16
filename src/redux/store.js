import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import snackbar from "./reducers/snackbar";
import wfoRequests from "./reducers/wfo-requests";

const reducer = combineReducers({ snackbar, wfoRequests });

export const store = createStore(reducer, applyMiddleware(logger));
