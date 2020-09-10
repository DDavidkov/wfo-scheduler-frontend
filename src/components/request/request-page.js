import React from "react";
import { connect } from "react-redux";
import "./request-page.scss";
import { FormTemplate } from "../common/form-template";
import {
  postEmployeeRequest,
  getAvailability
} from "../../redux/effects/requests";

const TOMORROW = new Date();
TOMORROW.setDate(TOMORROW.getDate() + 1);

export const Request = ({
  team,
  currentEmployee,
  availability,
  postEmployeeRequest,
  getAvailability
}) => {
  return (
    <div className="application-background">
      <div className="main-container request-container">
        <div className="spacer">
          <p className="form-title">Submit new request</p>
          {team && (
            <FormTemplate
              fields={[
                {
                  label: "Description",
                  name: "description",
                  required: true,
                  placeholder: "Enter description",
                  width: "100%"
                },
                {
                  label: "Team",
                  name: "team",
                  required: true,
                  disabled: true,
                  width: "100%"
                },
                {
                  label: "Date",
                  name: "date",
                  required: true,
                  placeholder: "Enter date",
                  formatter: {
                    to: (date) => date.toISOString().split("T")[0],
                    from: (dateString) => new Date(dateString)
                  },
                  type: "date",
                  min: TOMORROW.toISOString().split("T")[0],
                  onChange: (value) => {
                    getAvailability(team.id, value);
                  },
                  width: "100%"
                }
              ]}
              initialValue={{
                team: team.name,
                employee_id: currentEmployee
              }}
              submit={(value) => {
                if (availability && availability.overLimit === false) {
                  postEmployeeRequest(value);
                }
              }}
              submitDisabled={!availability || availability.overLimit !== false}
            ></FormTemplate>
          )}
        </div>
        <div className="availability-container spacer">
          {!availability ? (
            <p className="info-text">Select a date to see the availability</p>
          ) : (
            <>
              <p className="availability-label">
                {availability.requests.length
                  ? "The following team members have already requested WFO on this date:"
                  : "No team members have requested WFO on this date."}
              </p>
              <div className="availability-requests-container">
                {availability.requests.map((r) => (
                  <p className="request-label">{r.employee}</p>
                ))}
              </div>
              <p>{"Your team limit is: " + availability.teamLimit}</p>
              <p
                className={
                  availability.overLimit ? "color-error" : "color-success"
                }
              >
                {availability.overLimit
                  ? "You can't make a request for this date because your team quota is already fulfilled."
                  : "You can make a requests for this date"}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.employees.team,
  currentEmployee: state.employees.currentEmployee,
  availability: state.requests.availability
});
const mapDispatchToProps = { getAvailability, postEmployeeRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Request);
