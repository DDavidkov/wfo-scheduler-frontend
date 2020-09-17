import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getEmployeeInfo, logout } from "../../redux/effects/employees";
import { LinkButton } from "../common/button";

import "./admin-page.scss";

const Field = ({ label, value }) => (
  <div className="field-container space-between spacer-horizontal">
    <p className="gray-color text-md">{label}:</p>
    <p className="text-md">{value}</p>
  </div>
);

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
    <div className="spacer">
      <p className="title">Profile</p>
      {employeeInfo && (
        <>
          <Field label="First name" value={employeeInfo.first_name} />
          <Field label="Last name" value={employeeInfo.last_name} />
          <Field label="Role" value={employeeInfo.role} />
          <Field
            label="Team"
            value={employeeInfo.team ? employeeInfo.team.name : "None"}
          />
          <Field
            label="Manager"
            value={
              employeeInfo.manager
                ? `${employeeInfo.manager.first_name} ${employeeInfo.manager.last_name}`
                : "None"
            }
          />
          <LinkButton
            text="Logout"
            to="/"
            onClick={() => {
              logout();
            }}
          />
        </>
      )}
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
