import React from "react";
import { Form } from "./form";
import { Button } from "./buttons";
import { withPopup } from "./popup";

export const EditForm = ({ onSubmit, fields, onHide, initialValue }) => (
  <div className="spacer">
    <p className="subtitle">Edit value</p>
    <Form
      initialValue={initialValue}
      fields={fields}
      onSubmit={value => {
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

export default withPopup(EditForm);
