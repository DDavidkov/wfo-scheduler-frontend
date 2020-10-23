import { ofType, combineEpics } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { FETCH_REQUESTS, REQUESTS_PATH } from "../constants/wfo-requests";
import { setRequests } from "../actions/wfo-requests";
import { of } from "rxjs";
import { showSnackbar } from "../actions/snackbar";

import { getToken } from "../../utils/requests";

const fetchRequestEpic = action$ =>
  action$.pipe(
    ofType(FETCH_REQUESTS),
    mergeMap(() =>
      ajax
        .getJSON(REQUESTS_PATH, { Authorization: getToken().token })
        .pipe(map(res => setRequests(res)))
    ),
    catchError(error => of(showSnackbar("Something went wrong")))
  );

export const rootEpic = combineEpics(fetchRequestEpic);
