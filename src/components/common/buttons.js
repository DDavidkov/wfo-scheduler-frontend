import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import "./buttons.scss";

const getBackground = props => {
  switch (props.variant) {
    case "success":
      return props.theme.successColor;
    case "error":
      return props.theme.errorColor;
    case "secondary":
      return props.theme.secondaryColor;
    case "primary":
    default:
      return props.theme.primaryColor;
  }
};

const StyledButton = styled.button`
  min-width: 7.5rem;
  font-family: "Nunito", sans-serif;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  text-align: center;
  background: ${getBackground};
  color: ${props => props.theme.contrastColor};
`;

export const Button = ({ text, ...rest }) => (
  <StyledButton {...rest}>{text}</StyledButton>
);

export const LinkButton = ({ text, ...rest }) => (
  <Link className="contrast-color btn btn-link primary-background" {...rest}>
    {text}
  </Link>
);
