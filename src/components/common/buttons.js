import React from "react";
import { Link } from "react-router-dom";

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

export const LinkButton = ({ text, ...rest }) => (
  <Link className="contrast-color btn btn-link primary-background" {...rest}>
    {text}
  </Link>
);
