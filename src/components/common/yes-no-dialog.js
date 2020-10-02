import React from "react";

import { Button } from "./buttons";

export const YesNoDialog = ({ header, text, onYes, onHide }) => (
  <div className="spacer">
    <p className="subtitle text-centered">{header}</p>
    <p className="text-md text-centered">{text}</p>
    <div className="centered spacer-horizontal">
      <Button
        onClick={() => {
          onYes && onYes();
          onHide();
        }}
        backgroundClass="success-background"
        text="Yes"
      />
      <Button
        onClick={() => {
          onHide();
        }}
        backgroundClass="error-background"
        text="No"
      />
    </div>
  </div>
);
