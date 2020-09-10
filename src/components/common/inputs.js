import React from "react";
import "./inputs.scss";

export const TextInput = ({
  disabled,
  width = "260px",
  height = "2rem",
  ...rest
}) => (
  <div
    style={{ width, height }}
    className={"text-input-container" + (disabled ? " disabled" : "")}
  >
    <input className="text-input" disabled={disabled} {...rest} />
  </div>
);
