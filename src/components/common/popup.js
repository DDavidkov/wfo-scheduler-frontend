import React from "react";
import "./popup.scss";

export const Popup = ({ content }) => (
  <div className="overlay centered">
    <div className="popup-content-container">{content}</div>
  </div>
);
