import React from "react";

import { Input } from "./input";
import { Button } from "./buttons";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue || {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
  }

  onFieldChange = (value, fieldName) => {
    this.setState({
      value: { ...this.state.value, [fieldName]: value }
    });
  };

  render() {
    return (
      <form className="spacer" onSubmit={this.onSubmit}>
        {this.props.fields.map(({ label, name, ...rest }) => (
          <div key={"form-input-" + name}>
            <p className={this.props.isContrast ? "contrast-color" : undefined}>
              {label}:
            </p>
            <Input
              value={this.state.value[name] || ""}
              onChange={e => {
                this.onFieldChange(e.target.value, name);
              }}
              {...rest}
            />
          </div>
        ))}
        {this.props.buttonTemplate || (
          <Button type="submit" text={this.props.submitText || "Submit"} />
        )}
      </form>
    );
  }
}
