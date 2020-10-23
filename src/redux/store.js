import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import { createEpicMiddleware } from "redux-observable";

import reducer from "./reducers";
// import { rootEpic } from "./effects/requests-epic";
import rootSaga from "./effects/requests";

const sagaMiddleware = createSagaMiddleware();
// const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
);

// epicMiddleware.run(rootEpic);
sagaMiddleware.run(rootSaga);
