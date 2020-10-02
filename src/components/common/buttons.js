import React from "react";

import "./buttons.scss";

export const Button = ({
  text,
  backgroundClass = "primary-background",
  ...rest
}) => (
  <button className={`${backgroundClass} contrast-color btn`} {...rest}>
    {text}
  </button>
);
