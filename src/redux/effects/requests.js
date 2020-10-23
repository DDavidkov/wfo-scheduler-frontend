import { takeEvery, call, all, put } from "redux-saga/effects";
import { FETCH_REQUESTS, REQUESTS_PATH } from "../constants/wfo-requests";
import { getRequest, isOkStatus } from "../../utils/requests";
import { setRequests } from "../actions/wfo-requests";

export function* fetchRequestsSaga() {
  const res = yield call(getRequest, REQUESTS_PATH);

  if (isOkStatus(res)) {
    yield put(setRequests(yield res.json()));
  }
}

function* watchFetchRequests() {
  yield takeEvery(FETCH_REQUESTS, fetchRequestsSaga);
}

export default function* () {
  yield all([watchFetchRequests(), fetchRequestsSaga()]);
}
