import React from "react";

import { Popup } from "./popup";
import { Button } from "./button";

export const YesNoDialog = ({ header, text, onYes, onHide }) => (
  <Popup
    onHide={onHide}
    content={
      <div className="spacer">
        <p className="subtitle text-centered">{header}</p>
        <p className="text-md text-centered">{text}</p>
        <div className="centered spacer-horizontal">
          <Button
            onClick={() => {
              onYes && onYes();
              onHide();
            }}
            additionalClasses="yes-button"
            text="Yes"
          />
          <Button
            onClick={() => {
              onHide();
            }}
            additionalClasses="no-button"
            text="No"
          />
        </div>
      </div>
    }
  />
);
