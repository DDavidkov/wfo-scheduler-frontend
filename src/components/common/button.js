import React from "react";
import "./button.scss";

export const Button = ({ onClick, text, type, isSubmit, disabled }) => (
  <button
    className={"btn " + type}
    onClick={onClick}
    type={isSubmit ? "submit" : "button"}
    disabled={disabled}
  >
    {text}
  </button>
);

export const LinkButton = ({ href, text, onClick }) => (
  <a className={"btn link-btn"} href={href} onClick={onClick}>
    {text}
  </a>
);
