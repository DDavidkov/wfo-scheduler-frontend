import React from "react";
import "./input.scss";

export const Input = ({
  height = "2.25rem",
  width = "260px",
  disabled,
  ...rest
}) => (
  <div
    style={{ width, height }}
    className={
      "input-container " +
      (disabled ? "input-container-disabled" : "input-container-normal")
    }
  >
    <input className="input" disabled={disabled} {...rest} />
  </div>
);
