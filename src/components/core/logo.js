import React from "react";

import "./logo.scss";

export const Logo = () => (
  <div className="spacer-horizontal centered">
    <img className="logo" alt="Kpmg logo" src="/kpmg-logo.png" />
    <p className="title contrast-color">WFO Scheduler</p>
  </div>
);
