import React, { useContext, useState } from "react";

const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg;
  } else {
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  }
};

const delayAction = (value, amount = 500) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, amount);
  });
};

const initialState = {
  count: 0
};

const incrementCount = {
  type: "INCREMENT",
  payload: 1
};

const resetCount = {
  type: "RESET"
};

const incrementCountAsync = (count = 1) => async dispatch => {
  const res = await delayAction(count);
  dispatch(incrementCount);
};

const resetCountAsync = () => async dispatch => {
  await delayAction();
  dispatch(resetCount);
};

const incrementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + payload };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const loggerMiddleware = ({ getState }) => next => action => {
  console.log("Current state: ");
  console.log(getState());

  console.log("Action:");
  console.log(action);

  const value = next(action);

  console.log("New state:");
  console.log(value);
};

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    action(dispatch, getState);
  } else {
    next(action);
  }
};

const StateContext = React.createContext(initialState);
const StoreContext = React.createContext(null);

const Store = props => {
  const [state, setState] = useState(initialState);

  const dispatchImplementation = action => {
    const newState = incrementReducer(state, action);
    setState(newState);
    return newState;
  };

  const applyMiddleware = (...middlewares) => {
    let dispatch = () => {
      throw Error(
        "No action dispatching while we are constructing the middlewares"
      );
    };

    const storeApi = {
      getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map(middleware => middleware(storeApi));

    dispatch = compose(...chain)(dispatchImplementation);
    return {
      getState,
      dispatch
    };
  };

  const getState = () => state;

  const storeWithMiddleware = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  );

  return (
    <StateContext.Provider value={state}>
      <StoreContext.Provider value={storeWithMiddleware}>
        <Counter />
      </StoreContext.Provider>
    </StateContext.Provider>
  );
};

const Counter = props => {
  const { count } = useContext(StateContext);
  const { dispatch } = useContext(StoreContext);

  return (
    <div>
      <p>Count is: {count}</p>
      <button
        onClick={() => {
          dispatch(incrementCountAsync());
        }}
      >
        Increment count
      </button>
      <button
        onClick={() => {
          dispatch(resetCountAsync());
        }}
      >
        Reset count
      </button>
    </div>
  );
};
