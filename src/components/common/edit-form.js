import React from "react";
import { Form } from "./form";
import { Button } from "./buttons";

export const EditForm = ({ onSubmit, fields, onHide, initialValue }) => (
  <div className="spacer">
    <p className="subtitle">Edit value</p>
    <Form
      initialValue={initialValue}
      fields={fields}
      submit={value => {
        onSubmit && onSubmit(value);
        onHide && onHide();
      }}
      buttonTemplate={
        <div className="space-between">
          <Button
            backgroundClass="success-background"
            text="Submit"
            type="submit"
          />
          <Button
            backgroundClass="error-background"
            text="Cancel"
            onClick={() => {
              onHide && onHide();
            }}
          />
        </div>
      }
    ></Form>
  </div>
);
