import React, { ChangeEvent } from "react";
import "./input.scss";

interface InputProps {
  height?: string;
  width?: string;
  disabled?: boolean;
  value: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  height = "2.25rem",
  width = "260px",
  disabled,
  ...rest
}: InputProps) => (
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
