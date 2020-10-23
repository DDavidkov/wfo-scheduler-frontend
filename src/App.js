import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from "react-redux";
import { showSnackbar, hideSnackbar } from "./redux/actions/snackbar";
import { login } from "./redux/effects/employees";

import { NavigationBar } from "./components/core/navigation-bar";
import { Snackbar } from "./components/common/snackbar";
import { Landing } from "./components/landing";

import { EMPLOYEE_INFO, TEAM_REQUESTS } from "./mock-data";
import { Home } from "./components/home";
import { Request } from "./components/request";
import { Manage } from "./components/manage";
import { Admin } from "./components/admin";

import { UserContext } from "./components/core/user-context";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  closeSnackbar = () => {
    this.props.hideSnackbar();
  };

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.props.currentEmployee}>
          <NavigationBar />
          {this.props.currentEmployee ? (
            <div className="application-background">
              <div className="main-container">
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/request">
                    <Request />
                  </Route>
                  <Route path="/manage">
                    <Manage teamRequests={TEAM_REQUESTS} />
                  </Route>
                  <Route path="/profile">
                    <Admin employeeInfo={EMPLOYEE_INFO} />
                  </Route>
                  <Redirect from="/home" to="/"></Redirect>
                </Switch>
              </div>
            </div>
          ) : (
            <Landing login={this.props.login} />
          )}
          <Snackbar
            isOpen={this.props.open}
            onClose={this.closeSnackbar}
            message={this.props.message}
          />
        </UserContext.Provider>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  open: state.snackbar.open,
  message: state.snackbar.message,
  currentEmployee: state.employees.currentEmployee
});

const mapDispatchToProps = { showSnackbar, hideSnackbar, login };

export default connect(mapStateToProps, mapDispatchToProps)(App);
