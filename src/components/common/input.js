import React from "react";
import "./input.scss";

export const Input = ({ height = "2.25rem", width = "260px", ...rest }) => (
  <div style={{ width, height }} className="input-container">
    <input className="input" {...rest} />
  </div>
);
