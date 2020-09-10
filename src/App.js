import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NavBar from "./components/core/nav-bar";
import Home from "./components/home/home-page";
import Manage from "./components/manage/manage-page";
import Request from "./components/request/request-page";
import Admin from "./components/admin/admin-page";
import Landing from "./components/landing/landing-page";
import { getTeam } from "./redux/effects/employees";

const App = ({ currentEmployee, getTeam }) => {
  useEffect(() => {
    if (currentEmployee) {
      getTeam(currentEmployee);
    }
  }, [currentEmployee]);

  return (
    <>
      <NavBar />
      {currentEmployee ? (
        <Router>
          <Switch>
            <Redirect path="/" exact to="/home" />
            <Route path="/manage">
              <Manage />
            </Route>
            <Route path="/request">
              <Request />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Landing />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentEmployee: state.employees.currentEmployee
});

const mapPropsToDispatch = { getTeam };

export default connect(mapStateToProps, mapPropsToDispatch)(App);
