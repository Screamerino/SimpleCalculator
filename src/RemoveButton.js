import React from "react";
import Button from "./Button";

export default class RemoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
  }

  execute() {
    let returnState;

    if (this.props.state.otherNumber) {
      let otherNumber = this.props.state.otherNumber;
      returnState = {
        otherNumber: otherNumber.slice(0, otherNumber.length - 1),
      };
    } else if (this.props.state.funcType) {
      returnState = {
        funcType: null,
      };
    } else {
      let number = this.props.state.number;
      returnState = {
        number: number.slice(0, number.length - 1),
      };
    }
    return returnState;
  }

  render() {
    return (
      <Button
        buttonValue="<-"
        onClick={this.props.onClick}
        execute={this.execute}
      />
    );
  }
}
