import React from "react";
import "./index.scss";

import { Input } from "../common/input";
import { Button } from "../common/buttons";

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = () => {
    if (this.state.userName && this.state.password) {
      this.props.login &&
        this.props.login(this.state.userName, this.state.password);
    }
  };

  onInputChange = (e, fieldName) => {
    this.setState({ [fieldName]: e.target.value });
  };

  render() {
    return (
      <div className="landing-container">
        <div className="text-container spacer">
          <p className="title contrast-color">Schedule your work</p>
          <p className="text-lg contrast-color">
            We are here to ensure that the environment you work in is safe.
            Login to access and synchronize your schedule with your teammates.
          </p>
          <p className="contrast-color text-md">Username:</p>
          <Input
            placeholder="Enter username"
            onChange={e => {
              this.onInputChange(e, "userName");
            }}
            value={this.state.userName}
          />
          <p className="contrast-color text-md">Password:</p>
          <Input
            placeholder="Enter username"
            onChange={e => {
              this.onInputChange(e, "password");
            }}
            value={this.state.password}
          />
          <Button text="Login" onClick={this.handleLogin} />
        </div>
      </div>
    );
  }
}
