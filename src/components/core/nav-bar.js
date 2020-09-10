import React from "react";
import "./nav-bar.scss";
import { Logo } from "./logo";
import { connect } from "react-redux";

export const NavBar = ({ currentEmployee, role, team }) => (
  <header>
    <nav className="navigation">
      <Logo />
      {currentEmployee && (
        <ul className="navigation-list spacer-horizontal">
          <li>
            <a className="navigation-list-item" href="/home">
              Home
            </a>
          </li>
          {team && team.name && (
            <li>
              <a className="navigation-list-item" href="/request">
                Request
              </a>
            </li>
          )}
          {role === "Manager" && (
            <li>
              <a className="navigation-list-item" href="/manage">
                Manage
              </a>
            </li>
          )}
          <li>
            <a className="navigation-list-item" href="/admin">
              {role === "Admin" ? "Admin" : "Profile"}
            </a>
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
