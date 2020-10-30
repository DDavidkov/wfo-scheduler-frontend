import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { Landing } from "./components/landing";
import { Snackbar } from "./components/common/snackbar";
import { setCurrentEmployee } from "./redux/actions/employees";
import { SET_CURRENT_EMPLOYEE } from "./redux/constants/employees";

import snackbarReducer from "./redux/reducers/snackbar";
import { SHOW_SNACKBAR } from "./redux/constants/snackbar";
import { fetchRequestsSaga } from "./redux/effects/requests";
import { getRequest } from "./utils/requests";
import { REQUESTS_PATH, SET_REQUESTS } from "./redux/constants/wfo-requests";

const sum = (a, b) => (a || 0) + (b || 0);

describe("Sum function tests", () => {
  it("Returns the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("Returns 0 if we give it two undefined values", () => {
    expect(sum()).toBe(0);
  });

  it("Returns the second value if the first one is undefined", () => {
    expect(sum(undefined, 1)).toBe(1);
  });

  it("Returns the first value if the second is undefined", () => {
    expect(sum(1)).toBe(1);
  });
});

describe("Landing component tests", () => {
  it("Renders correctly", () => {
    render(<Landing />);

    expect(screen.getByText("Schedule your work")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We are here to ensure that the environment you work in is safe. Login to access and synchronize your schedule with your teammates."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Login");
  });

  it("Login works properly", () => {
    const login = jest.fn();
    render(<Landing login={login} />);

    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "Test" } });
    fireEvent.change(passwordInput, { target: { value: "Password" } });

    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);

    expect(login).toHaveBeenCalled();
    expect(login).toHaveBeenLastCalledWith("Test", "Password");
  });
});

describe("Snackbar tests", () => {
  it("Snackbar calls onClose", () => {
    jest.useFakeTimers();

    const onClose = jest.fn();
    render(<Snackbar message="Hello world!" isOpen={true} onClose={onClose} />);

    expect(screen.getByText("Hello world!")).toBeInTheDocument();

    jest.runAllTimers();
    expect(onClose).toHaveBeenCalled();
  });
});

describe("Redux tests", () => {
  it("Actions", () => {
    expect(setCurrentEmployee(1)).toStrictEqual({
      type: SET_CURRENT_EMPLOYEE,
      payload: 1
    });
  });

  it("Reducers", () => {
    const initialState = snackbarReducer(undefined, {});
    expect(initialState.open).toBeFalsy();
    expect(initialState.message).toBeFalsy();

    const result = snackbarReducer(initialState, {
      type: SHOW_SNACKBAR,
      payload: "Test"
    });

    expect(result.open).toBe(true);
    expect(result.message).toBe("Test");
  });

  it("Sagas", () => {
    const saga = fetchRequestsSaga();
    const res = {
      status: 200,
      json: async () => {
        await new Promise(resolve => {
          resolve({
            message: "Test"
          });
        });
      }
    };
    const firstValue = saga.next();
    const call = firstValue.value;

    expect(call.type).toBe("CALL");
    const callPayload = call.payload;

    expect(callPayload.fn).toBe(getRequest);
    expect(callPayload.args[0]).toBe(REQUESTS_PATH);

    saga.next(res);
    const secondValue = saga.next({
      message: "Test"
    });
    const put = secondValue.value;

    expect(put.type).toBe("PUT");
    const putPayload = put.payload;

    expect(putPayload.action.type).toBe(SET_REQUESTS);
    expect(putPayload.action.payload.message).toBe("Test");
  });
});
