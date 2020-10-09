import React from "react";

import "./manage.scss";
import { Table } from "../common/table";

export const Manage = ({ team = { name: "Marvel" }, teamRequests }) => {
  const columns = [
    { header: "Description", field: "description" },
    { header: "Employee", field: "employee" },
    { header: "Date", field: "date", type: "date" },
    { header: "Approved", field: "approved", type: "bool" }
  ];

  return (
    <div className="spacer">
      <div className="space-between">
        <p className="title">Manage your team:</p>
        <p className="subtitle primary-color">{team && team.name}</p>
      </div>
      <p className="subtitle">Requests to approve</p>
      <Table data={teamRequests.filter(r => !r.approved)} columns={columns} />
      <hr className="section-splitter" />
      <p className="subtitle">Approved Requests</p>
      <Table data={teamRequests.filter(r => r.approved)} columns={columns} />
    </div>
  );
};
