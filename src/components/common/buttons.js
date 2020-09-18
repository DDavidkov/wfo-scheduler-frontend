import React from "react";

import "./buttons.scss";

export const Button = ({ text, ...rest }) => (
  <button className="primary-background contrast-color btn" {...rest}>
    {text}
  </button>
);
