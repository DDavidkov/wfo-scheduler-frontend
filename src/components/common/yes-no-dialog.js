import React from "react";
import "./yes-no-dialog.scss";
import { Popup } from "./popup";
import { Button } from "./button";

export const YesNoDialog = ({ header, text, onYes, onHide }) => (
  <Popup
    onHide={onHide}
    content={
      <div className="dialog-container spacer">
        <p className="dialog-header">{header}</p>
        <p className="dialog-text">{text}</p>
        <div className="dialog-action-buttons spacer-horizontal">
          <Button
            className="yes-button"
            onClick={() => {
              onYes && onYes();
              onHide();
            }}
            type="yes-button"
            text="Yes"
          />
          <Button
            className="no-button"
            onClick={() => {
              onHide();
            }}
            type="no-button"
            text="No"
          />
        </div>
      </div>
    }
  />
);
