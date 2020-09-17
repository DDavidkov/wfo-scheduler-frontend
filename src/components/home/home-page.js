import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Grid } from "../common/grid";
import { LinkButton } from "../common/button";
import {
  putEmployeeRequest,
  deleteEmployeeRequest,
  getEmployeeRequests
} from "../../redux/effects/requests";

export const Home = ({
  currentEmployee,
  requests,
  getEmployeeRequests,
  putEmployeeRequest,
  deleteEmployeeRequest
}) => {
  const [currentRequests, setCurrentRequests] = useState([]);
  const [previousRequests, setPreviousRequests] = useState([]);

  useEffect(() => {
    getEmployeeRequests(currentEmployee);
  }, []);

  useEffect(() => {
    const now = new Date();
    const currentRequests = requests.filter((r) => new Date(r.date) > now);
    const previousRequests = requests.filter((r) => new Date(r.date) <= now);

    setCurrentRequests(currentRequests);
    setPreviousRequests(previousRequests);
  }, [requests]);

  const editFields = [
    {
      label: "Description",
      name: "description",
      required: true,
      placeholder: "Enter description"
    },
    {
      label: "Team",
      name: "team",
      required: true,
      disabled: true
    },
    {
      label: "Date",
      name: "date",
      required: true,
      placeholder: "Enter date",
      type: "date",
      formatter: {
        to: (date) => new Date(date).toISOString().split("T")[0],
        from: (dateString) => new Date(dateString)
      }
    }
  ];

  return (
    <div className="spacer">
      <div className="centered space-between">
        <p className="title">Your requests</p>
        <LinkButton to="/request" text="New Request" />
      </div>
      <Grid
        data={currentRequests}
        columns={[
          { header: "Description", field: "description" },
          { header: "Team", field: "team" },
          { header: "Date", field: "date" },
          { header: "Approved", field: "approved" }
        ]}
        editFields={editFields}
        onEdit={(request) => {
          putEmployeeRequest(request);
        }}
        onDelete={(request) => {
          deleteEmployeeRequest(request.id);
        }}
      />

      <hr className="section-splitter"></hr>

      <p className="title">Previous requests</p>
      <Grid
        data={previousRequests}
        canDelete={false}
        canEdit={false}
        columns={[
          { header: "Description", field: "description" },
          { header: "Team", field: "team" },
          { header: "Date", field: "date" },
          { header: "Approved", field: "approved" }
        ]}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentEmployee: state.employees.currentEmployee,
  requests: state.requests.requests
});
const mapDispatchToProps = {
  getEmployeeRequests,
  putEmployeeRequest,
  deleteEmployeeRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
