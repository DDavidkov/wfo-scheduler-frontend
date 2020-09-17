import React from "react";
import "./nav-bar.scss";
import { Logo } from "./logo";
import { connect } from "react-redux";
import { LinkButton } from "../common/button";

export const NavBar = ({ currentEmployee, role, team }) => (
  <header>
    <nav className="navigation space-between">
      <Logo />
      {currentEmployee && (
        <ul className="navigation-list spacer-horizontal">
          <li>
            <LinkButton
              additionalClasses="navigation-list-item text-md"
              to="/home"
              text="Home"
            />
          </li>
          {team && team.name && (
            <li>
              <LinkButton
                additionalClasses="navigation-list-item text-md"
                to="/request"
                text="Request"
              />
            </li>
          )}
          {role === "Manager" && (
            <li>
              <LinkButton
                additionalClasses="navigation-list-item text-md"
                to="/manage"
                text="Manage"
              />
            </li>
          )}
          <li>
            <LinkButton
              additionalClasses="navigation-list-item text-md"
              to="/admin"
              text={role === "Admin" ? "Admin" : "Profile"}
            />
          </li>
        </ul>
      )}
    </nav>
  </header>
);

const mapStateToProps = (state) => ({
  role: state.employees.role,
  team: state.employees.team,
  currentEmployee: state.employees.currentEmployee
});

export default connect(mapStateToProps)(NavBar);
