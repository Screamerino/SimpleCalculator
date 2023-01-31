import React from "react";
import Button from "./Button";

export default class ClearButton extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
  }

  execute() {
    return {
      number: "0",
      otherNumber: null,
      funcType: null,
      resultNumber: "0",
    };
  }

  render() {
    return (
      <Button
        buttonValue="AC"
        onClick={this.props.onClick}
        execute={this.execute}
      />
    );
  }
}
