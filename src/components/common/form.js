import React from "react";

import { Input } from "./input";
import { Button } from "./button";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return <form className="spacer" onSubmit={this.onSubmit}></form>;
  }
}
