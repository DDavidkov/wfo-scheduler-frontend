import React from "react";
import { NavigationBar } from "./components/core/navigation-bar";
import { Landing } from "./components/landing/landing";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.login = this.login.bind(this);
  }

  login = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <>
        <NavigationBar isLoggedIn={this.state.isLoggedIn} />
        <Landing login={this.login} />
      </>
    );
  }
}
