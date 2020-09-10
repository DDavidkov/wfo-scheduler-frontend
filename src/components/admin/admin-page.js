import React, { useEffect } from "react";
import "./admin-page.scss";
import { connect } from "react-redux";
import { getEmployeeInfo, logout } from "../../redux/effects/employees";
import { LinkButton } from "../common/button";

export const Admin = ({
  employeeInfo,
  currentEmployee,
  getEmployeeInfo,
  logout
}) => {
  useEffect(() => {
    getEmployeeInfo(currentEmployee);
  }, [currentEmployee]);
  return (
    <div className="application-background">
      <div className="main-container spacer">
        <p className="title">Profile</p>
        {employeeInfo && (
          <>
            <div className="field-container">
              <p className="label">First name:</p>
              <p className="info-text">{employeeInfo.first_name}</p>
            </div>
            <div className="field-container">
              <p className="label">Last name:</p>
              <p className="info-text">{employeeInfo.last_name}</p>
            </div>
            <div className="field-container">
              <p className="label">Role:</p>
              <p className="info-text">{employeeInfo.role}</p>
            </div>
            <div className="field-container">
              <p className="label">Team:</p>
              <p className="info-text">
                {employeeInfo.team ? employeeInfo.team.name : "None"}
              </p>
            </div>
            <div className="field-container">
              <p className="label">Manager:</p>
              <p className="info-text">
                {employeeInfo.manager
                  ? `${employeeInfo.manager.first_name} ${employeeInfo.manager.last_name}`
                  : "None"}
              </p>
            </div>
            <LinkButton
              text="Logout"
              href="/"
              onClick={() => {
                logout();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employeeInfo: state.employees.employeeInfo,
  team: state.employees.team,
  currentEmployee: state.employees.currentEmployee
});
const mapDispatchToProps = { getEmployeeInfo, logout };
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
