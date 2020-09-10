import React from "react";
import "./edit-form.scss";
import { FormTemplate } from "./form-template";
import { Button } from "./button";
import { Popup } from "./popup";

export const EditForm = ({ submit, fields, onHide, initialValue }) => (
  <Popup
    content={
      <div className="spacer">
        <p className="form-title">Edit value</p>
        <FormTemplate
          initialValue={initialValue}
          fields={fields}
          submit={(value) => {
            submit && submit(value);
            onHide && onHide();
          }}
          showSubmitButton={false}
          buttonTemplate={
            <div className="button-container">
              <Button type="yes-button" text="Submit" isSubmit={true} />
              <Button
                type="no-button"
                text="Cancel"
                onClick={() => {
                  onHide && onHide();
                }}
              />
            </div>
          }
        ></FormTemplate>
      </div>
    }
  />
);
