import React from "react";
import "./snackbar.scss";

const DURATION = 2000;

export class Snackbar extends React.Component {
  componentDidMount() {
    if (this.props.isOpen) {
      this.timerId = setTimeout(() => {
        this.props.onClose();

        clearTimeout(this.timerId);
        this.timerId = undefined;
      }, DURATION);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen) {
      this.timerId = setTimeout(() => {
        this.props.onClose();

        clearTimeout(this.timerId);
        this.timerId = undefined;
      }, DURATION);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = undefined;
    }
  }

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
