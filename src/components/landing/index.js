import React from "react";
import "./index.scss";

import { Form } from "../common/form";

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = ({ userName, password }) => {
    if (this.props.login) {
      this.props.login(userName, password);
    }
  };

  render() {
    const fields = [
      {
        name: "userName",
        label: "Username",
        placeholder: "Enter username",
        required: true
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter password",
        required: true
      }
    ];

    return (
      <div className="landing-container">
        <div className="text-container spacer">
          <p className="title contrast-color">Schedule your work</p>
          <p className="text-lg contrast-color">
            We are here to ensure that the environment you work in is safe.
            Login to access and synchronize your schedule with your teammates.
          </p>
          <Form
            fields={fields}
            isContrast={true}
            initialValue={{ userName: "", password: "" }}
            submitText="Login"
            onSubmit={this.handleLogin}
          />
        </div>
      </div>
    );
  }
}
