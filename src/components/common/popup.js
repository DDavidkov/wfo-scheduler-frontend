import React from "react";
import "./popup.scss";

export const Popup = ({ content }) => (
  <div className="overlay">
    <div className="popup-content-container">{content}</div>
  </div>
);
