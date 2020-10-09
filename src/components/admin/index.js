import React from "react";

import "./admin.scss";

import { LinkButton } from "../common/buttons";

const Field = ({ label, value }) => (
  <div className="field-container space-between spacer-horizontal">
    <p className="gray-color text-md">{label}:</p>
    <p className="text-md">{value}</p>
  </div>
);

export const Admin = ({ employeeInfo }) => {
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
          <LinkButton text="Logout" to="/" />
        </>
      )}
    </div>
  );
};
