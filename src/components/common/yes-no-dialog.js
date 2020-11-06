import React from "react";

import { Button } from "./buttons";
import { withPopup } from "./popup";

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
        variant="success"
        text="Yes"
      />
      <Button
        onClick={() => {
          onHide();
        }}
        variant="error"
        text="No"
      />
    </div>
  </div>
);

export default withPopup(YesNoDialog);
