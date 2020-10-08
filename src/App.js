import React from "react";

import { NavigationBar } from "./components/core/navigation-bar";
import { Landing } from "./components/landing";
import { Home } from "./components/home";
import { Snackbar } from "./components/common/snackbar";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true, showSnackbar: false };

    this.login = this.login.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  login = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn, showSnackbar: true });
  };

  closeSnackbar = () => {
    this.setState({ showSnackbar: false });
  };

  render() {
    return (
      <>
        <NavigationBar isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? <Home /> : <Landing login={this.login} />}
        <Snackbar
          isOpen={this.state.showSnackbar}
          onClose={this.closeSnackbar}
          message="Successfully logged in!"
        />
      </>
    );
  }
}
