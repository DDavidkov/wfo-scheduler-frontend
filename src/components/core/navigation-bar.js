import React from "react";

import "./navigation-bar.scss";
import { Logo } from "./logo";

export const NavigationBar = ({ isLoggedIn }) => (
  <nav className="navigation space-between primary-background">
    <Logo />
    {isLoggedIn && (
      <ul className="centered nav-menu spacer-horizontal">
        <li>
          <a className="contrast-color nav-item subtitle">Home</a>
        </li>
        <li>
          <a className="contrast-color nav-item subtitle">Request</a>
        </li>
        <li>
          <a className="contrast-color nav-item subtitle">Manage</a>
        </li>
        <li>
          <a className="contrast-color nav-item subtitle">Profile</a>
        </li>
      </ul>
    )}
  </nav>
);
