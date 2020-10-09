import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { NavigationBar } from "./components/core/navigation-bar";
import { Snackbar } from "./components/common/snackbar";
import { Landing } from "./components/landing";

import { EMPLOYEE_INFO, TEAM_REQUESTS } from "./mock-data";
import { Home } from "./components/home";
import { Request } from "./components/request";
import { Manage } from "./components/manage";
import { Admin } from "./components/admin";

/* <Home />
<Request />
<Manage teamRequests={TEAM_REQUESTS} />;
<Admin employeeInfo={EMPLOYEE_INFO} /> */

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: { username: "Test" }, showSnackbar: false };

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
        <NavigationBar isLoggedIn={!!this.state.currentUser} />
        {this.state.currentUser ? (
          <div className="application-background">
            <div className="main-container">
              <Home />
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
      </Router>
    );
  }
}
