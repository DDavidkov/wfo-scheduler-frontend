import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./manage-page.scss";
import { Grid } from "../common/grid";
import {
  deleteTeamRequest,
  getTeamRequests,
  approveRequest
} from "../../redux/effects/requests";

export const Manage = ({
  team,
  teamRequests,
  getTeamRequests,
  deleteTeamRequest,
  approveRequest
}) => {
  useEffect(() => {
    if (team) {
      getTeamRequests(team.id);
    }
  }, [team]);

  const columns = [
    { header: "Description", field: "description" },
    { header: "Employee", field: "employee" },
    { header: "Date", field: "date" },
    { header: "Approved", field: "approved" }
  ];

  return (
    <div className="spacer">
      <div className="space-between">
        <p className="title">Manage your team:</p>
        <p className="subtitle primary-color">{team && team.name}</p>
      </div>
      <p className="subtitle">Requests to approve</p>
      <Grid
        data={teamRequests.filter((r) => !r.approved)}
        columns={columns}
        canDelete={false}
        canEdit={false}
        onDelete={(row) => {
          deleteTeamRequest(row.id);
        }}
        actions={[
          {
            header: "Approve",
            template: (
              <div className="icon-button text-centered primary-color">
                <i className="far fa-calendar-check" />
              </div>
            ),
            action: (row) => {
              approveRequest(row.id);
            }
          },
          {
            header: "Reject",
            template: (
              <div className="icon-button text-centered primary-color">
                <i className="fas fa-trash"></i>
              </div>
            ),
            isDelete: true
          }
        ]}
      />
      <hr className="section-splitter" />
      <p className="subtitle">Approved Requests</p>
      <Grid
        data={teamRequests.filter((r) => r.approved)}
        columns={columns}
        canDelete={false}
        canEdit={false}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.employees.team,
  teamRequests: state.requests.teamRequests
});

const mapDispatchToProps = {
  getTeamRequests,
  approveRequest,
  deleteTeamRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
