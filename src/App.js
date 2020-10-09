import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

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
    this.state = { currentUser: undefined, showSnackbar: false };

    this.login = this.login.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  login = (username, password) => {
    this.setState({ currentUser: { username, password }, showSnackbar: true });
  };

  closeSnackbar = () => {
    this.setState({ showSnackbar: false });
  };

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state.currentUser}>
          <NavigationBar />
          {this.state.currentUser ? (
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
            <Landing login={this.login} />
          )}
          <Snackbar
            isOpen={this.state.showSnackbar}
            onClose={this.closeSnackbar}
            message="Successfully logged in!"
          />
        </UserContext.Provider>
      </Router>
    );
  }
}
