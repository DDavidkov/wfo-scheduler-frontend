import React, { useState } from "react";
import "./landing-page.scss";

import { Button } from "../common/button";
import { TextInput } from "../common/inputs";
import { login } from "../../redux/effects/employees";
import { connect } from "react-redux";

export const Landing = ({ login }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const submit = (e) => {
    e.preventDefault();

    login(formValue.email, formValue.password);
  };

  const updateFormValue = (field, value) => {
    setFormValue({ ...formValue, [field]: value });
  };

  return (
    <div className="landing-container">
      <div className="landing-text-container spacer">
        <h2 className="title contrast-color">Schedule your work</h2>
        <p className="text-lg contrast-color">
          We are here to ensure that the environment you work in is safe. Login
          to access and synchronize your schedule with your teammates.
        </p>
        <form className="spacer" onSubmit={submit}>
          <div>
            <p className="text-md contrast-color">Email:</p>
            <TextInput
              placeholder="Enter email"
              type="email"
              required={true}
              value={formValue.email}
              onChange={(e) => {
                updateFormValue("email", e.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-md contrast-color">Password:</p>
            <TextInput
              placeholder="Enter password"
              type="password"
              required={true}
              value={formValue.password}
              onChange={(e) => {
                updateFormValue("password", e.target.value);
              }}
            />
          </div>
          <Button text="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default connect(undefined, { login })(Landing);
