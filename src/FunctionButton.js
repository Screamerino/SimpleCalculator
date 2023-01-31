import React from "react";
import Button from "./Button";
import doMath from "./doMath";

export default class FunctionButton extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.operator = this.props.buttonValue;
  }

  execute() {
    let resultState = {};
    if (this.props.state.funcType) {
      resultState = doMath(this.props.state);
    }
    resultState.funcType = this.operator;
    return resultState;
  }

  render() {
    return (
      <Button
        buttonValue={this.operator}
        className="calculator__key--operator"
        onClick={this.props.onClick}
        execute={this.execute}
      />
    );
  }
}
