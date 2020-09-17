import React from "react";
import { FormTemplate } from "./form-template";
import { Button } from "./button";
import { Popup } from "./popup";

export const EditForm = ({ submit, fields, onHide, initialValue }) => (
  <Popup
    content={
      <div className="spacer">
        <p className="subtitle">Edit value</p>
        <FormTemplate
          initialValue={initialValue}
          fields={fields}
          submit={(value) => {
            submit && submit(value);
            onHide && onHide();
          }}
          showSubmitButton={false}
          buttonTemplate={
            <div className="space-between">
              <Button
                additionalClasses="yes-button"
                text="Submit"
                type="submit"
              />
              <Button
                additionalClasses="no-button"
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
