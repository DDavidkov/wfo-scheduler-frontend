import React from "react";
import "./request.scss";
import { Form } from "../common/form";

const TOMORROW = new Date();
TOMORROW.setDate(TOMORROW.getDate() + 1);

export const Request = ({
  team = { name: "Marvel" },
  currentEmployee,
  availability,
  getAvailability
}) => {
  return (
    <div className="request-container">
      <div className="spacer">
        <p className="title">Submit new request</p>
        {team && (
          <Form
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
                  to: date => date.toISOString().split("T")[0],
                  from: dateString => new Date(dateString)
                },
                type: "date",
                min: TOMORROW.toISOString().split("T")[0],
                onChange: value => {
                  //  getAvailability(team.id, value);
                },
                width: "100%"
              }
            ]}
            initialValue={{
              team: team.name,
              employee_id: currentEmployee
            }}
            submit={value => {
              console.log(value);
            }}
            submitDisabled={!availability || availability.overLimit !== false}
          ></Form>
        )}
      </div>
      <div
        className={
          "availability-container spacer" + (!availability ? " centered" : "")
        }
      >
        {!availability ? (
          <p className="info-text text-md gray-color">
            Select a date to see the availability
          </p>
        ) : (
          <>
            <p className="text-lg">
              {availability.requests.length
                ? "The following team members have already requested WFO on this date:"
                : "No team members have requested WFO on this date."}
            </p>
            <div className="availability-requests-container">
              {availability.requests.map(r => (
                <p className="text-md request-label">{r.employee}</p>
              ))}
            </div>
            <p className="text-md">
              {"Your team limit is: " + availability.teamLimit}
            </p>
            <p
              className={
                availability.overLimit ? "error-color" : "success-color"
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
  );
};
