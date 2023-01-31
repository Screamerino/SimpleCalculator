import React from "react";
import Button from "./Button";
import doMath from "./doMath";

export default class EqualButton extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
  }

  execute() {
    return doMath(this.props.state);
  }

  render() {
    return (
      <Button
        buttonValue="="
        className="calculator__key--enter"
        onClick={this.props.onClick}
        execute={this.execute}
      />
    );
  }
}
