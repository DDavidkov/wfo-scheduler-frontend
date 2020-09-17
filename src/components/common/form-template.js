import React, { useState } from "react";

import { TextInput } from "./inputs";
import { Button } from "./button";

export const FormTemplate = ({
  submit,
  fields = [],
  initialValue = {},
  buttonTemplate,
  submitDisabled
}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const onSubmit = (e) => {
    e.preventDefault();
    submit && submit(formValue);
  };

  const onFieldChange = (fieldName, value) => {
    setFormValue({ ...formValue, [fieldName]: value });
  };

  return (
    <form className="spacer" onSubmit={onSubmit}>
      {fields.map(({ label, name, formatter, onChange, ...rest }) => (
        <div key={"form-input-" + name}>
          <p className="text-md">{label}:</p>
          <TextInput
            value={
              formatter && formValue[name]
                ? formatter.to(formValue[name])
                : formValue[name] || ""
            }
            onChange={(e) => {
              onFieldChange(
                name,
                formatter && e.target.value
                  ? formatter.from(e.target.value)
                  : e.target.value
              );
              onChange && onChange(e.target.value);
            }}
            {...rest}
          />
        </div>
      ))}
      {buttonTemplate ? (
        buttonTemplate
      ) : (
        <Button text="Submit" type="submit" disabled={submitDisabled} />
      )}
    </form>
  );
};
