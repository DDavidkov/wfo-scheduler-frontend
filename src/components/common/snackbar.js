import React from "react";
import "./snackbar.scss";

const DURATION = 2000;

export class Snackbar extends React.Component {
  render() {
    const { isOpen, message, success = true } = this.props;
    return isOpen ? (
      <div
        className={
          "snackbar contrast-color " +
          (success ? "success-background" : "error-background")
        }
      >
        {message}
      </div>
    ) : (
      ""
    );
  }
}
