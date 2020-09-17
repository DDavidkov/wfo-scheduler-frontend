import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

export const Button = ({ text, additionalClasses, ...rest }) => (
  <button
    className={"btn primary-background contrast-color " + additionalClasses}
    {...rest}
  >
    {text}
  </button>
);

export const LinkButton = ({ text, additionalClasses, ...rest }) => (
  <Link
    className={
      "btn link-btn primary-background contrast-color " + additionalClasses
    }
    {...rest}
  >
    {text}
  </Link>
);
