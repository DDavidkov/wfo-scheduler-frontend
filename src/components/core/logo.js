import React from "react";
import "./logo.scss";

export const Logo = () => (
  <div className="logo-container spacer-horizontal">
    <img alt="KPMG logo" className="kpmg-logo" src="/kpmg-logo.png" />
    <p className="logo-text title contrast-color">WFO Scheduler</p>
  </div>
);
