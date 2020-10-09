import React, { useContext } from "react";

import { Link } from "react-router-dom";

import "./navigation-bar.scss";
import { Logo } from "./logo";
import { UserContext } from "./user-context";

export const NavigationBar = () => {
  const user = useContext(UserContext);
  return (
    <nav className="navigation space-between primary-background">
      <Logo />
      {!!user && (
        <ul className="centered nav-menu spacer-horizontal">
          <li>
            <Link to="/" className="contrast-color nav-item subtitle">
              Home
            </Link>
          </li>
          <li>
            <Link to="/request" className="contrast-color nav-item subtitle">
              Request
            </Link>
          </li>
          <li>
            <Link to="/manage" className="contrast-color nav-item subtitle">
              Manage
            </Link>
          </li>
          <li>
            <Link to="/profile" className="contrast-color nav-item subtitle">
              Profile
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
