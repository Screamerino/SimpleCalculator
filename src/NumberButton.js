import React from "react";
import Button from "./Button";

export default class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.num = this.props.buttonValue;
  }

  execute() {
    let returnState = {};

    if (this.props.state.funcType === null) {
      if (!this.props.state.number.includes(".") || this.num !== ".") {
        returnState = {
          number: `${(this.props.state.number + this.num).replace(/^0+/, "")}`,
        };
      }
    } else {
      if (this.props.state.otherNumber === null) {
        returnState = {
          otherNumber: `${this.num}`,
        };
      } else if (
        !this.props.state.otherNumber.includes(".") ||
        this.num !== "."
      ) {
        returnState = {
          otherNumber: `${this.props.state.otherNumber + this.num}`,
        };
      }
    }
    return returnState;
  }

  render() {
    return (
      <Button
        buttonValue={this.num}
        onClick={this.props.onClick}
        execute={this.execute}
      />
    );
  }
}
